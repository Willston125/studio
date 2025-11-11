"use client";

import { useState, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const deadline = new Date('2024-11-20T00:00:00Z');

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

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setTimeLeft(calculateTimeLeft());
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isMounted) {
    return (
        <div className="flex justify-center gap-4">
            <Skeleton className="h-20 w-20 rounded-md" />
            <Skeleton className="h-20 w-20 rounded-md" />
            <Skeleton className="h-20 w-20 rounded-md" />
            <Skeleton className="h-20 w-20 rounded-md" />
        </div>
    );
  }

  const timerComponents = Object.entries(timeLeft).map(([interval, value]) => {
    const labels: { [key: string]: string } = {
        days: 'Jours',
        hours: 'Heures',
        minutes: 'Minutes',
        seconds: 'Secondes',
    }
    return (
      <div key={interval} className="flex flex-col items-center justify-center bg-background/50 p-4 rounded-lg w-24 h-24 border border-border">
        <span className="text-4xl font-bold font-mono text-primary">{String(value).padStart(2, '0')}</span>
        <span className="text-xs uppercase tracking-widest text-muted-foreground">{labels[interval]}</span>
      </div>
    );
  });

  return (
    <div className="flex justify-center gap-2 md:gap-4">
      {timerComponents.length ? timerComponents : <span>Le temps est écoulé !</span>}
    </div>
  );
}
