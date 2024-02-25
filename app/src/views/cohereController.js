import React from 'react';

function ChatRoom() {
  const handleClick = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/test");
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return (
    <div>
      <h1>Chat Room</h1>
      <div>
        <p>Welcome to the Chat Room!</p>
        <button onClick={handleClick}>Start Chatting</button>
      </div>
    </div>
  );
}

export default ChatRoom;