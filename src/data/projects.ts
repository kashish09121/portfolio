export interface Project {
  title: string;
  slug: string;
  shortDescription: string;
  detailedDescription: string;
  category: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  liveUrl?: string;
  architecture?: string;
  status: 'Completed' | 'In Progress' | 'Experimental';
  challenges?: string;
  outcomes?: string;
  metrics?: string;
}

export const projects: Project[] = [
  {
    title: "Smile & Earn",
    slug: "smile-and-earn",
    shortDescription: "Playful interactive web experience rewarding users for smiling using on-device AI.",
    detailedDescription: "Smile & Earn is a gamified web application that uses MediaPipe Tasks Vision to detect faces and measure smiles in real-time. It emphasizes privacy by performing all computer vision processing directly in the browser, without sending video data to any server. Users earn points, build streaks, and unlock achievements based on their genuine smiles.",
    category: "AI",
    technologies: ["HTML5", "CSS3", "Vanilla JavaScript", "MediaPipe Tasks Vision", "Canvas Confetti"],
    features: [
      "On-Device AI Face Detection using MediaPipe",
      "Real-time smile measurement",
      "Gamification (points, streaks, achievements)",
      "Interactive glassmorphic dashboard",
      "Built-in simulator mode"
    ],
    githubUrl: "https://github.com/kashish09121/smile-and-earn",
    architecture: "Webcam Input → MediaPipe FaceLandmarker → Client-Side Logic/State → UI Update",
    status: "Completed",
  },
  {
    title: "Early-Stage Alzheimer's Disease Prediction",
    slug: "alzheimers-prediction",
    shortDescription: "Machine learning prototype predicting Alzheimer's disease likelihood based on biomarkers.",
    detailedDescription: "This educational and research prototype uses machine learning models (LinearSVC, LogisticRegression) to predict the likelihood of earlier stages of Alzheimer's disease. It evaluates patient risk probability based on a highly restricted feature set of three specific biomarkers: Cystatin C (Protein), MMP10 (Enzyme), and Tau (Protein).",
    category: "Machine Learning",
    technologies: ["Python", "Flask", "scikit-learn", "pandas", "numpy", "Bootstrap 5", "HTML5", "CSS3"],
    features: [
      "Machine learning backend with LinearSVC & LogisticRegression",
      "REST API via Flask",
      "Responsive Bootstrap 5 web interface",
      "Reproducible model training pipeline"
    ],
    githubUrl: "https://github.com/kashish09121/Earlier-Stages-of-Alzheimer-s-disease-prodiction-project",
    architecture: "Biomarker Input (UI) → Flask API → scikit-learn Models → Probability Output (UI)",
    status: "Experimental",
    challenges: "Trained on a highly restricted feature set (only 3 biomarkers) with a small dataset. It is not clinically validated."
  },
  {
    title: "AI Voice Assistant",
    slug: "ai-voice-assistant",
    shortDescription: "Intelligent desktop voice assistant (ARO) powered by LLMs for natural language control.",
    detailedDescription: "ARO (Adaptive Responsive Operator) is an intelligent personal desktop voice assistant designed for system control and intelligent intent parsing. It utilizes OpenAI's API to understand natural language commands and features a tiered permission system for secure execution of system commands.",
    category: "AI",
    technologies: ["Python", "CustomTkinter", "SpeechRecognition", "edge-tts", "OpenAI API", "SQLite"],
    features: [
      "Natural female voice TTS and STT",
      "System control (apps, web search, files, power states)",
      "Intelligent intent parsing via LLMs",
      "Persistent SQLite memory for projects/personal details",
      "Secure tiered permission architecture",
      "CustomTkinter desktop dashboard"
    ],
    githubUrl: "https://github.com/kashish09121/ai-voice-assistant",
    architecture: "Speech Input → STT → LLM Intent Parsing → Permission Check → System Execution → TTS Output",
    status: "Completed"
  },
  {
    title: "InvoiceIQ",
    slug: "invoice-iq",
    shortDescription: "Automated invoice processing and anomaly detection pipeline.",
    detailedDescription: "InvoiceIQ is an end-to-end Python pipeline automating the extraction, structuring, validation, and anomaly detection of raw invoice images. It acts as a reliable first-pass auditor to flag suspicious financial behavior using rule-based constraints, statistical profiling, and unsupervised machine learning.",
    category: "Data / Automation",
    technologies: ["Python", "OpenCV", "Tesseract OCR", "scikit-learn", "pytest"],
    features: [
      "Image Preprocessing with OpenCV (Grayscale, Median Blur, Otsu's Binarization)",
      "Rule-Based deterministic validation",
      "Vendor Z-Score statistical profiling",
      "Isolation Forest unsupervised anomaly detection",
      "Fuzzy duplicate matching",
      "CSV/JSON structured reporting"
    ],
    githubUrl: "https://github.com/kashish09121/invoice-iq",
    architecture: "Invoice Images → Preprocessing → OCR → Regex Parser → Validation & Anomaly Detection → Structured Output",
    status: "Completed",
    challenges: "OCR bottlenecks on distorted scans causing regex cascade failures, and cold-start problems for Vendor Z-scoring."
  },
  {
    title: "ResumeIQ",
    slug: "resume-iq",
    shortDescription: "Local-first, privacy-focused automated resume analyzer.",
    detailedDescription: "ResumeIQ is a robust automated resume analyzer that extracts structured information from unstructured PDF and DOCX resumes. It runs entirely locally, ensuring data privacy by not relying on external APIs. It utilizes a custom semantic segmentation engine and a regex-compiled skill ontology.",
    category: "Software Engineering",
    technologies: ["Python", "pdfminer.six", "python-docx", "FastAPI", "Pydantic", "HTML/JS/CSS"],
    features: [
      "Local-first document processing (no data egress)",
      "Dependency-light ingestion (pdfminer.six, python-docx)",
      "Custom semantic segmentation engine",
      "Intelligent Skill Extraction using an alias-aware ontology",
      "FastAPI backend with strict file validation",
      "Zero-build-step HTML/JS/CSS frontend"
    ],
    githubUrl: "https://github.com/kashish09121/resume-iq",
    architecture: "File Ingestion → Text Preprocessing → Semantic Segmentation → Information Extraction → API Endpoint",
    status: "Completed"
  },
  {
    title: "Redis in Java",
    slug: "redis-in-java",
    shortDescription: "Java implementation exploring Redis internals.",
    detailedDescription: "Information unavailable. This repository requires manual analysis or update as no implementation files were present at the time of documentation.",
    category: "Backend",
    technologies: ["Java"],
    features: [
      "Information unavailable"
    ],
    githubUrl: "https://github.com/kashish09121/redis-in-java",
    status: "Experimental"
  }
];
