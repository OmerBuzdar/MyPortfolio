'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github, Globe, Smartphone, Star, Code2, Layers } from 'lucide-react';
import { GlassCard, Badge, Button } from '@/components/ui';
import { Project } from '@/lib/types';

interface ProjectDetailClientProps {
  project: Project;
}

const appIconGradients = [
  'from-primary-500 to-accent-500',
  'from-accent-500 to-primary-600',
  'from-primary-600 to-primary-400',
];

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  return (
    <div className="min-h-screen pt-24 pb-16 relative">
      {/* Background */}
      <div className="absolute inset-0 mesh-bg opacity-30" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="section-container relative z-10">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-primary-500 transition-colors mb-10 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Projects</span>
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <GlassCard className="p-8 sm:p-10">
              {/* Header */}
              <div className="flex flex-col sm:flex-row items-start gap-6 mb-10">
                <motion.div 
                  className="w-24 h-24 rounded-[28px] bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-2xl shadow-primary-500/30 flex-shrink-0"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Smartphone className="w-12 h-12 text-white" />
                </motion.div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl sm:text-4xl font-display font-bold text-zinc-900 dark:text-zinc-100">
                      {project.name}
                    </h1>
                    {project.featured && (
                      <Badge variant="featured" size="sm">
                        <Star className="w-3 h-3 mr-1 fill-current" />
                        Featured
                      </Badge>
                    )}
                  </div>
                  <p className="text-lg text-primary-600 dark:text-primary-400 font-medium flex items-center gap-2">
                    <Code2 className="w-4 h-4" />
                    {project.role}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="mb-10">
                <h2 className="text-xl font-display font-semibold text-zinc-900 dark:text-zinc-100 mb-4 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-primary-500" />
                  About the Project
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">
                  {project.longDescription || project.description}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <h2 className="text-xl font-display font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                  Technologies Used
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                    >
                      <Badge variant="primary" size="md">
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <GlassCard className="p-6 sm:p-8 sticky top-24" glow>
              <h3 className="text-lg font-display font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
                Project Links
              </h3>

              <div className="space-y-4">
                {project.appStoreUrl && (
                  <Button
                    href={project.appStoreUrl}
                    variant="primary"
                    className="w-full justify-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View on App Store
                  </Button>
                )}

                {project.githubUrl && (
                  <Button
                    href={project.githubUrl}
                    variant="secondary"
                    className="w-full justify-center"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                  </Button>
                )}

                {project.websiteUrl && (
                  <Button
                    href={project.websiteUrl}
                    variant="secondary"
                    className="w-full justify-center"
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    Visit Website
                  </Button>
                )}

                {!project.appStoreUrl && !project.githubUrl && !project.websiteUrl && (
                  <div className="text-center py-6 px-4 rounded-xl bg-zinc-100/50 dark:bg-zinc-800/50">
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                      This project is private or no public links are available.
                    </p>
                  </div>
                )}
              </div>

              {/* Quick Stats */}
              <div className="mt-8 pt-6 border-t border-zinc-200/50 dark:border-zinc-700/50">
                <h4 className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-4 uppercase tracking-wide">
                  Quick Info
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zinc-500 dark:text-zinc-400">Role</span>
                    <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                      {project.role}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zinc-500 dark:text-zinc-400">Stack</span>
                    <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                      {project.technologies.length} technologies
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zinc-500 dark:text-zinc-400">Status</span>
                    <Badge variant={project.appStoreUrl ? 'accent' : 'default'} size="sm">
                      {project.appStoreUrl ? 'Live on App Store' : 'Completed'}
                    </Badge>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
