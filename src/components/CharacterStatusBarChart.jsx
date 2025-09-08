import React, { useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { StatManager } from '../utils/statSystem';
import { CardStatManager } from '../utils/cardStatSystem';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function CharacterStatusBarChart({ refreshTrigger }) {
  const chartRef = useRef(null);

  useEffect(() => {
    // This effect will run when refreshTrigger changes
    if (chartRef.current) {
      // Force chart update when stats change
      chartRef.current.update();
    }
  }, [refreshTrigger]);

  // Get character stats
  const baseStats = StatManager.getStats();
  const equippedCards = CardStatManager.getEquippedCards();
  const cardBonuses = CardStatManager.calculateCardBonuses(equippedCards);
  const totalStats = CardStatManager.getTotalStats(baseStats, equippedCards);

  // Prepare data for bar chart
  const data = {
    labels: ['力', '知恵', '体力', '敏捷', '持続'],
    datasets: [
      {
        label: 'Base Stats',
        data: [
          baseStats.strength || 0,
          baseStats.knowledge || 0,
          baseStats.stamina || 0,
          baseStats.actionPower || 0,
          baseStats.persistence || 0
        ],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      },
      {
        label: 'Card Bonuses',
        data: [
          cardBonuses.strength || 0,
          cardBonuses.knowledge || 0,
          cardBonuses.stamina || 0,
          cardBonuses.actionPower || 0,
          cardBonuses.persistence || 0
        ],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#333',
          font: {
            size: 10
          }
        }
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const label = context.dataset.label || '';
            const value = context.parsed.y;
            return `${label}: ${value.toFixed(1)}`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 120,
        ticks: {
          color: '#666',
          font: {
            size: 8
          }
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)'
        }
      },
      x: {
        ticks: {
          color: '#333',
          font: {
            size: 9
          }
        },
        grid: {
          display: false
        }
      }
    }
  };

  return (
    <div className="w-full h-full min-h-[200px]">
      <Bar 
        ref={chartRef}
        data={data} 
        options={options}
      />
    </div>
  );
}
