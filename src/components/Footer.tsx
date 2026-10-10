import Link from 'next/link';
import { Code2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { profile } from '@/data/profile';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div>
          <div className={styles.brand}>Kashish</div>
          <div className={styles.subtitle}>{profile.role}</div>
        </div>

        <div className={styles.socials}>
          <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
            <FaGithub size={20} />
          </a>
          <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
            <FaLinkedin size={20} />
          </a>
          <a href={profile.socials.leetcode} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LeetCode">
            <Code2 size={20} />
          </a>
        </div>

        <div className={styles.copyright}>
          &copy; {year} Kashish. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
