
import React, { useState, useEffect } from 'react';
import { Brain, Zap, Database, TrendingUp, Activity, Cpu } from 'lucide-react';
import { deepseekEngine } from '../utils/deepseekEngine';

const StatsOverview = () => {
  const [stats, setStats] = useState({
    totalModels: 4,
    activeTraining: 2,
    totalTokens: '2.3B',
    averageAccuracy: 90.1,
    systemLoad: 67,
    memoryUsage: 45.8
  });

  useEffect(() => {
    const updateStats = () => {
      const engineStats = deepseekEngine.getTrainingStats();
      setStats(prev => ({
        ...prev,
        totalModels: engineStats.modelsCount,
        averageAccuracy: engineStats.averageAccuracy,
        activeTraining: engineStats.isTraining ? prev.activeTraining + 1 : Math.max(0, prev.activeTraining - 1)
      }));
    };

    updateStats();
    const interval = setInterval(updateStats, 3000);
    return () => clearInterval(interval);
  }, []);

  const statCards = [
    {
      icon: Brain,
      label: 'Total Models',
      value: stats.totalModels.toString(),
      change: '+2 this week',
      color: 'from-purple-500 to-purple-600',
      iconColor: 'text-purple-400'
    },
    {
      icon: Activity,
      label: 'Active Training',
      value: stats.activeTraining.toString(),
      change: 'Real-time',
      color: 'from-green-500 to-green-600',
      iconColor: 'text-green-400'
    },
    {
      icon: Database,
      label: 'Total Tokens',
      value: stats.totalTokens,
      change: '+150M today',
      color: 'from-blue-500 to-blue-600',
      iconColor: 'text-blue-400'
    },
    {
      icon: TrendingUp,
      label: 'Avg Accuracy',
      value: `${stats.averageAccuracy.toFixed(1)}%`,
      change: '+2.3% this month',
      color: 'from-emerald-500 to-emerald-600',
      iconColor: 'text-emerald-400'
    },
    {
      icon: Cpu,
      label: 'System Load',
      value: `${stats.systemLoad}%`,
      change: 'Optimal',
      color: 'from-orange-500 to-orange-600',
      iconColor: 'text-orange-400'
    },
    {
      icon: Zap,
      label: 'Memory Usage',
      value: `${stats.memoryUsage}GB`,
      change: '128GB total',
      color: 'from-pink-500 to-pink-600',
      iconColor: 'text-pink-400'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {statCards.map((stat, index) => (
        <div
          key={stat.label}
          className="bg-gray-900/40 backdrop-blur-lg border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all hover:transform hover:scale-105 relative overflow-hidden"
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-lg bg-gradient-to-r ${stat.color} bg-opacity-20`}>
              <stat.icon className={`h-6 w-6 ${stat.iconColor}`} />
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className={`text-xs ${stat.iconColor} font-medium`}>{stat.change}</p>
            </div>
          </div>
          
          <h3 className="text-gray-300 text-sm font-medium">{stat.label}</h3>
          
          {/* Animated background glow */}
          <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-5 animate-pulse`}></div>
          
          {/* Subtle border glow */}
          <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-20 blur-xl -z-10`}></div>
        </div>
      ))}
    </div>
  );
};

export default StatsOverview;
