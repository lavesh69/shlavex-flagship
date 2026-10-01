'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  yOffset?: number;
  className?: string;
  focusEffect?: boolean;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  yOffset = 20,
  className = '',
  focusEffect = true,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: yOffset,
        filter: focusEffect ? 'blur(4px)' : 'none',
        scale: 0.99,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        scale: 1,
      }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.16, 1, 0.3, 1] as const,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
