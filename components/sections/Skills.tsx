'use client';

import { motion } from 'framer-motion';
import { GlassCard, Badge } from '../ui';
import portfolioData from '@/data/portfolio.json';
import { 
  Code2, 
  Globe, 
  Flame, 
  Video, 
  Database, 
  CreditCard,
  GitBranch,
  Sparkles
} from 'lucide-react';

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'Core': Code2,
  'Networking': Globe,
  'Firebase': Flame,
  'Media & Vision': Video,
  'Data & Storage': Database,
  'Monetization': CreditCard,
  'Architecture & Tools': GitBranch,
};

const categoryGradients: Record<string, string> = {
  'Core': 'from-primary-500 to-primary-600',
  'Networking': 'from-accent-500 to-accent-600',
  'Firebase': 'from-orange-500 to-red-500',
  'Media & Vision': 'from-pink-500 to-primary-500',
  'Data & Storage': 'from-emerald-500 to-teal-500',
  'Monetization': 'from-amber-500 to-orange-500',
  'Architecture & Tools': 'from-primary-600 to-accent-500',
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-40 -left-20 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 -right-20 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-accent-500" />
            <span className="text-sm font-medium text-accent-600 dark:text-accent-400">
              Technical Expertise
            </span>
          </motion.div>
          
          <h2 className="section-title">
            <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {portfolioData.skills.map((category, index) => {
            const Icon = categoryIcons[category.name] || Code2;
            const gradient = categoryGradients[category.name] || 'from-primary-500 to-accent-500';
            
            return (
              <motion.div key={category.name} variants={itemVariants}>
                <GlassCard hover className="p-6 h-full" delay={index * 0.03}>
                  <div className="flex items-center gap-3 mb-5">
                    <motion.div 
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h3 className="font-display font-semibold text-lg text-zinc-900 dark:text-zinc-100">
                      {category.name}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + skillIndex * 0.03 }}
                      >
                        <Badge variant="default" size="sm">
                          {skill.name}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
