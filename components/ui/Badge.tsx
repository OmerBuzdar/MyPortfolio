'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface BadgeProps {
  variant?: 'default' | 'primary' | 'secondary' | 'outline' | 'accent' | 'featured';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  className?: string;
  pulse?: boolean;
}

export default function Badge({ 
  variant = 'default', 
  size = 'md',
  children, 
  className = '',
  pulse = false,
}: BadgeProps) {
  const variants = {
    default: 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700',
    primary: 'bg-primary-500/10 text-primary-600 dark:text-primary-400 border border-primary-500/20 hover:bg-primary-500/20 hover:border-primary-500/30',
    secondary: 'bg-gradient-to-r from-primary-500/10 to-accent-500/10 text-primary-600 dark:text-primary-400 border border-primary-500/20',
    outline: 'border border-zinc-300 dark:border-zinc-600 text-zinc-600 dark:text-zinc-400 hover:border-primary-400 hover:text-primary-500',
    accent: 'bg-accent-500/10 text-accent-600 dark:text-accent-400 border border-accent-500/20 hover:bg-accent-500/20',
    featured: 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-md shadow-primary-500/25',
  };

  const sizes = {
    sm: 'px-2.5 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base',
  };

  return (
    <motion.span
      className={`inline-flex items-center font-medium rounded-full transition-all duration-300 ${variants[variant]} ${sizes[size]} ${pulse ? 'pulse-glow' : ''} ${className}`}
      whileHover={{ scale: 1.05, y: -1 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.span>
  );
}
