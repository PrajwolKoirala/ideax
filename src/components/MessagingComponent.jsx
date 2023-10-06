import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MessagingComponent = ({ classId }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = async () => {
    try {
      const response = await axios.post(
        `http://localhost:8020/api/messaging/${classId}/sendMessage`,
        { text: newMessage },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        }
      );

      // Update messages state with the new message
      setMessages([...messages, response.data]);

      // Clear the input field after sending
      setNewMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  useEffect(() => {
    // Fetch messages associated with the class
    // This should be done when the component mounts
    const fetchMessages = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8020/api/messaging/${classId}/messages`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('access_token')}`,
            },
          }
        );

        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, [classId]);

  return (
    <div>
      <div>
        {messages.map((message) => (
          <div key={message._id}>
            <p>{message.sender.name}: {message.text}</p>
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default MessagingComponent;
