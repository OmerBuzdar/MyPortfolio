'use client';

import { motion } from 'framer-motion';
import { Download, Smartphone, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui';
import portfolioData from '@/data/portfolio.json';

export default function Hero() {
  const { name, title, bio, resumeUrl } = portfolioData.personal;

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Staggered animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 mesh-bg" />
      <div className="absolute inset-0 hero-glow" />
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large primary orb */}
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-primary-500/30 to-accent-500/20 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        
        {/* Secondary accent orb */}
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-accent-500/25 to-primary-500/15 blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>
      
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-[10%] w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 shadow-lg shadow-primary-500/30 flex items-center justify-center"
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Smartphone className="w-8 h-8 text-white" />
        </motion.div>
        
        <motion.div
          className="absolute top-1/3 right-[15%] w-12 h-12 rounded-xl bg-gradient-to-br from-accent-400 to-accent-500 shadow-lg shadow-accent-500/30"
          animate={{ y: [0, -15, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        
        <motion.div
          className="absolute bottom-1/4 left-[20%] w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-400 to-accent-500 shadow-lg shadow-primary-500/25"
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        
        <motion.div
          className="absolute bottom-1/3 right-[10%] w-10 h-10 rounded-xl bg-gradient-to-br from-accent-500 to-primary-500 shadow-lg shadow-accent-500/25"
          animate={{ y: [0, -18, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />
      </div>

      <div className="section-container relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Profile Photo with Animated Border */}
          <motion.div
            variants={itemVariants}
            className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-8"
          >
            {/* Animated gradient ring */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 p-[3px]"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            >
              <div className="w-full h-full rounded-full bg-surface-50 dark:bg-surface-950" />
            </motion.div>
            
            {/* Profile image */}
            <div className="absolute inset-[3px] rounded-full overflow-hidden bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/50 dark:to-accent-900/50">
              <Image
                src="/images/profile.jpg"
                alt={name}
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-primary-500/20 blur-xl -z-10" />
          </motion.div>

          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-8 backdrop-blur-sm"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
              Available for new opportunities
            </span>
          </motion.div>

          {/* Name with gradient */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold mb-6 tracking-tight"
          >
            <span className="text-zinc-900 dark:text-zinc-100">Hi, I&apos;m </span>
            <span className="animated-gradient-text">Umer</span>
          </motion.h1>

          {/* Title with decorative lines */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-primary-500 to-primary-500" />
            <h2 className="text-xl sm:text-2xl font-medium text-zinc-600 dark:text-zinc-400 font-display">
              {title}
            </h2>
            <div className="w-12 h-[2px] bg-gradient-to-l from-transparent via-accent-500 to-accent-500" />
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            {bio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button href={resumeUrl} download variant="primary" size="lg">
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
            <Button variant="secondary" size="lg" onClick={scrollToProjects}>
              View My Work
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
