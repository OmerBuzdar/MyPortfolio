'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, GraduationCap, Sparkles, CheckCircle2 } from 'lucide-react';
import { GlassCard } from '../ui';
import portfolioData from '@/data/portfolio.json';

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl pointer-events-none" />
      
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
              Career Journey
            </span>
          </motion.div>
          
          <h2 className="section-title">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            My professional journey in iOS development
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line - Gradient */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500 transform md:-translate-x-1/2" />

            {/* Experience Items */}
            {portfolioData.experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-start mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <motion.div 
                  className="absolute left-4 md:left-1/2 w-4 h-4 transform -translate-x-1/2 z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, type: 'spring' }}
                >
                  <div className={`w-4 h-4 rounded-full ${exp.current ? 'bg-gradient-to-r from-primary-500 to-accent-500' : 'bg-primary-500'} border-4 border-white dark:border-zinc-950 shadow-lg shadow-primary-500/50`}>
                    {exp.current && (
                      <span className="absolute inset-0 rounded-full bg-primary-500 animate-ping opacity-40" />
                    )}
                  </div>
                </motion.div>

                {/* Content */}
                <div className={`w-full md:w-[calc(50%-2rem)] pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <GlassCard className="p-6 sm:p-8" glow={exp.current}>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                      <div>
                        <h3 className="text-xl font-display font-bold text-zinc-900 dark:text-zinc-100">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 mt-2">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center">
                            <Briefcase className="w-4 h-4 text-primary-500" />
                          </div>
                          <span className="font-semibold text-primary-600 dark:text-primary-400">
                            {exp.company}
                          </span>
                        </div>
                      </div>
                      {exp.current && (
                        <span className="inline-flex items-center px-3 py-1 text-xs font-semibold bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-600 dark:text-green-400 rounded-full border border-green-500/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2 animate-pulse" />
                          Current
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400 mb-5">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-primary-500/70" />
                        {exp.startDate} - {exp.endDate}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-accent-500/70" />
                        {exp.location}
                      </span>
                    </div>

                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-400"
                        >
                          <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </GlassCard>
                </div>
              </motion.div>
            ))}

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative flex items-start"
            >
              {/* Timeline Dot */}
              <motion.div 
                className="absolute left-4 md:left-1/2 w-4 h-4 transform -translate-x-1/2 z-10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: 'spring' }}
              >
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-accent-500 to-primary-500 border-4 border-white dark:border-zinc-950" />
              </motion.div>

              <div className="w-full md:w-[calc(50%-2rem)] pl-12 md:pl-0 md:pr-12">
                <GlassCard className="p-6 sm:p-8">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500 to-primary-500 flex items-center justify-center shadow-lg shadow-accent-500/25">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-zinc-900 dark:text-zinc-100">
                      Education
                    </h3>
                  </div>
                  {portfolioData.education.map((edu, i) => (
                    <div key={i} className="pl-2">
                      <h4 className="font-display font-semibold text-lg text-zinc-900 dark:text-zinc-100">
                        {edu.degree}
                      </h4>
                      <p className="text-primary-600 dark:text-primary-400 font-medium mt-1">
                        {edu.institution}
                      </p>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {edu.startYear} - {edu.endYear}
                        <span className="text-zinc-300 dark:text-zinc-600">•</span>
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </p>
                    </div>
                  ))}
                </GlassCard>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
