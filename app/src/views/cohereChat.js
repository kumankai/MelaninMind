import React, { useState, useEffect } from 'react';
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
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    initialChat();
  }, []);

  const cohere = new CohereClient({
    token: "CmTSYM5W6eTKpPlGPoLxOYrp9SkIu8qmdNSaKaFJ", // env vars not working...
  });

  // Needs to eventually pull last conversation from mongo
  const initialChat = async () => {
      const reply = await cohere.chat({
        message: "You are a chatbot greeting the user. In a friendly and extremely concise way, mention your last conversation together, if there was one.",
        stream: false,
        chatHistory: sampleHistory,
        maxTokens: 50,
      });

      updateMessages('CHATBOT', reply.text);
      console.log('prompt is: ', reply, 'chat is: ', reply.text);
  }
  
  const updateMessages = (role, message) => {
    const newConversation = [...conversation, { role: role, message: message }];
    setConversation(newConversation);
  };
  
  const userSendChat = async (e) => {
    e.preventDefault();

    if (!userInput.trim()) return; // Skip if the input is empty or whitespace

    updateMessages('USER', userInput);

    const reply = await cohere.chat({
      message: userInput,
      stream: false,
      chatHistory: [],
      maxTokens: 150,
    });

    updateMessages('CHATBOT', reply.text);

    setUserInput(''); // Clear user input after sending the message
  };

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
        <form onSubmit={userSendChat}>
          <input
            type='text'
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}></input>
          <button type="submit">Chat</button>
        </form>
        
      </div>
    </div>
  );

}

export default ChatRoom;
