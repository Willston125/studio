"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ClapperBoardProps {
    className?: string;
    scene?: string;
    take?: number;
    production?: string;
    animate?: boolean;
}

/**
 * ClapperBoard - Animated cinema clapper with optional text
 */
export function ClapperBoard({
    className,
    scene = "01",
    take = 1,
    production = "CINEWORLD",
    animate = true
}: ClapperBoardProps) {
    return (
        <div className={cn("clapperboard inline-block", className)}>
            <svg
                width="120"
                height="100"
                viewBox="0 0 120 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Base Board */}
                <rect
                    x="5"
                    y="30"
                    width="110"
                    height="65"
                    rx="4"
                    fill="#1a1a1a"
                    stroke="#D4AF37"
                    strokeWidth="2"
                />

                {/* Clapper Top (Animated) */}
                <motion.g
                    className="clapperboard-top"
                    style={{ transformOrigin: "5px 30px" }}
                    animate={animate ? {
                        rotate: [0, -25, 0],
                    } : {}}
                    transition={{
                        duration: 0.3,
                        repeat: Infinity,
                        repeatDelay: 4,
                        ease: "easeInOut"
                    }}
                >
                    {/* Stripes */}
                    <rect x="5" y="5" width="110" height="25" rx="4" fill="#1a1a1a" />
                    <rect x="5" y="5" width="22" height="25" fill="#D4AF37" rx="4" />
                    <rect x="49" y="5" width="22" height="25" fill="#D4AF37" />
                    <rect x="93" y="5" width="22" height="25" fill="#D4AF37" rx="4" />
                </motion.g>

                {/* Text on Board */}
                <text x="15" y="50" fill="#D4AF37" fontSize="8" fontFamily="monospace">
                    PROD: {production}
                </text>
                <text x="15" y="65" fill="#ffffff" fontSize="10" fontFamily="monospace">
                    SCENE: {scene}
                </text>
                <text x="70" y="65" fill="#ffffff" fontSize="10" fontFamily="monospace">
                    TAKE: {take}
                </text>
                <text x="15" y="85" fill="#888888" fontSize="7" fontFamily="monospace">
                    DJIBOUTI
                </text>
            </svg>
        </div>
    );
}

/**
 * Simple Clapper Icon (no animation)
 */
export function ClapperIcon({
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
            <path d="M4 11v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8H4Z" />
            <path d="m4 11-.88-2.87a2 2 0 0 1 1.33-2.5l11.48-3.5a2 2 0 0 1 2.5 1.32l.87 2.87L4 11.12" />
            <path d="m6.6 4.99 3.38 4.2" />
            <path d="m11.86 3.38 3.38 4.2" />
        </svg>
    );
}
