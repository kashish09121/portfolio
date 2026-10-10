import Link from 'next/link';
import { ArrowRight, Terminal, Code2, ShieldAlert, Cpu } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { profile } from '@/data/profile';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className="container animate-fade-in">
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.greeting}>Hello, I'm</span>
          <h1 className={`${styles.title} text-gradient`}>{profile.name}</h1>
          <h2 className={styles.role}>{profile.role}</h2>
          
          <p className={styles.description}>
            I bridge the gap between artificial intelligence and secure software architecture. 
            Currently focused on machine learning models, solving complex algorithmic problems, 
            and exploring offensive/defensive cybersecurity concepts.
          </p>

          <div className={styles.actions}>
            <Link href="/projects" className={styles.primaryButton}>
              View Projects <ArrowRight size={18} />
            </Link>
            <Link href="/about" className={styles.secondaryButton}>
              About Me <Terminal size={18} />
            </Link>
            <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className={styles.secondaryButton} aria-label="GitHub">
              <FaGithub size={18} />
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className={styles.secondaryButton} aria-label="LinkedIn">
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>

        {/* Technical Visualization */}
        <div className={styles.visualization} aria-hidden="true">
          <div className={styles.flow}>
            <div className={styles.node}>Data</div>
            <div className={styles.arrow}>→</div>
            <div className={styles.node}>Machine Learning</div>
            <div className={styles.arrow}>→</div>
            <div className={styles.node}>Models</div>
            <div className={styles.arrow}>→</div>
            <div className={styles.node}>Systems</div>
            <div className={styles.arrow}>→</div>
            <div className={styles.node}>Security</div>
          </div>
        </div>
      </section>

      {/* Currently Building / Learning */}
      <section className={styles.currentSection}>
        <h3 className="section-title">Currently Building & Learning</h3>
        <div className={styles.grid}>
          <div className={styles.card}>
            <Cpu className={styles.cardIcon} size={32} />
            <h4 className={styles.cardTitle}>Machine Learning</h4>
            <p className="text-secondary">Building practical AI applications, focusing on computer vision and predictive models.</p>
          </div>
          <div className={styles.card}>
            <ShieldAlert className={styles.cardIcon} size={32} />
            <h4 className={styles.cardTitle}>Cybersecurity</h4>
            <p className="text-secondary">Practicing on Hack The Box, learning networking, and exploring security fundamentals.</p>
          </div>
          <div className={styles.card}>
            <Code2 className={styles.cardIcon} size={32} />
            <h4 className={styles.cardTitle}>Daily LeetCode</h4>
            <p className="text-secondary">Consistently solving algorithmic problems to strengthen data structures and problem-solving skills.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
