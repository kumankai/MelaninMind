import React from 'react';

function ChatRoom() {
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