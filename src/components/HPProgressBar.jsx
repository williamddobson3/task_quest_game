import React from 'react';
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function HPProgressBar({ 
  currentHP, 
  maxHP, 
  label, 
  isEnemy = false,
  width = 200,
  height = 100 
}) {
  const hpPercentage = maxHP > 0 ? (currentHP / maxHP) * 100 : 0;
  
  // Determine color based on HP percentage
  let barColor;
  if (hpPercentage <= 0) {
    barColor = 'rgba(128, 128, 128, 0.8)'; // Gray for defeated
  } else if (hpPercentage <= 25) {
    barColor = 'rgba(220, 38, 38, 0.8)'; // Red for critical
  } else if (hpPercentage <= 50) {
    barColor = 'rgba(245, 158, 11, 0.8)'; // Orange for low
  } else if (hpPercentage <= 75) {
    barColor = 'rgba(34, 197, 94, 0.8)'; // Green for good
  } else {
    barColor = 'rgba(34, 197, 94, 1)'; // Bright green for full
  }

  const data = {
    labels: [label],
    datasets: [
      {
        label: 'HP',
        data: [hpPercentage],
        backgroundColor: barColor,
        borderColor: isEnemy ? 'rgba(220, 38, 38, 1)' : 'rgba(34, 197, 94, 1)',
        borderWidth: 2,
        borderRadius: 8,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    indexAxis: 'x',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: `${label}: ${currentHP}/${maxHP}`,
        color: 'white',
        font: {
          size: 14,
          weight: 'bold'
        }
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${label}: ${currentHP}/${maxHP} (${hpPercentage.toFixed(1)}%)`;
          }
        }
      }
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        min: 0,
        max: 100,
        display: false,
      },
    },
    animation: {
      duration: 500,
      easing: 'easeInOutQuart'
    }
  };

  return (
    <div 
      className="bg-black bg-opacity-70 rounded-lg p-2"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <Bar data={data} options={options} />
    </div>
  );
}
