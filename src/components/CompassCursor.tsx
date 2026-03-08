import { useEffect, useRef, useState } from "react";

interface Trail {
  x: number;
  y: number;
  opacity: number;
  scale: number;
}

export function CompassCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [angle, setAngle] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [trails, setTrails] = useState<Trail[]>([]);
  const prevPos = useRef({ x: 0, y: 0 });
  const targetAngle = useRef(0);
  const currentAngle = useRef(0);
  const rafId = useRef(0);

  useEffect(() => {
    // Hide on touch devices
    if ('ontouchstart' in window) return;

    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - prevPos.current.x;
      const dy = e.clientY - prevPos.current.y;
      
      if (Math.abs(dx) > 1 || Math.abs(dy) > 1) {
        targetAngle.current = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
      }

      prevPos.current = { x: e.clientX, y: e.clientY };
      setPos({ x: e.clientX, y: e.clientY });

      // Add trail
      setTrails(prev => {
        const next = [{ x: e.clientX, y: e.clientY, opacity: 1, scale: 1 }, ...prev.slice(0, 4)];
        return next.map((t, i) => ({
          ...t,
          opacity: 1 - (i + 1) * 0.2,
          scale: 1 - (i + 1) * 0.15,
        }));
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, [role="button"], input, select, textarea, label, [tabindex]');
      setIsHovering(!!isInteractive);
    };

    // Smooth angle interpolation
    const animate = () => {
      const diff = targetAngle.current - currentAngle.current;
      // Shortest path wrap-around
      let delta = ((diff + 180) % 360) - 180;
      if (delta < -180) delta += 360;
      
      currentAngle.current += delta * 0.15;
      setAngle(currentAngle.current);
      rafId.current = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    rafId.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  // Hide on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) return null;

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 99999 }}>
      {/* Trail dots */}
      {trails.map((trail, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: trail.x - 3,
            top: trail.y - 3,
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: '#E8722A',
            opacity: trail.opacity * 0.5,
            transform: `scale(${trail.scale})`,
            transition: 'opacity 0.15s ease, transform 0.15s ease',
          }}
        />
      ))}

      {/* Cardinal ring */}
      <div
        style={{
          position: 'absolute',
          left: pos.x - 18,
          top: pos.y - 18,
          width: 36,
          height: 36,
          borderRadius: '50%',
          border: `1.5px solid rgba(232, 114, 42, ${isHovering ? 0.5 : 0.15})`,
          transform: `scale(${isHovering ? 1.3 : 1})`,
          transition: 'border-color 0.2s ease, transform 0.2s ease',
        }}
      />

      {/* Compass needle SVG */}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        style={{
          position: 'absolute',
          left: pos.x - 12,
          top: pos.y - 12,
          transform: `rotate(${angle}deg)`,
          filter: isHovering ? 'drop-shadow(0 0 6px rgba(232,114,42,0.6))' : 'none',
          transition: 'filter 0.2s ease',
        }}
      >
        {/* North tip (orange) */}
        <path d="M12 2 L14.5 10 L12 9 L9.5 10 Z" fill="#E8722A" />
        {/* South half (dark) */}
        <path d="M12 22 L14.5 14 L12 15 L9.5 14 Z" fill="#1C1814" />
        {/* Pivot ring */}
        <circle cx="12" cy="12" r="3.5" fill="none" stroke="#EDE8DC" strokeWidth="1.5" />
        {/* Center dot */}
        <circle cx="12" cy="12" r="1.5" fill="#E8722A" />
      </svg>
    </div>
  );
}
