import React, { useState } from 'react';
import './chatbot.css';  // 새로운 CSS 파일을 import 합니다

interface Message {  // 인터페이스 이름을 단수형으로 수정
    sender: string;
    text: string;
}

const Chatbot = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const sendMessage = async (e: React.FormEvent) => {  // 폼 제출 이벤트 추가
        e.preventDefault();
        if (input.trim()) {
            const userMessage = { sender: 'user', text: input };
            setMessages(prev => [...prev, userMessage]);  // 함수형 업데이트 사용

            // API 호출
            try {
                const response = await fetch('http://localhost:8089/api/chatbot/test', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ message: input }),
                });
                const data = await response.json();
                console.log(data);

                const botMessage = { sender: 'bot', text: data.reply };
                setMessages(prev => [...prev, botMessage]);
            } catch (error) {
                console.error('Error:', error);
            }
            setInput('');
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            sendMessage(e);
        }
    };

    return (
        <>
            <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
                {isOpen && (
                    <>
                        <div className="chat-window">
                            {messages.map((msg, index) => (
                                <div key={index} className={`message ${msg.sender}`}>
                                    {msg.text}
                                </div>
                            ))}
                        </div>
                        <form onSubmit={sendMessage} className="chat-input-form">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Type your message..."
                                className="chat-input"
                            />
                            <button type="submit" className="chat-send-button">
                                Send
                            </button>
                        </form>
                    </>
                )}
            </div>
            <button
                className="chatbot-toggle-button"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? '×' : '💬'}
            </button>
        </>
    );
};

export default Chatbot;
