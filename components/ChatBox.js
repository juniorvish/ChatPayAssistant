```jsx
import React, { useState, useEffect } from 'react';
import styles from '../styles/ChatBox.module.css';

const ChatBox = ({ handleSendMessage }) => {
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim() !== '') {
            handleSendMessage(message);
            setMessage('');
        }
    };

    return (
        <div className={styles.chatBox}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={message}
                    onChange={handleChange}
                    placeholder="Type your message here..."
                    className={styles.chatInput}
                />
                <button type="submit" className={styles.sendButton}>
                    Send
                </button>
            </form>
        </div>
    );
};

export default ChatBox;
```