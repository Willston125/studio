"use client";

interface ShimmerProgressBarProps {
  progress: number;
}

export default function ShimmerProgressBar({ progress }: ShimmerProgressBarProps) {
  return (
    <div className="progress-bar">
      <div
        className="progress-fill"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

    