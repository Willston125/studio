"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Vignette Effect wrapper - adds darkening around edges
 */
export function Vignette({
    children,
    className,
    intensity = "normal"
}: {
    children: ReactNode;
    className?: string;
    intensity?: "light" | "normal";
}) {
    return (
        <div className={cn(
            "vignette",
            intensity === "light" && "vignette-light",
            className
        )}>
            {children}
        </div>
    );
}

/**
 * CinemaScope wrapper - adds letterbox bars for 2.35:1 ratio
 */
export function CinemaScope({
    children,
    className
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <div className={cn("cinemascope", className)}>
            {children}
        </div>
    );
}

/**
 * Film Grain Overlay - adds subtle animated grain to the entire page
 */
export function FilmGrainOverlay({ className }: { className?: string }) {
    return <div className={cn("film-grain-enhanced", className)} />;
}

/**
 * Projector Beam effect
 */
export function ProjectorBeam({ className }: { className?: string }) {
    return <div className={cn("projector-beam", className)} />;
}

/**
 * Camera Flash effect wrapper
 */
export function CameraFlash({
    children,
    className
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <div className={cn("camera-flash", className)}>
            {children}
        </div>
    );
}

/**
 * Cinema Subtitle text style
 */
export function CinemaSubtitle({
    children,
    className
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <span className={cn("cinema-subtitle", className)}>
            {children}
        </span>
    );
}

/**
 * Loading Reel animation
 */
export function LoadingReel({ className }: { className?: string }) {
    return <div className={cn("loading-reel", className)} />;
}
