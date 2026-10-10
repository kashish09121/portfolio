import { profile } from '@/data/profile';
import { ExternalLink } from 'lucide-react';
import styles from './leetcode.module.css';

export default function LeetCode() {
  return (
    <div className={`container animate-fade-in ${styles.leetcodePage}`}>
      <h1 className="section-title">Daily LeetCode</h1>
      
      <div className={styles.content}>
        <div className={styles.philosophyBox}>
          <h2 className={styles.heading}>Problem Solving Philosophy</h2>
          <p className={styles.paragraph}>
            Consistent algorithmic practice is fundamental to my engineering growth. 
            Engaging in daily LeetCode challenges keeps my problem-solving skills sharp and 
            exposes me to various computational patterns and optimization techniques.
          </p>
          <p className={styles.paragraph}>
            My approach focuses not just on finding a solution, but on understanding 
            time/space complexity trade-offs, writing clean code, and recognizing 
            underlying data structures.
          </p>

          <h3 className={styles.heading} style={{ marginTop: '2rem', fontSize: '1.25rem' }}>Core Focus Areas</h3>
          <ul className={styles.focusList}>
            <li className={styles.focusItem}>Graphs and Dynamic Programming for complex state optimization.</li>
            <li className={styles.focusItem}>Trees and Heaps for hierarchical data management.</li>
            <li className={styles.focusItem}>Two Pointers and Sliding Windows for efficient array traversals.</li>
            <li className={styles.focusItem}>Time and Space Complexity Analysis.</li>
          </ul>

          <a 
            href={profile.socials.leetcode} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.linkButton}
          >
            View LeetCode Profile <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
