import { skills } from '@/data/skills';
import styles from './skills.module.css';

export default function Skills() {
  return (
    <div className={`container animate-fade-in ${styles.skillsPage}`}>
      <h1 className="section-title">Skills & Technologies</h1>
      
      <div className={styles.grid}>
        {skills.map((category, index) => (
          <div key={index} className={styles.skillCategory}>
            <h2 className={styles.categoryTitle}>{category.title}</h2>
            <div className={styles.skillList}>
              {category.skills.map(skill => (
                <span key={skill} className={styles.skillTag}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
