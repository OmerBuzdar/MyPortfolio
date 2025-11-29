'use client';

import { forwardRef, ReactNode, MouseEventHandler } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'glow';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  href?: string;
  download?: boolean;
  magnetic?: boolean;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', children, className = '', href, download, magnetic = false, onClick, disabled, type = 'button' }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-zinc-900 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group';
    
    const variants = {
      primary: 'bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/35 hover:-translate-y-0.5 before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary-500 before:via-accent-500 before:to-primary-600 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300',
      secondary: 'glass-card hover:bg-zinc-100/90 dark:hover:bg-zinc-800/90 border-primary-200/30 dark:border-primary-500/20 hover:border-primary-300/50 dark:hover:border-primary-400/30',
      ghost: 'hover:bg-zinc-100 dark:hover:bg-zinc-800/50 hover:text-primary-600 dark:hover:text-primary-400',
      glow: 'bg-gradient-to-r from-primary-600 to-accent-500 text-white shadow-glow hover:shadow-glow-lg animate-glow',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    const motionProps = {
      whileHover: { scale: magnetic ? 1 : 1.02 },
      whileTap: { scale: 0.98 },
    };

    if (href) {
      return (
        <motion.a
          href={href}
          download={download}
          className={combinedClassName}
          {...motionProps}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
          <span className="relative z-10 flex items-center">{children}</span>
        </motion.a>
      );
    }

    return (
      <motion.button
        ref={ref}
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={combinedClassName}
        {...motionProps}
      >
        <span className="relative z-10 flex items-center">{children}</span>
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
