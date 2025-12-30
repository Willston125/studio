"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FilmStripProps {
    children: ReactNode;
    className?: string;
    variant?: "vertical" | "horizontal";
}

/**
 * Film Strip component that adds 35mm film perforations around content
 */
export function FilmStrip({
    children,
    className,
    variant = "vertical"
}: FilmStripProps) {
    return (
        <div
            className={cn(
                variant === "vertical" ? "film-strip" : "film-strip-horizontal",
                className
            )}
        >
            {children}
        </div>
    );
}

/**
 * Film Perforations wrapper with realistic hole patterns
 */
export function FilmPerforations({
    children,
    className
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <div className={cn("film-perforations", className)}>
            {children}
        </div>
    );
}
