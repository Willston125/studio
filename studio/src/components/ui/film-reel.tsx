"use client";

import { cn } from "@/lib/utils";

interface FilmReelProps {
    className?: string;
    size?: number;
    animate?: boolean;
}

/**
 * Film Reel - Animated spinning film reel icon
 */
export function FilmReel({
    className,
    size = 48,
    animate = true
}: FilmReelProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn(animate && "film-reel-icon", className)}
        >
            {/* Outer Ring */}
            <circle
                cx="24"
                cy="24"
                r="22"
                stroke="#D4AF37"
                strokeWidth="2"
                fill="none"
            />

            {/* Inner Ring */}
            <circle
                cx="24"
                cy="24"
                r="16"
                stroke="#D4AF37"
                strokeWidth="1.5"
                fill="none"
            />

            {/* Center Hole */}
            <circle
                cx="24"
                cy="24"
                r="4"
                fill="#D4AF37"
            />

            {/* Sprocket Holes */}
            <circle cx="24" cy="8" r="3" fill="#2a2a2a" stroke="#D4AF37" strokeWidth="1" />
            <circle cx="24" cy="40" r="3" fill="#2a2a2a" stroke="#D4AF37" strokeWidth="1" />
            <circle cx="8" cy="24" r="3" fill="#2a2a2a" stroke="#D4AF37" strokeWidth="1" />
            <circle cx="40" cy="24" r="3" fill="#2a2a2a" stroke="#D4AF37" strokeWidth="1" />

            {/* Diagonal Holes */}
            <circle cx="12.7" cy="12.7" r="2.5" fill="#2a2a2a" stroke="#D4AF37" strokeWidth="0.8" />
            <circle cx="35.3" cy="12.7" r="2.5" fill="#2a2a2a" stroke="#D4AF37" strokeWidth="0.8" />
            <circle cx="12.7" cy="35.3" r="2.5" fill="#2a2a2a" stroke="#D4AF37" strokeWidth="0.8" />
            <circle cx="35.3" cy="35.3" r="2.5" fill="#2a2a2a" stroke="#D4AF37" strokeWidth="0.8" />
        </svg>
    );
}

/**
 * Cinema Camera Icon
 */
export function CineCameraIcon({
    className,
    size = 32
}: {
    className?: string;
    size?: number;
}) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 32 32"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={cn("text-[#D4AF37]", className)}
        >
            {/* Camera Body */}
            <rect x="2" y="8" width="20" height="16" rx="2" />

            {/* Lens */}
            <circle cx="12" cy="16" r="5" />
            <circle cx="12" cy="16" r="2" fill="currentColor" />

            {/* Viewfinder */}
            <path d="M22 12 L28 8 L28 24 L22 20" />

            {/* Reel */}
            <circle cx="6" cy="4" r="3" />
            <circle cx="18" cy="4" r="3" />
        </svg>
    );
}

/**
 * Movie Ticket Icon
 */
export function MovieTicketIcon({
    className,
    size = 24
}: {
    className?: string;
    size?: number;
}) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={cn("text-[#D4AF37]", className)}
        >
            <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
            <path d="M13 5v2" />
            <path d="M13 17v2" />
            <path d="M13 11v2" />
        </svg>
    );
}
