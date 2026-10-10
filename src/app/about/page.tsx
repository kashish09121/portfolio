import { profile } from '@/data/profile';
import styles from './about.module.css';

export default function About() {
  return (
    <div className={`container animate-fade-in ${styles.aboutPage}`}>
      <h1 className="section-title">About Me</h1>
      
      <div className={styles.content}>
        <section>
          <h2 className={styles.heading}>Introduction</h2>
          <p className={styles.paragraph}>{profile.about.introduction}</p>
        </section>

        <section>
          <h2 className={styles.heading}>Philosophy</h2>
          <p className={styles.paragraph}>{profile.about.philosophy}</p>
        </section>
        
        <section>
          <h2 className={styles.heading}>Focus Areas</h2>
          <div className={styles.timelineList}>
            <div className={styles.timelineItem}>
              <span className={styles.timelinePoint}></span>
              <div className={styles.timelineContent}>
                <h3>Education</h3>
                <p>B.Tech Computer Science and Engineering in AI & ML</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <span className={styles.timelinePoint}></span>
              <div className={styles.timelineContent}>
                <h3>Machine Learning</h3>
                <p>Building predictive models, AI assistants, and automated pipelines.</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <span className={styles.timelinePoint}></span>
              <div className={styles.timelineContent}>
                <h3>Software Projects</h3>
                <p>Developing robust, privacy-focused, and scalable web applications.</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <span className={styles.timelinePoint}></span>
              <div className={styles.timelineContent}>
                <h3>Cybersecurity</h3>
                <p>Practicing on Hack The Box, learning networking and system defense.</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <span className={styles.timelinePoint}></span>
              <div className={styles.timelineContent}>
                <h3>Continuous Learning</h3>
                <p>Daily LeetCode practice and continuous exploration of new technologies.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
