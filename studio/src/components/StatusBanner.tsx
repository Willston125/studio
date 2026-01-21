'use client';

import { X } from 'lucide-react';
import { useState } from 'react';

interface StatusBannerProps {
    message: string;
    type?: 'info' | 'warning' | 'error';
    dismissible?: boolean;
}

export default function StatusBanner({ message, type = 'info', dismissible = true }: StatusBannerProps) {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    const colors = {
        info: 'bg-blue-50 border-blue-200 text-blue-900',
        warning: 'bg-yellow-50 border-yellow-200 text-yellow-900',
        error: 'bg-red-50 border-red-200 text-red-900',
    };

    return (
        <div className={`${colors[type]} border-b-2 px-6 py-3`} role="alert">
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
                <p className="text-sm md:text-base font-medium flex-1">
                    {message}
                </p>
                {dismissible && (
                    <button
                        onClick={() => setIsVisible(false)}
                        className="p-1 hover:bg-black/5 rounded-lg transition-colors"
                        aria-label="Fermer le banner"
                    >
                        <X size={18} />
                    </button>
                )}
            </div>
        </div>
    );
}
