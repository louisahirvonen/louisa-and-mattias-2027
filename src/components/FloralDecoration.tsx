const FloralDecoration = ({
  className = "",
  variant = "corner-top-right",
}: {
  className?: string;
  variant?: "corner-top-right" | "corner-top-left" | "corner-bottom-right" | "corner-bottom-left" | "divider" | "small";
}) => {
  if (variant === "divider") {
    return (
      <svg className={className} viewBox="0 0 200 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 15 C85 5, 70 10, 60 15 C50 20, 35 15, 20 15" stroke="hsl(var(--sage))" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
        <path d="M100 15 C115 5, 130 10, 140 15 C150 20, 165 15, 180 15" stroke="hsl(var(--sage))" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
        <ellipse cx="55" cy="12" rx="4" ry="6" fill="hsl(var(--rose-light))" opacity="0.4" transform="rotate(-20 55 12)" />
        <ellipse cx="52" cy="13" rx="3.5" ry="5.5" fill="hsl(var(--rose-light))" opacity="0.3" transform="rotate(-45 52 13)" />
        <ellipse cx="58" cy="13" rx="3.5" ry="5.5" fill="hsl(var(--rose-light))" opacity="0.3" transform="rotate(5 58 13)" />
        <ellipse cx="145" cy="12" rx="4" ry="6" fill="hsl(var(--rose-light))" opacity="0.4" transform="rotate(20 145 12)" />
        <ellipse cx="148" cy="13" rx="3.5" ry="5.5" fill="hsl(var(--rose-light))" opacity="0.3" transform="rotate(45 148 13)" />
        <ellipse cx="142" cy="13" rx="3.5" ry="5.5" fill="hsl(var(--rose-light))" opacity="0.3" transform="rotate(-5 142 13)" />
        <circle cx="100" cy="15" r="2" fill="hsl(var(--gold-light))" opacity="0.6" />
        <ellipse cx="75" cy="11" rx="3" ry="2" fill="hsl(var(--sage))" opacity="0.3" transform="rotate(-30 75 11)" />
        <ellipse cx="78" cy="14" rx="2.5" ry="1.5" fill="hsl(var(--sage))" opacity="0.25" transform="rotate(15 78 14)" />
        <ellipse cx="125" cy="11" rx="3" ry="2" fill="hsl(var(--sage))" opacity="0.3" transform="rotate(30 125 11)" />
        <ellipse cx="122" cy="14" rx="2.5" ry="1.5" fill="hsl(var(--sage))" opacity="0.25" transform="rotate(-15 122 14)" />
      </svg>
    );
  }

  if (variant === "small") {
    return (
      <svg className={className} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 50 C25 40, 15 35, 10 30" stroke="hsl(var(--sage))" strokeWidth="0.7" strokeLinecap="round" opacity="0.4" />
        <path d="M30 50 C35 40, 45 35, 50 30" stroke="hsl(var(--sage))" strokeWidth="0.7" strokeLinecap="round" opacity="0.4" />
        <ellipse cx="30" cy="30" rx="6" ry="8" fill="hsl(var(--rose-light))" opacity="0.35" />
        <ellipse cx="26" cy="32" rx="5" ry="7" fill="hsl(var(--rose-light))" opacity="0.25" transform="rotate(-30 26 32)" />
        <ellipse cx="34" cy="32" rx="5" ry="7" fill="hsl(var(--rose-light))" opacity="0.25" transform="rotate(30 34 32)" />
        <circle cx="30" cy="30" r="2.5" fill="hsl(var(--gold-light))" opacity="0.5" />
        <ellipse cx="18" cy="33" rx="3.5" ry="2" fill="hsl(var(--sage))" opacity="0.3" transform="rotate(-40 18 33)" />
        <ellipse cx="42" cy="33" rx="3.5" ry="2" fill="hsl(var(--sage))" opacity="0.3" transform="rotate(40 42 33)" />
      </svg>
    );
  }

  // Corner variants — a watercolour-style floral spray
  const isLeft = variant.includes("left");
  const isBottom = variant.includes("bottom");
  const scaleX = isLeft ? -1 : 1;
  const scaleY = isBottom ? -1 : 1;

  return (
    <svg
      className={className}
      viewBox="0 0 180 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `scale(${scaleX}, ${scaleY})` }}
    >
      {/* Main branch */}
      <path d="M170 10 C140 25, 100 40, 70 70 C50 90, 30 120, 10 170" stroke="hsl(var(--sage))" strokeWidth="1" strokeLinecap="round" opacity="0.35" />
      <path d="M160 5 C130 30, 80 50, 50 80" stroke="hsl(var(--sage))" strokeWidth="0.7" strokeLinecap="round" opacity="0.25" />
      
      {/* Large bloom */}
      <ellipse cx="110" cy="40" rx="14" ry="18" fill="hsl(var(--rose-light))" opacity="0.3" transform="rotate(-15 110 40)" />
      <ellipse cx="104" cy="44" rx="12" ry="16" fill="hsl(var(--rose-light))" opacity="0.25" transform="rotate(-45 104 44)" />
      <ellipse cx="116" cy="44" rx="12" ry="16" fill="hsl(var(--rose-light))" opacity="0.2" transform="rotate(15 116 44)" />
      <ellipse cx="108" cy="36" rx="10" ry="14" fill="hsl(var(--rose-light))" opacity="0.2" transform="rotate(-60 108 36)" />
      <circle cx="110" cy="42" r="5" fill="hsl(var(--gold-light))" opacity="0.35" />
      
      {/* Medium bloom */}
      <ellipse cx="65" cy="80" rx="10" ry="13" fill="hsl(var(--lavender))" opacity="0.35" transform="rotate(-20 65 80)" />
      <ellipse cx="60" cy="83" rx="8" ry="11" fill="hsl(var(--lavender))" opacity="0.25" transform="rotate(-50 60 83)" />
      <ellipse cx="70" cy="83" rx="8" ry="11" fill="hsl(var(--lavender))" opacity="0.25" transform="rotate(10 70 83)" />
      <circle cx="65" cy="81" r="3.5" fill="hsl(var(--gold-light))" opacity="0.3" />
      
      {/* Small bloom */}
      <ellipse cx="38" cy="120" rx="7" ry="9" fill="hsl(var(--rose-light))" opacity="0.25" transform="rotate(10 38 120)" />
      <ellipse cx="35" cy="122" rx="6" ry="8" fill="hsl(var(--rose-light))" opacity="0.2" transform="rotate(-20 35 122)" />
      <circle cx="37" cy="120" r="2.5" fill="hsl(var(--gold-light))" opacity="0.3" />
      
      {/* Leaves */}
      <ellipse cx="140" cy="22" rx="8" ry="4" fill="hsl(var(--sage))" opacity="0.25" transform="rotate(-30 140 22)" />
      <ellipse cx="130" cy="30" rx="6" ry="3" fill="hsl(var(--sage))" opacity="0.2" transform="rotate(-45 130 30)" />
      <ellipse cx="90" cy="55" rx="7" ry="3.5" fill="hsl(var(--sage))" opacity="0.25" transform="rotate(-25 90 55)" />
      <ellipse cx="82" cy="65" rx="6" ry="3" fill="hsl(var(--sage))" opacity="0.2" transform="rotate(20 82 65)" />
      <ellipse cx="50" cy="100" rx="6" ry="3" fill="hsl(var(--sage))" opacity="0.2" transform="rotate(-15 50 100)" />
      <ellipse cx="25" cy="140" rx="5" ry="2.5" fill="hsl(var(--sage))" opacity="0.18" transform="rotate(25 25 140)" />
      
      {/* Tiny buds */}
      <circle cx="150" cy="15" r="2.5" fill="hsl(var(--rose-light))" opacity="0.3" />
      <circle cx="85" cy="60" r="2" fill="hsl(var(--lavender))" opacity="0.3" />
      <circle cx="28" cy="135" r="2" fill="hsl(var(--rose-light))" opacity="0.25" />
      <circle cx="45" cy="105" r="1.5" fill="hsl(var(--lavender))" opacity="0.2" />
    </svg>
  );
};

export default FloralDecoration;
