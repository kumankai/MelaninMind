import { useState, React } from 'react';
import { CohereClient } from "cohere-ai";
import Message from './message.js';
import '../css/Chatbox.css';
import '../css/cohereChat.css';
import Conversation from './Conversation.js';

function ChatRoom() {
  const [collapsed, setCollapsed] = useState(false);
  
  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const conversations = [
    {
      chatId: 1,
      conversation: [
        {
          role: "USER",
          message: "I'm interested in learning web development. Where should I start?"
        },
        {
          role: "CHATBOT",
          message: "You can start by learning HTML, CSS, and JavaScript. They are the building blocks of web development."
        }
      ]
    },
    {
      chatId: 2,
      conversation: [
        {
          role: "USER",
          message: "What are the benefits of using React.js for front-end development?"
        },
        {
          role: "CHATBOT",
          message: "React.js allows for the creation of interactive user interfaces, improves performance with its virtual DOM, and offers a large ecosystem of libraries and tools."
        }
      ]
    },
    {
      chatId: 3,
      conversation: [
        {
          role: "USER",
          message: "What are some good resources for learning machine learning?"
        },
        {
          role: "CHATBOT",
          message: "You can check out online courses on platforms like Coursera and Udacity, as well as books such as 'Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow.'"
        }
      ]
    },
    {
      chatId: 4,
      conversation: [
        {
          role: "USER",
          message: "I'm having trouble understanding recursion. Can you explain it to me?"
        },
        {
          role: "CHATBOT",
          message: "Recursion is a programming technique where a function calls itself to solve smaller instances of the same problem. It's often used in algorithms involving trees, graphs, and mathematical calculations."
        }
      ]
    },
    {
      chatId: 5,
      conversation: [
        {
          role: "USER",
          message: "What programming language should I learn if I want to build mobile apps?"
        },
        {
          role: "CHATBOT",
          message: "For mobile app development, you can learn languages like Java or Kotlin for Android development, and Swift for iOS development. Alternatively, you can use frameworks like React Native or Flutter for cross-platform development."
        }
      ]
    }
  ];
  

  const [conversation, setConversation] = useState(conversations[0].conversation);

  const cohere = new CohereClient({
    token: "CmTSYM5W6eTKpPlGPoLxOYrp9SkIu8qmdNSaKaFJ", // env vars not working...
  });

    // Needs to eventually pull last conversation from mongo
    // const initialChat = async (e) => {
    //   e.preventDefault();
    //     const reply = await cohere.chat({
    //       message: "You are a chatbot greeting the user. In a friendly and extremely concise way, mention your last conversation together, if there was one.",
    //       stream: false,
    //       chatHistory: conversations[0].conversation,
    //       maxTokens: 50,
    //     });
  
    //     console.log('prompt is: ', reply, 'chat is: ', reply.text);
    // }
  
  const userSendChat = async (e) => {
    e.preventDefault();

    const updateMessages = (user, bot) => {
      const newConversation = [...conversation];
      newConversation.push(user);
      newConversation.push(bot);

      setConversation(newConversation)
    };

    const userMessage = e.target.parentElement.querySelector('input').value
    const reply = await cohere.chat({
      message: userMessage,
      stream: false,
      chatHistory: [],
      maxTokens: 150,
    });

    const userObj ={
      role: "USER",
      message: userMessage
    };
    
    const chatbotObj = {
        role: "CHATBOT",
        message: reply.text
    };

    console.log(userMessage)

    updateMessages(userObj, chatbotObj);

    console.log(conversation)
  }

  const selectConversation = (e) => {
    const selector = e.target.parentElement.getAttribute('class');
    setConversation(conversations[selector].conversation);

  }

  return (
    <div className={`chat-box ${collapsed ? 'collapsed' : ''}`}>
      <div className="header" onClick={toggleCollapse}>
        <h2>Chat</h2>
        <span>{collapsed ? '▼' : '▲'}</span>
      </div>

      <div className="chat-contain">
        <div className='conversations' >
          {conversations.map((item, index) => (
            <div onClick={selectConversation} key={index} index={index} className={index} >
              <Conversation className="conv-tab" conv={item} />
            </div>
          ))}
        </div>
        <div className="messages">
          {conversation.map((item, index) => (
            <Message className="message" key={index} sender={item.role} messageText={item.message} />
          ))}
          <div ref={(el) => { el && el.scrollIntoView({ behavior: 'smooth' }); }}></div>
          {!collapsed && (
            <form className='message-form'>
              <input type='text' placeholder="Type your message..."  ></input>
              <button onClick={userSendChat}>Send</button>
            </form>
          )}
        </div>
      </div>

    </div>

  );

}

export default ChatRoom;
