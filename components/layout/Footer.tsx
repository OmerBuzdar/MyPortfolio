'use client';

import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';
import portfolioData from '@/data/portfolio.json';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-zinc-200/50 dark:border-zinc-800/50 bg-white/30 dark:bg-zinc-900/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-display font-bold text-sm shadow-lg shadow-primary-500/20">
                {portfolioData.personal.name.split(' ').map(n => n[0]).join('')}
              </div>
              <span className="font-display font-semibold text-zinc-900 dark:text-zinc-100">
                {portfolioData.personal.name}
              </span>
            </motion.div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
              Crafted with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> in {portfolioData.personal.location.split(',')[0]}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {portfolioData.socials.map((social) => {
              const Icon = iconMap[social.icon] || Mail;
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center hover:bg-gradient-to-br hover:from-primary-500 hover:to-accent-500 transition-all duration-300 group shadow-sm"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5 text-zinc-600 dark:text-zinc-400 group-hover:text-white transition-colors" />
                </motion.a>
              );
            })}
            
            {/* Scroll to top button */}
            <motion.button
              onClick={scrollToTop}
              className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-500/10 to-accent-500/10 border border-primary-500/20 flex items-center justify-center hover:from-primary-500 hover:to-accent-500 transition-all duration-300 group ml-2"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 text-primary-500 group-hover:text-white transition-colors" />
            </motion.button>
          </div>

          {/* Copyright */}
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
