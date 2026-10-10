import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="container animate-fade-in" style={{ 
      minHeight: '60vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '6rem', fontWeight: 900, color: 'var(--accent-color)', marginBottom: '1rem', lineHeight: 1 }}>404</h1>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Route not found.</h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>
        Looks like this path doesn't exist in the system architecture.
      </p>
      
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link href="/" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.75rem 1.5rem',
          backgroundColor: 'var(--card-bg)',
          border: '1px solid var(--border-color)',
          borderRadius: '4px',
          color: 'var(--text-primary)',
          fontWeight: 500,
          transition: 'all var(--transition-fast)'
        }}>
          <Home size={18} /> Back Home
        </Link>
      </div>
    </div>
  );
}
