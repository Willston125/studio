import { cn } from "@/lib/utils";

interface DividerProps {
    variant?: "default" | "gold";
    width?: "full" | "centered";
    className?: string;
}

export function Divider({
    variant = "default",
    width = "centered",
    className
}: DividerProps) {
    return (
        <div
            className={cn(
                "h-px my-8 md:my-12",
                width === "centered" ? "w-4/5 mx-auto" : "w-full",
                className
            )}
            style={{
                background: variant === "gold"
                    ? "linear-gradient(90deg, transparent, rgba(212,175,55,0.5), transparent)"
                    : "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)"
            }}
        />
    );
}
