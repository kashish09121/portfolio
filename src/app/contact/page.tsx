'use client';

import { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { profile } from '@/data/profile';
import styles from './contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <div className={`container animate-fade-in ${styles.contactPage}`}>
      <h1 className="section-title">Get In Touch</h1>
      
      <div className={styles.content}>
        <div>
          <h2 className={styles.heading}>Contact Information</h2>
          <p className="text-secondary" style={{ marginBottom: '2rem' }}>
            I am currently open for new opportunities. Whether you have a question, a project proposal, 
            or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className={styles.contactInfo}>
            <a href={`mailto:${profile.contact.email}`} className={styles.infoItem}>
              <div className={styles.iconWrapper}><Mail size={20} /></div>
              {profile.contact.email}
            </a>
            <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className={styles.infoItem}>
              <div className={styles.iconWrapper}><FaGithub size={20} /></div>
              GitHub Profile
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className={styles.infoItem}>
              <div className={styles.iconWrapper}><FaLinkedin size={20} /></div>
              LinkedIn Profile
            </a>
          </div>
        </div>

        <div>
          {status === 'success' && (
            <div className={styles.successMessage}>
              Message sent successfully! I will get back to you soon.
            </div>
          )}
          {status === 'error' && (
            <div className={styles.errorMessage}>
              Something went wrong. Please try again later.
            </div>
          )}
          
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className={styles.input} 
                required 
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className={styles.input} 
                required 
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="subject" className={styles.label}>Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                className={styles.input} 
                required 
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Inquiry"
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>Message</label>
              <textarea 
                id="message" 
                name="message" 
                className={styles.textarea} 
                required 
                value={formData.message}
                onChange={handleChange}
                placeholder="Hello Kashish, I'd like to talk about..."
              />
            </div>
            
            <button type="submit" className={styles.submitBtn} disabled={status === 'loading'}>
              {status === 'loading' ? 'Sending...' : (
                <>Send Message <Send size={18} /></>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
