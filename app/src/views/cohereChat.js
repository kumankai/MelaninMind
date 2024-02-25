import { useState, React } from 'react';
import { CohereClient } from "cohere-ai";
import Message from './message.js';
import '../css/Chatbox.css';
import '../css/cohereChat.css';

function ChatRoom() {
  const [collapsed, setCollapsed] = useState(false);
  
  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const sampleHistory = [
    {
      role: "USER",
      message: "I have mastered python, but I am a rookie in Java."
    },
    {
      role: "USER",
      message: "What language should I work on today?"
    },
    {
      role: "CHATBOT",
      message: "Since you have mastered Python, I suggest you work on Java or another language you are less comfortable in."
    },
  ];

  const [conversation, setConversation] = useState(sampleHistory);

  const cohere = new CohereClient({
    token: "CmTSYM5W6eTKpPlGPoLxOYrp9SkIu8qmdNSaKaFJ", // env vars not working...
  });

  // Needs to eventually pull last conversation from mongo
  const initialChat = async (e) => {
    e.preventDefault();
      const reply = await cohere.chat({
        message: "You are a chatbot greeting the user. In a friendly and extremely concise way, mention your last conversation together, if there was one.",
        stream: false,
        chatHistory: sampleHistory,
        maxTokens: 50,
      });

      console.log('prompt is: ', reply, 'chat is: ', reply.text);
  }
  
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

  return (
    <div className={`chat-box ${collapsed ? 'collapsed' : ''}`}>
      <div className="header" onClick={toggleCollapse}>
        <h2>Chat</h2>
        <span>{collapsed ? '▼' : '▲'}</span>
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

  );

}

export default ChatRoom;
