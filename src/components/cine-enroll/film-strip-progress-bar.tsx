"use client";

import { cn } from "@/lib/utils";

interface FilmStripProgressBarProps {
  progress: number;
}

export default function FilmStripProgressBar({ progress }: FilmStripProgressBarProps) {
  const segmentCount = 10;
  const segments = Array.from({ length: segmentCount });

  return (
    <div className="film-strip-container w-full max-w-md mx-auto">
      <div className="film-strip">
        <div className="film-strip-sprockets top" />
        <div className="film-strip-track">
          <div
            className="film-strip-progress"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="film-strip-sprockets bottom" />
      </div>
      <div className="text-center text-sm font-mono text-muted-foreground mt-2">
        Progression: {Math.round(progress)}%
      </div>
    </div>
  );
}

    