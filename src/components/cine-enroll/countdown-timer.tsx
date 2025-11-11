"use client";

import { useState, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const getDeadline = () => {
  const deadline = new Date();
  deadline.setDate(deadline.getDate() + 20);
  return deadline;
}

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
            <Skeleton className="h-12 w-48 rounded-md" />
        </div>
    );
  }

  const { days, hours, minutes, seconds } = timeLeft;
  
  if (!days && !hours && !minutes && !seconds) {
    return <span className="text-xl font-bold font-mono text-primary">Le temps est écoulé !</span>;
  }

  return (
    <div className="flex justify-center items-center gap-2 font-mono text-primary">
        <div className="flex flex-col items-center">
            <span className="text-4xl font-bold">{String(days).padStart(2, '0')}</span>
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Jours</span>
        </div>
        <span className="text-4xl font-bold -translate-y-2">:</span>
        <div className="flex flex-col items-center">
            <span className="text-4xl font-bold">{String(hours).padStart(2, '0')}</span>
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Heures</span>
        </div>
        <span className="text-4xl font-bold -translate-y-2">:</span>
        <div className="flex flex-col items-center">
            <span className="text-4xl font-bold">{String(minutes).padStart(2, '0')}</span>
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Minutes</span>
        </div>
        <span className="text-4xl font-bold -translate-y-2">:</span>
        <div className="flex flex-col items-center">
            <span className="text-4xl font-bold">{String(seconds).padStart(2, '0')}</span>
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Secondes</span>
        </div>
    </div>
  );
}
