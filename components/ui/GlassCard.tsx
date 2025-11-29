'use client';

import { forwardRef, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  hover?: boolean;
  children: ReactNode;
  className?: string;
  delay?: number;
  glow?: boolean;
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ hover = false, children, className = '', delay = 0, glow = false }, ref) => {
    const baseStyles = 'backdrop-blur-xl bg-white/70 dark:bg-zinc-900/50 border border-zinc-200/60 dark:border-zinc-700/40 rounded-2xl shadow-xl shadow-zinc-200/30 dark:shadow-black/20 relative overflow-hidden';
    
    const hoverStyles = hover 
      ? 'transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/10 dark:hover:shadow-primary-500/5 hover:border-primary-300/40 dark:hover:border-primary-500/30 hover:-translate-y-2 cursor-pointer group' 
      : '';
    
    const glowStyles = glow
      ? 'before:absolute before:inset-0 before:rounded-2xl before:p-[1px] before:bg-gradient-to-r before:from-primary-500/50 before:via-accent-500/50 before:to-primary-500/50 before:-z-10 before:blur-sm before:opacity-60'
      : '';

    return (
      <motion.div
        ref={ref}
        className={`${baseStyles} ${hoverStyles} ${glowStyles} ${className}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay }}
      >
        {/* Subtle gradient overlay on hover */}
        {hover && (
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 via-transparent to-accent-500/0 group-hover:from-primary-500/5 group-hover:to-accent-500/5 transition-all duration-500 pointer-events-none" />
        )}
        <div className="relative z-10">{children}</div>
      </motion.div>
    );
  }
);

GlassCard.displayName = 'GlassCard';

export default GlassCard;
