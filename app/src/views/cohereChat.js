import React from 'react';
import { CohereClient } from "cohere-ai";

function ChatRoom() {

  

  const cohere = new CohereClient({
    token: "VWR26LnBwuy2gQ6xgb40MgSZ2FrMlBMmoceGrUq3", // This is your trial API key
  });

  (async () => {
    const stream = await cohere.chatStream({
      model: "command",
      message: "<YOUR MESSAGE HERE>",
      chatHistory: [{"role": "User", "message": "give me a list of housing resources for black students in toronto"}],
      promptTruncation: "AUTO",
      citationQuality: "accurate",
      connectors: [{"id":"web-search"}],
      documents: []
    });

    for await (const chat of stream) {
        if (chat.eventType === "text-generation") {
            process.stdout.write(chat.text);
        }
    }
  })();






  return (
    <div>
      <h1>Chat Room</h1>
      <div>
        <p>Welcome to the Chat Room!</p>
        <button onClick={() => console.log('/chat')}>Start Chatting</button>
      </div>
    </div>
  );
}

export default ChatRoom;
