'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projects } from '@/data/projects';
import styles from './projects.module.css';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className={`container animate-fade-in ${styles.projectsPage}`}>
      <h1 className="section-title">Projects</h1>
      
      <div className={styles.filterContainer}>
        {categories.map(cat => (
          <button 
            key={cat}
            className={`${styles.filterBtn} ${filter === cat ? styles.active : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filteredProjects.map(project => (
          <div key={project.slug} className={styles.card}>
            <div className={styles.cardHeader}>
              <h2 className={styles.cardTitle}>{project.title}</h2>
              <span className={styles.status}>{project.status}</span>
            </div>
            
            <p className={styles.description}>{project.shortDescription}</p>
            
            <div className={styles.tags}>
              {project.technologies.slice(0, 4).map(tech => (
                <span key={tech} className={styles.tag}>{tech}</span>
              ))}
              {project.technologies.length > 4 && (
                <span className={styles.tag}>+{project.technologies.length - 4}</span>
              )}
            </div>

            <div className={styles.cardFooter}>
              <Link href={`/projects/${project.slug}`} className={styles.readMore}>
                View Case Study <ArrowRight size={16} />
              </Link>
              <div className={styles.links}>
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                    <FaGithub size={18} />
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
