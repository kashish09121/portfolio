import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projects } from '@/data/projects';
import styles from './project-detail.module.css';

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className={`container animate-fade-in ${styles.detailPage}`}>
      <Link href="/projects" className={styles.backLink}>
        <ArrowLeft size={16} /> Back to Projects
      </Link>
      
      <header className={styles.header}>
        <h1 className={styles.title}>{project.title}</h1>
        <div className={styles.meta}>
          <span className={styles.status}>{project.status}</span>
          <span className={styles.category}>{project.category}</span>
        </div>
        <p className={styles.shortDescription}>{project.shortDescription}</p>
        
        <div className={styles.links}>
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.primaryLink}>
              <FaGithub size={18} /> View Source
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.secondaryLink}>
              <ExternalLink size={18} /> Live Demo
            </a>
          )}
        </div>
      </header>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.heading}>Overview</h2>
          <p className={styles.paragraph}>{project.detailedDescription}</p>
        </section>

        {project.architecture && (
          <section className={styles.section}>
            <h2 className={styles.heading}>Architecture & Flow</h2>
            <div className={styles.architectureBox}>
              <code className="mono">{project.architecture}</code>
            </div>
          </section>
        )}

        <section className={styles.section}>
          <h2 className={styles.heading}>Key Features</h2>
          <ul className={styles.featureList}>
            {project.features.map((feature, idx) => (
              <li key={idx} className={styles.featureItem}>{feature}</li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Technologies</h2>
          <div className={styles.tags}>
            {project.technologies.map(tech => (
              <span key={tech} className={styles.tag}>{tech}</span>
            ))}
          </div>
        </section>

        {project.challenges && (
          <section className={styles.section}>
            <h2 className={styles.heading}>Challenges & Limitations</h2>
            <p className={styles.paragraph}>{project.challenges}</p>
          </section>
        )}
      </div>
    </div>
  );
}
