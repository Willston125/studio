"use client";

import { useEffect, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface TimecodeProps {
    className?: string;
    startTime?: number;
    fps?: number;
    running?: boolean;
}

/**
 * SMPTE Timecode display component with animation
 * Format: HH:MM:SS:FF (hours:minutes:seconds:frames)
 */
export function Timecode({
    className,
    startTime = 0,
    fps = 24,
    running = true
}: TimecodeProps) {
    const [frames, setFrames] = useState(startTime);

    useEffect(() => {
        if (!running) return;

        const interval = setInterval(() => {
            setFrames(f => f + 1);
        }, 1000 / fps);

        return () => clearInterval(interval);
    }, [fps, running]);

    const formatTimecode = useCallback((totalFrames: number) => {
        const totalSeconds = Math.floor(totalFrames / fps);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        const frameCount = totalFrames % fps;

        const pad = (n: number) => n.toString().padStart(2, '0');
        return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(frameCount)}`;
    }, [fps]);

    return (
        <span className={cn("timecode", className)}>
            {formatTimecode(frames)}
        </span>
    );
}

/**
 * Static timecode display (no animation)
 */
export function TimecodeStatic({
    time = "00:00:00:00",
    className
}: {
    time?: string;
    className?: string;
}) {
    return (
        <span className={cn("timecode", className)}>
            {time}
        </span>
    );
}
