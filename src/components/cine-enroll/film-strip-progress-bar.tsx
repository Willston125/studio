"use client";

interface FilmStripProgressBarProps {
  progress: number;
}

export default function FilmStripProgressBar({ progress }: FilmStripProgressBarProps) {
  return (
    <div className="film-strip-container w-full max-w-sm mx-auto mb-4">
      <div className="film-strip">
        <div className="film-strip-sprockets" />
        <div className="film-strip-track">
          <div
            className="film-strip-progress"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="film-strip-sprockets" />
      </div>
      <div className="text-center text-xs font-mono text-muted-foreground mt-1.5">
        Progression: {Math.round(progress)}%
      </div>
    </div>
  );
}
