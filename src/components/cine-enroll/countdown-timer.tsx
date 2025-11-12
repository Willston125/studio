"use client";

import { useState, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const getDeadline = () => {
  const deadline = new Date();
  deadline.setDate(deadline.getDate() + 20);
  return deadline;
}

// We define the deadline outside the component to avoid it being recalculated on every render.
const deadline = getDeadline();

const calculateTimeLeft = () => {
  const difference = +deadline - +new Date();
  let timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const CircularUnit = ({ value, maxValue, label, size = 80, strokeWidth = 6 }: { value: number, maxValue: number, label: string, size?: number, strokeWidth?: number }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const progress = (value / maxValue) * circumference;

    const shouldPulse = label.toLowerCase() === 'secondes';

    return (
        <div className="flex flex-col items-center countdown-unit">
            <div className="relative" style={{ width: size, height: size }}>
                <svg className="w-full h-full" viewBox={`0 0 ${size} ${size}`}>
                    <circle
                        className="text-muted/20"
                        stroke="currentColor"
                        strokeWidth={strokeWidth}
                        fill="transparent"
                        r={radius}
                        cx={size / 2}
                        cy={size / 2}
                    />
                    <circle
                        className="text-primary countdown-progress"
                        stroke="currentColor"
                        strokeWidth={strokeWidth}
                        strokeLinecap="round"
                        fill="transparent"
                        r={radius}
                        cx={size / 2}
                        cy={size / 2}
                        style={{
                            strokeDasharray: circumference,
                            strokeDashoffset: circumference - progress,
                        }}
                    />
                </svg>
                <div className={`absolute inset-0 flex flex-col items-center justify-center ${shouldPulse ? 'pulse-second' : ''}`}>
                    <span className="text-2xl font-bold font-mono text-primary">{String(value).padStart(2, '0')}</span>
                </div>
            </div>
            <span className="text-xs uppercase tracking-widest text-muted-foreground mt-2">{label}</span>
        </div>
    );
};


export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // No need to set timeLeft here again, initialState does it.
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isMounted) {
    return (
        <div className="flex justify-center gap-4 md:gap-8">
            <Skeleton className="h-28 w-20 rounded-full" />
            <Skeleton className="h-28 w-20 rounded-full" />
            <Skeleton className="h-28 w-20 rounded-full" />
            <Skeleton className="h-28 w-20 rounded-full" />
        </div>
    );
  }

  const { days, hours, minutes, seconds } = timeLeft;
  
  if (!days && !hours && !minutes && !seconds) {
    return <span className="text-xl font-bold font-mono text-primary">Le temps est écoulé !</span>;
  }

  return (
    <div className="flex justify-center items-start gap-3 md:gap-6">
        <CircularUnit value={days} maxValue={30} label="Jours" />
        <CircularUnit value={hours} maxValue={24} label="Heures" />
        <CircularUnit value={minutes} maxValue={60} label="Minutes" />
        <CircularUnit value={seconds} maxValue={60} label="Secondes" />
    </div>
  );
}
