
import React, { useState, useRef, useEffect } from 'react';
import { Send, Brain, User, Loader } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Hello! I\'m DeepSeek AI, your advanced AI assistant. I\'m currently training myself to become more intelligent. How can I help you today?',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate AI response with self-training context
    setTimeout(() => {
      const responses = [
        "I'm analyzing your query and learning from it to improve my responses. Based on my current training, here's what I understand...",
        "Interesting question! I'm processing this through my neural networks and updating my knowledge base. Let me provide you with a comprehensive answer...",
        "Thank you for helping me learn! I'm continuously improving my understanding. Here's my current analysis...",
        "Your input is valuable for my self-training process. I'm evolving my responses based on our conversation...",
        "I'm applying my latest training to answer this. My neural pathways are adapting as we speak..."
      ];

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: responses[Math.floor(Math.random() * responses.length)] + " This is a simulation of my self-training capabilities. In a real implementation, I would use advanced language models to provide meaningful responses while continuously learning from our interactions.",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="bg-gray-900/30 backdrop-blur-lg border border-purple-500/20 rounded-xl h-96 flex flex-col">
      <div className="flex items-center justify-between p-4 border-b border-purple-500/20">
        <h3 className="text-lg font-semibold text-white">DeepSeek Chat</h3>
        <div className="flex items-center space-x-2 text-green-400 text-sm">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span>Self-Training Active</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex items-start space-x-2 max-w-[80%] ${message.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
              <div className={`p-2 rounded-lg ${message.role === 'user' ? 'bg-purple-600' : 'bg-gray-800'}`}>
                {message.role === 'user' ? (
                  <User className="h-4 w-4 text-white" />
                ) : (
                  <Brain className="h-4 w-4 text-purple-400" />
                )}
              </div>
              <div className={`p-3 rounded-lg ${message.role === 'user' ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-200'}`}>
                <p className="text-sm">{message.content}</p>
                <p className="text-xs opacity-60 mt-1">
                  {message.timestamp.toLocaleTimeString()}
                </p>
              </div>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="flex items-start space-x-2">
              <div className="p-2 rounded-lg bg-gray-800">
                <Brain className="h-4 w-4 text-purple-400" />
              </div>
              <div className="p-3 rounded-lg bg-gray-800 text-gray-200">
                <div className="flex items-center space-x-2">
                  <Loader className="h-4 w-4 animate-spin" />
                  <span className="text-sm">DeepSeek is thinking and learning...</span>
                </div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-purple-500/20">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask DeepSeek anything..."
            className="flex-1 bg-gray-800 border border-purple-500/30 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
            disabled={isLoading}
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="bg-gradient-to-r from-purple-600 to-pink-600 p-2 rounded-lg text-white hover:from-purple-700 hover:to-pink-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
