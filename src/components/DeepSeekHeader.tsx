
import React from 'react';
import { Brain, Zap, Settings, User } from 'lucide-react';

const DeepSeekHeader = () => {
  return (
    <header className="bg-black/80 backdrop-blur-lg border-b border-purple-500/20 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Brain className="h-8 w-8 text-purple-400" />
              <div className="absolute inset-0 h-8 w-8 bg-purple-400 blur-lg opacity-30 animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                DeepSeek Studio
              </h1>
              <p className="text-xs text-gray-400">Self-Training AI Platform</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#dashboard" className="text-gray-300 hover:text-purple-400 transition-colors">Dashboard</a>
            <a href="#models" className="text-gray-300 hover:text-purple-400 transition-colors">Models</a>
            <a href="#training" className="text-gray-300 hover:text-purple-400 transition-colors">Training</a>
            <a href="#api" className="text-gray-300 hover:text-purple-400 transition-colors">API</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-lg bg-purple-600/20 text-purple-400 hover:bg-purple-600/30 transition-colors">
              <Settings className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-lg bg-purple-600/20 text-purple-400 hover:bg-purple-600/30 transition-colors">
              <User className="h-5 w-5" />
            </button>
            <button className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 rounded-lg text-white hover:from-purple-700 hover:to-pink-700 transition-all">
              <Zap className="h-4 w-4" />
              <span>Train Now</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DeepSeekHeader;
