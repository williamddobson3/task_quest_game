import React from 'react';
import { StatManager } from '../utils/statSystem';
import { CardStatManager } from '../utils/cardStatSystem';

export default function CharacterStatsDisplay({ refreshTrigger }) {
  // Get character stats
  const baseStats = StatManager.getStats();
  const equippedCards = CardStatManager.getEquippedCards();
  const cardBonuses = CardStatManager.calculateCardBonuses(equippedCards);
  const totalStats = CardStatManager.getTotalStats(baseStats, equippedCards);

  const stats = [
    { key: 'strength', label: '力 (Strength)', base: baseStats.strength || 0, bonus: cardBonuses.strength || 0, total: totalStats.strength || 0 },
    { key: 'knowledge', label: '知恵 (Wisdom)', base: baseStats.knowledge || 0, bonus: cardBonuses.knowledge || 0, total: totalStats.knowledge || 0 },
    { key: 'stamina', label: '体力 (Vitality)', base: baseStats.stamina || 0, bonus: cardBonuses.stamina || 0, total: totalStats.stamina || 0 },
    { key: 'actionPower', label: '敏捷性 (Agility)', base: baseStats.actionPower || 0, bonus: cardBonuses.actionPower || 0, total: totalStats.actionPower || 0 },
    { key: 'persistence', label: '持続力 (Persistence)', base: baseStats.persistence || 0, bonus: cardBonuses.persistence || 0, total: totalStats.persistence || 0 }
  ];

  return (
    <div className="w-full h-full bg-white bg-opacity-90 rounded-lg p-3 shadow-lg overflow-y-auto">
      <h3 className="text-lg font-bold text-center mb-3 text-gray-800">Character Status</h3>
      <div className="space-y-2">
        {stats.map((stat) => (
          <div key={stat.key} className="flex flex-col">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">{stat.label}</span>
              <span className="text-sm font-bold text-blue-600">{stat.total.toFixed(1)}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                style={{ width: `${Math.min((stat.total / 120) * 100, 100)}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>Base: {stat.base.toFixed(1)}</span>
              <span>Bonus: +{stat.bonus.toFixed(1)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
