import { experience } from '@/data/experience';
import styles from './experience.module.css';

export default function Experience() {
  return (
    <div className={`container animate-fade-in ${styles.experiencePage}`}>
      <h1 className="section-title">Experience</h1>
      
      <div className={styles.experienceList}>
        {experience.map((exp, index) => (
          <div key={index} className={styles.experienceCard}>
            <div className={styles.header}>
              <div>
                <h2 className={styles.company}>{exp.company}</h2>
                <div className={styles.role}>{exp.role}</div>
              </div>
              <div className={styles.duration}>{exp.duration}</div>
            </div>
            
            {exp.description && (
              <p className={styles.description}>{exp.description}</p>
            )}

            {exp.responsibilities && exp.responsibilities.length > 0 && (
              <ul className={styles.responsibilities}>
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className={styles.responsibilityItem}>
                    {resp}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
