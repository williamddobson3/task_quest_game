import React, { useEffect, useRef, useState } from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { StatManager } from '../utils/statSystem';
import { CardStatManager } from '../utils/cardStatSystem';

// Register Chart.js components
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export default function PentagonChart({ refreshTrigger }) {
  const chartRef = useRef(null);
  const [baseStats, setBaseStats] = useState({});
  const [totalStats, setTotalStats] = useState({});

  useEffect(() => {
    // Update stats when refreshTrigger changes
    const baseStats = StatManager.getStats();
    const equippedCards = CardStatManager.getEquippedCards();
    const totalStats = CardStatManager.getTotalStats(baseStats, equippedCards);
    
    setBaseStats(baseStats);
    setTotalStats(totalStats);

    // Force chart update when stats change
    if (chartRef.current) {
      chartRef.current.update();
    }
  }, [refreshTrigger]);

  // Prepare data for pentagon chart with stat values
  const statValues = [
    Math.round(totalStats.strength || 0),
    Math.round(totalStats.knowledge || 0),
    Math.round(totalStats.stamina || 0),
    Math.round(totalStats.actionPower || 0),
    Math.round(totalStats.persistence || 0)
  ];

  const data = {
    labels: [
      `チカ\n${statValues[0]}`,
      `チシ\n${statValues[1]}`, 
      `タイ\n${statValues[2]}`,
      `コウ\n${statValues[3]}`,
      `ケイ\n${statValues[4]}`
    ],
    datasets: [
      {
        label: 'Total Stats',
        data: [
          totalStats.strength || 0,
          totalStats.knowledge || 0,
          totalStats.stamina || 0,
          totalStats.actionPower || 0,
          totalStats.persistence || 0
        ],
        backgroundColor: 'rgba(59, 130, 246, 0.4)', // Blue fill
        borderColor: 'rgba(59, 130, 246, 1)', // Blue border
        borderWidth: 3,
        pointBackgroundColor: 'rgba(59, 130, 246, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(59, 130, 246, 1)',
        pointRadius: 8,
        pointHoverRadius: 12
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false // Hide legend for cleaner look
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 1,
        callbacks: {
          label: function(context) {
            const statNames = {
              'チカ': 'Strength',
              'チシ': 'Knowledge',
              'タイ': 'Stamina', 
              'コウ': 'Action Power',
              'ケイ': 'Persistence'
            };
            // Extract the stat name from the label (before the newline)
            const statName = context.label.split('\n')[0];
            return `${statNames[statName]}: ${context.parsed.r.toFixed(1)}`;
          }
        }
      }
    },
    scales: {
      r: {
        beginAtZero: true,
        min: 0,
        max: 120, // Maximum stat value
        ticks: {
          display: false // Hide tick labels for cleaner look
        },
        grid: {
          color: 'rgba(59, 130, 246, 0.2)', // Blue grid lines
          lineWidth: 1
        },
        angleLines: {
          color: 'rgba(59, 130, 246, 0.3)', // Blue angle lines
          lineWidth: 1
        },
        pointLabels: {
          color: 'rgba(59, 130, 246, 1)', // Blue point labels
          font: {
            size: 28,
            weight: 'bold'
          }
        }
      }
    },
    elements: {
      line: {
        tension: 0.1 // Smooth curves
      }
    }
  };

  return (
    <div className="w-full h-full bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-lg p-2 shadow-lg">
      <div className="w-full h-full min-h-[200px]">
        <Radar ref={chartRef} data={data} options={options} />
      </div>
    </div>
  );
}