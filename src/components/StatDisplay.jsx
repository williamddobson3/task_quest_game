import React, { useState, useEffect } from 'react';
import { StatManager, STATS } from '../utils/statSystem';
import { CardStatManager } from '../utils/cardStatSystem';

export default function StatDisplay({ className = '', refreshTrigger = 0 }) {
    const [baseStats, setBaseStats] = useState({});
    const [totalStats, setTotalStats] = useState({});
    const [cardBonuses, setCardBonuses] = useState({});
    const [isAwakened, setIsAwakened] = useState(false);

    const refreshStats = () => {
        const currentBaseStats = StatManager.getStats();
        const equippedCards = CardStatManager.getEquippedCards();
        const bonuses = CardStatManager.calculateCardBonuses(equippedCards);
        const total = CardStatManager.getTotalStats(currentBaseStats, equippedCards);
        const awakened = StatManager.isAwakened();
        
        setBaseStats(currentBaseStats);
        setTotalStats(total);
        setCardBonuses(bonuses);
        setIsAwakened(awakened);
    };

    useEffect(() => {
        refreshStats();
    }, [refreshTrigger]);

    // Create radar chart data for the 5 stats
    const createRadarData = () => {
        const maxValue = isAwakened ? 120 : 100;
        const statOrder = [
            STATS.STRENGTH,
            STATS.KNOWLEDGE, 
            STATS.STAMINA,
            STATS.ACTION_POWER,
            STATS.PERSISTENCE
        ];

        return statOrder.map(stat => ({
            name: StatManager.getStatDisplayName(stat),
            fullName: StatManager.getStatFullName(stat),
            baseValue: baseStats[stat] || 0,
            bonusValue: cardBonuses[stat] || 0,
            totalValue: totalStats[stat] || 0,
            percentage: ((totalStats[stat] || 0) / maxValue) * 100
        }));
    };

    const radarData = createRadarData();

    return (
        <div className={`stat-display ${className}`}>
            {/* Stat Values Display */}
            <div className="grid grid-cols-5 gap-2 mb-4">
                {radarData.map((stat, index) => (
                    <div key={index} className="text-center">
                        <div className="text-xs font-bold text-gray-700">
                            {stat.name}
                        </div>
                        <div className="text-lg font-bold text-blue-600">
                            {Math.floor(stat.totalValue)}
                        </div>
                        {stat.bonusValue > 0 && (
                            <div className="text-xs text-green-600">
                                +{Math.floor(stat.bonusValue)}
                            </div>
                        )}
                        <div className="text-xs text-gray-500">
                            /{isAwakened ? '120' : '100'}
                        </div>
                    </div>
                ))}
            </div>

            {/* Simple Progress Bars */}
            <div className="space-y-2">
                {radarData.map((stat, index) => (
                    <div key={index} className="flex items-center space-x-2">
                        <div className="w-8 text-xs font-bold text-gray-700">
                            {stat.name}
                        </div>
                        <div className="flex-1 bg-gray-200 rounded-full h-3">
                            <div 
                                className={`h-3 rounded-full transition-all duration-500 ${
                                    isAwakened ? 'bg-gradient-to-r from-purple-400 to-purple-600' : 'bg-gradient-to-r from-blue-400 to-blue-600'
                                }`}
                                style={{ width: `${Math.min(100, stat.percentage)}%` }}
                            />
                        </div>
                        <div className="w-12 text-xs text-gray-600 text-right">
                            {Math.floor(stat.totalValue)}
                        </div>
                    </div>
                ))}
            </div>

            {/* Awakening Status */}
            {isAwakened && (
                <div className="mt-4 p-2 bg-gradient-to-r from-purple-100 to-purple-200 rounded-lg border border-purple-300">
                    <div className="text-center">
                        <div className="text-sm font-bold text-purple-700">
                            ✨ 覚醒状態 ✨
                        </div>
                        <div className="text-xs text-purple-600">
                            最大ステータス: 120
                        </div>
                    </div>
                </div>
            )}

            {/* Stat Descriptions */}
            <div className="mt-4 text-xs text-gray-600 space-y-1">
                <div><strong>チカ:</strong> 物理攻撃力</div>
                <div><strong>チシ:</strong> 魔法攻撃力</div>
                <div><strong>タイ:</strong> HP (体力)</div>
                <div><strong>コウ:</strong> 行動順・勝敗判定</div>
                <div><strong>ケイ:</strong> ダメージ安定性</div>
            </div>
        </div>
    );
}
