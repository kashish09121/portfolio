export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  skills: string[];
  url?: string;
  metadata?: string;
}

// Certifications will be uploaded separately and populated here later.
export const certifications: Certification[] = [];
