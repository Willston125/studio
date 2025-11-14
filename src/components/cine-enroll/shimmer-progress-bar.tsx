"use client";

interface ShimmerProgressBarProps {
  progress: number;
}

export default function ShimmerProgressBar({ progress }: ShimmerProgressBarProps) {
  return (
    <div className="progress-bar mx-8 md:mx-12">
      <div
        className="progress-fill"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
