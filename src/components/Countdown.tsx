import { useState, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const Countdown = () => {
  const { t } = useLanguage();
  // Counts down to the ceremony in Swedish time, wherever the guest is
  const targetDate = new Date("2027-07-24T15:00:00+02:00").getTime();

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
    { label: t.countdown.days, value: timeLeft.days },
    { label: t.countdown.hours, value: timeLeft.hours },
    { label: t.countdown.minutes, value: timeLeft.minutes },
    { label: t.countdown.seconds, value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-5 sm:gap-8 justify-center">
      {units.map((unit) => (
        <div key={unit.label} className="flex flex-col items-center">
          <span className="font-names text-2xl sm:text-4xl text-foreground tracking-wider">
            {String(unit.value).padStart(2, "0")}
          </span>
          <span className="font-body text-[9px] sm:text-[10px] text-muted-foreground tracking-[0.2em] uppercase mt-0.5">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
