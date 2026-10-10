'use client';

import { profile } from '@/data/profile';
import { experience } from '@/data/experience';
import { projects } from '@/data/projects';
import { skills } from '@/data/skills';
import { Download } from 'lucide-react';
import styles from './resume.module.css';

export default function Resume() {
  return (
    <div className={`container animate-fade-in ${styles.resumePage}`}>
      <h1 className="section-title">Resume</h1>
      
      <div className={styles.content}>
        <header className={styles.header}>
          <h2 className={styles.name}>{profile.name}</h2>
          <div className={styles.role}>{profile.role}</div>
          <div className={styles.contactInfo}>
            <a href={`mailto:${profile.contact.email}`}>{profile.contact.email}</a>
            <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={profile.socials.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </header>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Summary</h3>
          <p className="text-secondary" style={{ lineHeight: 1.6 }}>{profile.about.introduction}</p>
        </section>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Education</h3>
          <div className={styles.item}>
            <div className={styles.itemHeader}>
              <div>
                <div className={styles.itemTitle}>{profile.department}</div>
                <div className={styles.itemSubtitle}>University/College Name</div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Experience</h3>
          {experience.map((exp, idx) => (
            <div key={idx} className={styles.item}>
              <div className={styles.itemHeader}>
                <div>
                  <div className={styles.itemTitle}>{exp.company}</div>
                  <div className={styles.itemSubtitle}>{exp.role}</div>
                </div>
                <div className={styles.itemDate}>{exp.duration}</div>
              </div>
              <ul className={styles.bulletList}>
                {exp.responsibilities?.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Selected Projects</h3>
          {projects.filter(p => p.status === 'Completed').slice(0, 3).map(project => (
            <div key={project.slug} className={styles.item}>
              <div className={styles.itemHeader}>
                <div>
                  <div className={styles.itemTitle}>{project.title}</div>
                  <div className={styles.itemSubtitle}>{project.technologies.slice(0, 4).join(', ')}</div>
                </div>
              </div>
              <p className="text-secondary" style={{ marginBottom: '0.5rem', fontSize: '0.95rem' }}>{project.shortDescription}</p>
              <ul className={styles.bulletList}>
                {project.features.slice(0, 3).map((feat, i) => (
                  <li key={i}>{feat}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Skills</h3>
          <div className={styles.skillsGrid}>
            {skills.map((cat, idx) => (
              <div key={idx}>
                <div className={styles.skillCategory}>{cat.title}</div>
                <div className={styles.skillList}>{cat.skills.join(', ')}</div>
              </div>
            ))}
          </div>
        </section>

        <div className={styles.actions}>
          {/* Note: In a real app, this would link to an actual PDF file in the public directory */}
          <button className={styles.button} onClick={() => alert('Resume download feature will be available once the PDF is uploaded.')}>
            <Download size={18} /> Download PDF
          </button>
        </div>
      </div>
    </div>
  );
}
