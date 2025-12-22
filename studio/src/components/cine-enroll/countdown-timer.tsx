
"use client";

import { useState, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

// Set the deadline to December 20, 2025, 00:00:00 Djibouti time (UTC+3)
const getDeadline = () => {
  // EAT is UTC+3
  const targetDate = new Date('2025-12-20T00:00:00+03:00');
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
        <div className="countdown-unit">
            <span className="countdown-number text-4xl lg:text-5xl">
                {String(value).padStart(2, '0')}
            </span>
            <span className="countdown-label text-xs">
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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-sm mx-auto">
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
        </div>
    );
  }

  const { days, hours, minutes, seconds } = timeLeft;
  
  if (!days && !hours && !minutes && !seconds) {
    return <span className="text-xl font-bold font-headline text-primary">L'offre a expiré !</span>;
  }

  return (
    <div className="countdown-container">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-sm mx-auto">
        <TimeUnit value={days} label="JRS" />
        <TimeUnit value={hours} label="HRS" />
        <TimeUnit value={minutes} label="MIN" />
        <TimeUnit value={seconds} label="SEC" />
      </div>
    </div>
  );
}
