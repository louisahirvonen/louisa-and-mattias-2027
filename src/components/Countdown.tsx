import { useState, useEffect } from "react";

const Countdown = () => {
  const targetDate = new Date("2027-07-24T00:00:00").getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const diff = targetDate - now;
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((diff % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-4 sm:gap-8 justify-center">
      {units.map((unit) => (
        <div key={unit.label} className="flex flex-col items-center">
          <span className="font-display text-3xl sm:text-5xl font-semibold text-foreground">
            {String(unit.value).padStart(2, "0")}
          </span>
          <span className="font-body text-xs sm:text-sm text-muted-foreground tracking-[0.2em] uppercase mt-1">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
