
import React from 'react';
import { Brain, Activity, Zap, TrendingUp } from 'lucide-react';

interface ModelCardProps {
  name: string;
  type: string;
  status: 'training' | 'ready' | 'inference';
  accuracy: number;
  tokens: string;
  lastUpdated: string;
}

const ModelCard: React.FC<ModelCardProps> = ({ name, type, status, accuracy, tokens, lastUpdated }) => {
  const getStatusColor = () => {
    switch (status) {
      case 'training': return 'from-yellow-500 to-orange-500';
      case 'ready': return 'from-green-500 to-emerald-500';
      case 'inference': return 'from-purple-500 to-pink-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case 'training': return <Activity className="h-4 w-4 animate-pulse" />;
      case 'ready': return <Zap className="h-4 w-4" />;
      case 'inference': return <Brain className="h-4 w-4" />;
      default: return <Brain className="h-4 w-4" />;
    }
  };

  return (
    <div className="bg-gray-900/50 backdrop-blur-lg border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all hover:transform hover:scale-105">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-white mb-1">{name}</h3>
          <p className="text-gray-400 text-sm">{type}</p>
        </div>
        <div className={`flex items-center space-x-2 bg-gradient-to-r ${getStatusColor()} px-3 py-1 rounded-full text-white text-xs font-medium`}>
          {getStatusIcon()}
          <span className="capitalize">{status}</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-black/30 rounded-lg p-3">
          <div className="flex items-center space-x-2 mb-1">
            <TrendingUp className="h-4 w-4 text-green-400" />
            <span className="text-gray-400 text-xs">Accuracy</span>
          </div>
          <p className="text-white font-semibold">{accuracy}%</p>
        </div>
        <div className="bg-black/30 rounded-lg p-3">
          <div className="flex items-center space-x-2 mb-1">
            <Brain className="h-4 w-4 text-purple-400" />
            <span className="text-gray-400 text-xs">Tokens</span>
          </div>
          <p className="text-white font-semibold">{tokens}</p>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <p className="text-gray-500 text-xs">Updated {lastUpdated}</p>
        <button className="bg-purple-600/20 hover:bg-purple-600/30 text-purple-400 px-3 py-1 rounded-lg text-sm transition-colors">
          Configure
        </button>
      </div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-600/5 rounded-xl blur-xl -z-10"></div>
    </div>
  );
};

export default ModelCard;
