'use client';

import { forwardRef, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  hover?: boolean;
  children: ReactNode;
  className?: string;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ hover = false, children, className = '' }, ref) => {
    const baseStyles = 'rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm';
    const hoverStyles = hover ? 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-zinc-300 dark:hover:border-zinc-700' : '';

    return (
      <motion.div
        ref={ref}
        className={`${baseStyles} ${hoverStyles} ${className}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
