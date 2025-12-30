"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ViewfinderFrameProps {
    children: ReactNode;
    className?: string;
    showCenter?: boolean;
    cornerSize?: "sm" | "md" | "lg";
}

/**
 * Viewfinder Frame component - adds camera viewfinder corner markers
 * Creates an authentic cinema camera framing effect
 */
export function ViewfinderFrame({
    children,
    className,
    showCenter = false,
    cornerSize = "md"
}: ViewfinderFrameProps) {
    const sizeClasses = {
        sm: "w-6 h-6",
        md: "w-10 h-10",
        lg: "w-14 h-14"
    };

    return (
        <div className={cn("viewfinder relative", className)}>
            {/* Corner Markers */}
            <div className={cn("viewfinder-corner top-left", sizeClasses[cornerSize])} />
            <div className={cn("viewfinder-corner top-right", sizeClasses[cornerSize])} />
            <div className={cn("viewfinder-corner bottom-left", sizeClasses[cornerSize])} />
            <div className={cn("viewfinder-corner bottom-right", sizeClasses[cornerSize])} />

            {/* Optional Center Cross */}
            {showCenter && <div className="viewfinder-center" />}

            {children}
        </div>
    );
}

/**
 * Aspect Ratio Guide overlay
 */
export function AspectRatioGuide({
    ratio = "16:9",
    className
}: {
    ratio?: string;
    className?: string;
}) {
    return (
        <div
            className={cn("aspect-ratio-guide", className)}
            style={{ '--aspect-label': `"${ratio}"` } as React.CSSProperties}
        />
    );
}
