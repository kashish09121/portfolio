export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    title: "Machine Learning / AI",
    skills: ["Python", "Machine Learning", "scikit-learn", "Computer Vision", "OpenCV", "NLP", "Data Processing", "Model Development", "MediaPipe"]
  },
  {
    title: "Programming",
    skills: ["Python", "Java", "JavaScript", "TypeScript"]
  },
  {
    title: "Cybersecurity",
    skills: ["Hack The Box", "Security Fundamentals", "Networking", "Penetration Testing Concepts"]
  },
  {
    title: "Tools / Platforms",
    skills: ["Git", "GitHub", "Linux", "Docker", "Redis", "FastAPI", "Flask"]
  }
];
