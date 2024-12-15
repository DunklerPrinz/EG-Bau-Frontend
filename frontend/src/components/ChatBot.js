// src/components/ChatBot.js
import React, { useState, useRef, useEffect } from 'react';
import './ChatBot.css';

function ChatBot({ onClose }) {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef(null);
    const typingIntervalRef = useRef(null); // Ref to store the typing interval

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        // Cleanup on unmount
        return () => {
            if (typingIntervalRef.current) {
                clearInterval(typingIntervalRef.current);
            }
        };
    }, []);

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = { text: input, sender: "user" };
        setMessages([...messages, userMessage]);
        setInput("");
        setLoading(true);

        try {
            const response = await fetch('http://localhost:8000/api/chatbot/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: input }),
            });
            const data = await response.json();

            // Initialize botMessage with empty text
            const botMessage = { text: "", sender: "bot" };
            setMessages(prevMessages => [...prevMessages, botMessage]);

            // Start typing effect
            const botResponse = data.response;
            let index = 0;
            const typingSpeed = 43; // Adjust typing speed (milliseconds per character)

            typingIntervalRef.current = setInterval(() => {
                index++;
                setMessages(prevMessages => {
                    const updatedMessages = [...prevMessages];
                    const lastMessageIndex = updatedMessages.length - 1;
                    const lastMessage = { ...updatedMessages[lastMessageIndex] };

                    if (lastMessage.sender === "bot") {
                        lastMessage.text = botResponse.slice(0, index);
                        updatedMessages[lastMessageIndex] = lastMessage;
                    }

                    return updatedMessages;
                });

                if (index >= botResponse.length) {
                    clearInterval(typingIntervalRef.current);
                    setLoading(false); // Stop loading when typing is complete
                }
            }, typingSpeed);

        } catch (error) {
            console.error("Error fetching bot response:", error);
            const errorMessage = { text: "Sorry, something went wrong.", sender: "bot" };
            setMessages(prevMessages => [...prevMessages, errorMessage]);
            setLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <div className="chatbot-backdrop">
            <div className="chatbot-container">
                <div className="chat-header">
                    <button className="close-button" onClick={onClose}>✖</button>
                    <h2>🌿 EG-BauGPT</h2>
                    <p>Neugierig? Frage unseren Inhaber, Egzon, was du gerne über uns wissen würdest!</p>
                </div>
                <div className="chat-window">
                    {messages.map((msg, index) => (
                        <div key={index} className={`message ${msg.sender}`}>
                            <div className="message-content">{msg.text}</div>
                        </div>
                    ))}
                    {loading && <div className="message bot loading">Typing...</div>}
                    <div ref={messagesEndRef} />
                </div>
                <div className="input-area">
                    <input
                        type="text"
                        placeholder="Type your message..."
                        value={input}
                        onChange={handleInputChange}
                        onKeyPress={handleKeyPress}
                    />
                    <button onClick={handleSendMessage} className="send-button">
                        <i className="fas fa-paper-plane"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ChatBot;
