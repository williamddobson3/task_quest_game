import React, { useState, useEffect } from 'react';

export default function BattleNotification({ 
    title, 
    message, 
    type = 'info', 
    duration = 3000, 
    onClose 
}) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        if (duration > 0) {
            const timer = setTimeout(() => {
                setIsVisible(false);
                if (onClose) onClose();
            }, duration);

            return () => clearTimeout(timer);
        }
    }, [duration, onClose]);

    const getTypeStyles = () => {
        switch (type) {
            case 'success':
                return 'bg-green-500 border-green-600 text-white';
            case 'error':
                return 'bg-red-500 border-red-600 text-white';
            case 'warning':
                return 'bg-yellow-500 border-yellow-600 text-black';
            case 'victory':
                return 'bg-gradient-to-r from-yellow-400 to-orange-500 border-yellow-600 text-white';
            case 'defeat':
                return 'bg-gradient-to-r from-gray-600 to-gray-800 border-gray-700 text-white';
            default:
                return 'bg-blue-500 border-blue-600 text-white';
        }
    };

    if (!isVisible) return null;

    return (
        <div className={`fixed top-4 right-4 z-[1000002] p-4 rounded-lg border-2 shadow-lg transform transition-all duration-300 ${getTypeStyles()}`}>
            <div className="flex items-center space-x-3">
                <div className="flex-1">
                    {title && (
                        <div className="font-bold text-lg mb-1">
                            {title}
                        </div>
                    )}
                    <div className="text-sm">
                        {message}
                    </div>
                </div>
                <button
                    onClick={() => {
                        setIsVisible(false);
                        if (onClose) onClose();
                    }}
                    className="text-white hover:text-gray-200 text-xl font-bold"
                >
                    ×
                </button>
            </div>
        </div>
    );
}
