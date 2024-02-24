import React from 'react';
import { CohereClient } from "cohere-ai";

function ChatRoom() {

  

  const cohere = new CohereClient({
    token: "CmTSYM5W6eTKpPlGPoLxOYrp9SkIu8qmdNSaKaFJ", 
  });

  // (async () => {
  //   const stream = await cohere.chatStream({
  //     model: "command",
  //     message: "<YOUR MESSAGE HERE>",
  //     chatHistory: [{"role": "User", "message": "give me a list of housing resources for black students in toronto"}],
  //     promptTruncation: "AUTO",
  //     citationQuality: "accurate",
  //     connectors: [{"id":"web-search"}],
  //     documents: []
  //   });

  //   for await (const chat of stream) {
  //       if (chat.eventType === "text-generation") {
  //           process.stdout.write(chat.text);
  //       }
  //   }
  // })();


  // (async () => {
  //   const chatStream = await cohere.chatStream({
  //       chatHistory: [
  //           { role: "USER", message: "Who discovered gravity?" },
  //           { role: "CHATBOT", message: "The man who is widely credited with discovering gravity is Sir Isaac Newton" }
  //       ],
  //       message: "What year was he born?",
  //       // perform web search before answering the question. You can also use your own custom connector.
  //       connectors: [{ id: "web-search" }],
  //   });

  //   for await (const message of chatStream) {
  //       if (message.eventType === "text-generation") {
  //           console.log(message);
  //       }
  //   }
  // })();

  (async () => {
    const prediction = await cohere.generate({
        prompt: "hello",
        maxTokens: 10,
    });
    
    console.log("Received prediction", prediction);
  })();






  return (
    <div>
      <h1>Chat Room</h1>
      <div>
        <p>Welcome to the Chat Room!</p>
        <form>
          
          <button onClick={() => console.log('/chat')}>Send Message</button>
        </form>
        
      </div>
    </div>
  );
  
}

export default ChatRoom;
