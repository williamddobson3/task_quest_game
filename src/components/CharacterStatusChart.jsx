import React, { useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { StatManager } from '../utils/statSystem';
import { CardStatManager } from '../utils/cardStatSystem';

// Register Chart.js components
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function CharacterStatusChart({ refreshTrigger }) {
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

  // Prepare data for radar chart
  const data = {
    labels: [
      '力 (Strength)',
      '知恵 (Wisdom)', 
      '体力 (Vitality)',
      '敏捷性 (Agility)',
      '持続力 (Persistence)'
    ],
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
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(54, 162, 235, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(54, 162, 235, 1)'
      },
      {
        label: 'Total Stats (with cards)',
        data: [
          totalStats.strength || 0,
          totalStats.knowledge || 0,
          totalStats.stamina || 0,
          totalStats.actionPower || 0,
          totalStats.persistence || 0
        ],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255, 99, 132, 1)'
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
            const value = context.parsed.r;
            return `${label}: ${value.toFixed(1)}`;
          }
        }
      }
    },
    scales: {
      r: {
        beginAtZero: true,
        max: 120, // Maximum stat value
        min: 0,
        ticks: {
          stepSize: 30,
          color: '#666',
          font: {
            size: 8
          }
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)'
        },
        angleLines: {
          color: 'rgba(0, 0, 0, 0.1)'
        },
        pointLabels: {
          color: '#333',
          font: {
            size: 9
          }
        }
      }
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 3,
        hoverRadius: 5
      }
    }
  };

  return (
    <div className="w-full h-full min-h-[300px]">
      <Radar 
        ref={chartRef}
        data={data} 
        options={options}
      />
    </div>
  );
}
