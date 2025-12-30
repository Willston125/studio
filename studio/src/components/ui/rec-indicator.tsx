"use client";

import { cn } from "@/lib/utils";

interface RecIndicatorProps {
    className?: string;
    label?: string;
}

/**
 * REC Indicator - pulsing recording indicator like on cameras
 */
export function RecIndicator({
    className,
    label = "REC"
}: RecIndicatorProps) {
    return (
        <div className={cn("rec-indicator", className)}>
            <div className="rec-dot" />
            <span>{label}</span>
        </div>
    );
}

/**
 * Standalone pulsing red dot
 */
export function RecDot({ className }: { className?: string }) {
    return <div className={cn("rec-dot", className)} />;
}
