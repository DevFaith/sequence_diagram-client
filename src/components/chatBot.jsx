import React, { useCallback, useEffect, useState } from 'react';
const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  
  const sendMessage = async () => {
    if (input.trim() === '') return;

    const newMessage = { text: input, isUser: true };
    setMessages([...messages, newMessage]);

    try {
      const response = await fetch('http://localhost:3000/webhook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: input }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      const botMessage = { text: data.response, isUser: false };
      setMessages([...messages, newMessage, botMessage]);
    } 
    catch (error) {
      console.error('Error fetching data:', error);
    }

    setInput('');
  };

  useEffect(useCallback(() => {
    const elem = document.getElementById('messages');
    if(!elem) return
    elem.scrollTop = elem.scrollHeight
  }, []), [messages]);

  return (
    <div className="fixed bottom-0 right-0 w-full max-w-xs p-4 bg-white border-t border-gray-300">
      <div id="messages" className="overflow-y-auto max-h-48 mb-2">
        {messages.map((msg, index) => (
          <div  key={index} className={msg.isUser ? 'text-right' : 'text-left'}>
            <p
              className={
                msg.isUser
                  ? 'bg-blue-200 inline-block p-2 rounded-lg'
                  : 'bg-gray-200 inline-block p-2 rounded-lg'
              }
            >
              {msg.text}
            </p>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          className="border border-gray-300 p-2 flex-grow rounded-l-lg"
        />
        <button onClick={sendMessage} className="bg-blue-500 text-white p-2 rounded-r-lg">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
