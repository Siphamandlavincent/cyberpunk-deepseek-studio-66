
import React, { useEffect, useState } from 'react';
import DeepSeekHeader from '../components/DeepSeekHeader';
import StatsOverview from '../components/StatsOverview';
import ModelCard from '../components/ModelCard';
import TrainingDashboard from '../components/TrainingDashboard';
import ChatInterface from '../components/ChatInterface';
import { deepseekEngine } from '../utils/deepseekEngine';
import { Brain, Sparkles, Code, Calculator } from 'lucide-react';

const Index = () => {
  const [models, setModels] = useState<any[]>([]);

  useEffect(() => {
    // Initialize DeepSeek engine and load models
    const loadModels = async () => {
      // Give the engine time to initialize
      setTimeout(() => {
        const allModels = deepseekEngine.getAllModels();
        setModels(allModels);
      }, 1000);
    };

    loadModels();

    // Start self-training process
    deepseekEngine.startSelfTraining();
  }, []);

  const getModelIcon = (type: string) => {
    switch (type) {
      case 'foundation': return Brain;
      case 'conversational': return Sparkles;
      case 'code-generation': return Code;
      case 'mathematical': return Calculator;
      default: return Brain;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-purple-600/5 to-transparent blur-3xl"></div>
      </div>

      <DeepSeekHeader />

      <main className="relative z-10 container mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              DeepSeek Studio
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Advanced Self-Training AI Platform with Real-Time Model Evolution
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Self-Training Active</span>
            </div>
            <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span>Neural Evolution In Progress</span>
            </div>
            <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span>Real-Time Inference</span>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <StatsOverview />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-8">
          {/* Training Dashboard - Takes 2 columns */}
          <div className="xl:col-span-2">
            <TrainingDashboard />
          </div>

          {/* Chat Interface - Takes 1 column */}
          <div className="xl:col-span-1">
            <ChatInterface />
          </div>
        </div>

        {/* Models Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-white">Active Models</h2>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 rounded-lg text-white hover:from-purple-700 hover:to-pink-700 transition-all">
              Deploy New Model
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {models.map((model, index) => (
              <ModelCard
                key={model.name}
                name={model.name}
                type={model.type}
                status={model.status}
                accuracy={model.accuracy}
                tokens={model.tokens}
                lastUpdated="2 mins ago"
              />
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-purple-500/20 pt-8 text-center text-gray-400">
          <p className="mb-4">
            DeepSeek Studio - Advanced Self-Training AI Platform
          </p>
          <p className="text-sm">
            Powered by DeepSeek Neural Architecture • Real-Time Model Evolution • Continuous Learning
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
