import { certifications } from '@/data/certifications';
import { ExternalLink } from 'lucide-react';
import styles from './certifications.module.css';

export default function Certifications() {
  return (
    <div className={`container animate-fade-in ${styles.certificationsPage}`}>
      <h1 className="section-title">Certifications</h1>
      
      {certifications.length === 0 ? (
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon}>🎓</div>
          <h2>Certifications Unavailable</h2>
          <p>Certification details are currently being updated and will be available soon.</p>
        </div>
      ) : (
        <div className={styles.grid}>
          {certifications.map((cert, index) => (
            <div key={index} className={styles.card}>
              <h2 className={styles.certName}>{cert.name}</h2>
              <div className={styles.issuer}>{cert.issuer} &bull; {cert.date}</div>
              
              {cert.credentialId && (
                <div className={styles.credential}>ID: {cert.credentialId}</div>
              )}
              
              <div className={styles.skills}>
                {cert.skills.map(skill => (
                  <span key={skill} className={styles.skill}>{skill}</span>
                ))}
              </div>

              {cert.url && (
                <a href={cert.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                  View Credential <ExternalLink size={16} />
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
