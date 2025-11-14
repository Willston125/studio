"use client";

import { useState, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

// Set the deadline to December 3, 2025, 23:59:59 Djibouti time (UTC+3)
const getDeadline = () => {
  // EAT is UTC+3
  const targetDate = new Date('2025-12-03T23:59:59+03:00');
  return targetDate;
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

const TimeUnit = ({ value, label }: { value: number, label: string }) => {
    return (
        <div className="flex flex-col items-center">
            <span className="text-5xl md:text-6xl font-headline text-amber-500 tracking-wider">
                {String(value).padStart(2, '0')}
            </span>
            <span className="text-xs font-body text-gray-300 uppercase tracking-widest mt-1">
                {label}
            </span>
        </div>
    );
};


export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isMounted) {
    return (
        <div className="flex justify-center gap-4 md:gap-8">
            <Skeleton className="h-24 w-20" />
            <Skeleton className="h-24 w-20" />
            <Skeleton className="h-24 w-20" />
            <Skeleton className="h-24 w-20" />
        </div>
    );
  }

  const { days, hours, minutes, seconds } = timeLeft;
  
  if (!days && !hours && !minutes && !seconds) {
    return <span className="text-xl font-bold font-headline text-primary">L'offre a expiré !</span>;
  }

  return (
    <div className="flex justify-center items-start gap-4 md:gap-8">
        <TimeUnit value={days} label="Jours" />
        <span className="text-5xl md:text-6xl font-headline text-primary/50">:</span>
        <TimeUnit value={hours} label="Heures" />
        <span className="text-5xl md:text-6xl font-headline text-primary/50">:</span>
        <TimeUnit value={minutes} label="Minutes" />
        <span className="text-5xl md:text-6xl font-headline text-primary/50">:</span>
        <TimeUnit value={seconds} label="Secondes" />
    </div>
  );
}
