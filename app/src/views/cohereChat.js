import { useState, React } from 'react';
import { CohereClient } from "cohere-ai";
import Message from './message.js';

function ChatRoom() {
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

    const updateMessages = (role, message) => {
      const newConversation = [...conversation];
      newConversation.push(
        {
          role: role,
          message: message
        }
      );

      setConversation(newConversation)
    };

    const userMessage = e.target.parentElement.querySelector('input').value
    const reply = await cohere.chat({
      message: userMessage,
      stream: false,
      chatHistory: [],
      maxTokens: 150,
    });

    updateMessages("USER", userMessage);
    updateMessages("CHATBOT", reply.text);
  }

  return (
    <div>
      <h1>Chat Room</h1>
      <div>
        <p>Welcome to the Chat Room!</p>
        <div className='chat-container'>
          {conversation.map((item, index) => (
            <Message key={index} sender={item.role} messageText={item.message} />
          ))}
        </div>
        <form>
          <input type='text'></input>
          <button onClick={userSendChat}>Chat</button>
        </form>
        
      </div>
    </div>
  );

}

export default ChatRoom;
