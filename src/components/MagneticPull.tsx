'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

interface MagneticPullProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}

export const MagneticPull: React.FC<MagneticPullProps> = ({
  children,
  strength = 0.2,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isPointerDevice, setIsPointerDevice] = useState(false);

  const springConfig = { damping: 20, stiffness: 220, mass: 0.1 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    // Only activate for high-precision pointer devices (desktop mouse)
    if (window.matchMedia('(pointer: fine)').matches) {
      setIsPointerDevice(true);
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || !isPointerDevice) return;

    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    x.set(distanceX * strength);
    y.set(distanceY * strength);
  };

  const handleMouseLeave = () => {
    if (!isPointerDevice) return;
    x.set(0);
    y.set(0);
  };

  if (!isPointerDevice) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
};
