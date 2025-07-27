import { useState, useEffect } from 'react';

interface LiveClockProps {
  className?: string;
  format?: 'time' | 'datetime' | 'full';
}

export default function LiveClock({ className = "", format = 'time' }: LiveClockProps) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = () => {
    switch (format) {
      case 'datetime':
        return time.toLocaleString('en-US', {
          weekday: 'short',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        });
      case 'full':
        return time.toLocaleString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        });
      default:
        return time.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        });
    }
  };

  return (
    <span className={className}>
      {formatTime()}
    </span>
  );
}