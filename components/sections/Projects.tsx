'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Smartphone, Star, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { GlassCard, Badge, Button } from '../ui';
import portfolioData from '@/data/portfolio.json';
import { Project } from '@/lib/types';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  },
};

// App icon gradient colors for each project
const appIconGradients = [
  'from-primary-500 to-accent-500',
  'from-accent-500 to-primary-600',
  'from-primary-600 to-primary-400',
  'from-accent-400 to-primary-500',
  'from-primary-400 to-accent-600',
];

export default function Projects() {
  const projects = portfolioData.projects as Project[];
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 mesh-bg opacity-50" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl pointer-events-none" />
      
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
              Featured Work
            </span>
          </motion.div>
          
          <h2 className="section-title">
            <span className="gradient-text">Apps on the App Store</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Real-world iOS applications I&apos;ve built and published
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-20"
        >
          {featuredProjects.map((project, index) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Link href={`/projects/${project.slug}`}>
                <GlassCard hover className="p-6 h-full group relative">
                  {/* Featured Badge */}
                  <div className="absolute -top-3 -right-3 z-20">
                    <Badge variant="featured" size="sm" className="shadow-lg">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      Featured
                    </Badge>
                  </div>

                  {/* App Icon */}
                  <div className="relative mb-6">
                    <motion.div 
                      className={`w-20 h-20 rounded-[22px] bg-gradient-to-br ${appIconGradients[index % appIconGradients.length]} flex items-center justify-center shadow-xl shadow-primary-500/20 group-hover:shadow-2xl group-hover:shadow-primary-500/30 transition-all duration-500`}
                      whileHover={{ scale: 1.05, rotate: 3 }}
                    >
                      <Smartphone className="w-10 h-10 text-white" />
                    </motion.div>
                    
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 w-20 h-20 rounded-[22px] bg-gradient-to-br from-primary-500 to-accent-500 opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500" />
                  </div>

                  {/* Project Info */}
                  <h3 className="text-xl font-display font-bold text-zinc-900 dark:text-zinc-100 mb-3 group-hover:text-primary-500 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-5 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="primary" size="sm">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" size="sm">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-zinc-200/50 dark:border-zinc-700/50">
                    {project.appStoreUrl && (
                      <a
                        href={project.appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        App Store
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </a>
                    )}
                    <ArrowRight className="w-4 h-4 ml-auto text-zinc-400 group-hover:text-primary-500 group-hover:translate-x-2 transition-all duration-300" />
                  </div>
                </GlassCard>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-zinc-900 dark:text-zinc-100">
                More Projects
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mt-2">
                Other apps and projects I&apos;ve worked on
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
            >
              {otherProjects.map((project, index) => (
                <motion.div key={project.id} variants={itemVariants}>
                  <Link href={`/projects/${project.slug}`}>
                    <GlassCard hover className="p-5 text-center group h-full">
                      <motion.div 
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${appIconGradients[(index + 3) % appIconGradients.length]} flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary-500/15 group-hover:shadow-xl group-hover:shadow-primary-500/25 transition-all`}
                        whileHover={{ scale: 1.1, rotate: -5 }}
                      >
                        <Smartphone className="w-7 h-7 text-white" />
                      </motion.div>
                      <h4 className="font-display font-semibold text-sm text-zinc-900 dark:text-zinc-100 group-hover:text-primary-500 transition-colors">
                        {project.name}
                      </h4>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                        {project.role}
                      </p>
                    </GlassCard>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}
