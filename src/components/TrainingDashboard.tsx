
import React, { useState, useEffect } from 'react';
import { Activity, TrendingUp, Zap, Clock, Database, Cpu } from 'lucide-react';

const TrainingDashboard = () => {
  const [trainingMetrics, setTrainingMetrics] = useState({
    loss: 0.245,
    accuracy: 87.3,
    epochsCompleted: 15,
    totalEpochs: 100,
    learningRate: 0.0001,
    batchSize: 32
  });

  useEffect(() => {
    // Simulate real-time training updates
    const interval = setInterval(() => {
      setTrainingMetrics(prev => ({
        ...prev,
        loss: Math.max(0.1, prev.loss - Math.random() * 0.001),
        accuracy: Math.min(99.9, prev.accuracy + Math.random() * 0.1),
        epochsCompleted: Math.min(prev.totalEpochs, prev.epochsCompleted + Math.random() * 0.1)
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-900/30 backdrop-blur-lg border border-purple-500/20 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Training Dashboard</h2>
        <div className="flex items-center space-x-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full">
          <Activity className="h-4 w-4 animate-pulse" />
          <span className="text-sm font-medium">Training Active</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-black/40 rounded-lg p-4 border border-purple-500/10">
          <div className="flex items-center space-x-3 mb-3">
            <TrendingUp className="h-5 w-5 text-red-400" />
            <span className="text-gray-400">Loss</span>
          </div>
          <p className="text-3xl font-bold text-white">{trainingMetrics.loss.toFixed(3)}</p>
          <p className="text-green-400 text-sm">↓ 12.5% from last epoch</p>
        </div>

        <div className="bg-black/40 rounded-lg p-4 border border-purple-500/10">
          <div className="flex items-center space-x-3 mb-3">
            <Zap className="h-5 w-5 text-green-400" />
            <span className="text-gray-400">Accuracy</span>
          </div>
          <p className="text-3xl font-bold text-white">{trainingMetrics.accuracy.toFixed(1)}%</p>
          <p className="text-green-400 text-sm">↑ 3.2% from last epoch</p>
        </div>

        <div className="bg-black/40 rounded-lg p-4 border border-purple-500/10">
          <div className="flex items-center space-x-3 mb-3">
            <Clock className="h-5 w-5 text-blue-400" />
            <span className="text-gray-400">Progress</span>
          </div>
          <p className="text-3xl font-bold text-white">{Math.round(trainingMetrics.epochsCompleted)}/{trainingMetrics.totalEpochs}</p>
          <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
            <div 
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
              style={{ width: `${(trainingMetrics.epochsCompleted / trainingMetrics.totalEpochs) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-black/40 rounded-lg p-4 border border-purple-500/10">
          <h3 className="text-lg font-semibold text-white mb-4">Training Configuration</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-400">Learning Rate</span>
              <span className="text-white font-mono">{trainingMetrics.learningRate}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Batch Size</span>
              <span className="text-white font-mono">{trainingMetrics.batchSize}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Optimizer</span>
              <span className="text-white font-mono">AdamW</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Architecture</span>
              <span className="text-white font-mono">DeepSeek-7B</span>
            </div>
          </div>
        </div>

        <div className="bg-black/40 rounded-lg p-4 border border-purple-500/10">
          <h3 className="text-lg font-semibold text-white mb-4">System Resources</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-400">GPU Memory</span>
                <span className="text-white">14.2GB / 24GB</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '59%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-400">CPU Usage</span>
                <span className="text-white">23%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '23%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-400">RAM Usage</span>
                <span className="text-white">45.8GB / 128GB</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '36%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingDashboard;
