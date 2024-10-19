import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ChatPage = () => {
    const [chats, setChats] = useState([]);

    const fetchChats = async () => {
        try {
            const response = await axios.get('/api/chat');
            setChats(response.data);  // Use response.data to access the actual data
        } catch (error) {
            console.error('Error fetching chats:', error);
        }
    };

    useEffect(() => {
        fetchChats();
    }, []);

    return (
        <div>
            {chats.map((chat) => (
                <div key={chat._id}> {/* Add a unique key, assuming _id is available */}
                    {chat.chatName} {/* Display chatName or any other property */}
                </div>
            ))}
        </div>
    );
}

export default ChatPage;
