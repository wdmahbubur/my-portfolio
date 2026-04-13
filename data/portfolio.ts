export interface Skill {
  name: string;
  level: 'Expert' | 'Advanced' | 'Intermediate';
  icon?: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  location?: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  duration: string;
  location?: string;
  details?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  image?: string;
  technologies: string[];
  challenges: string[];
  improvements: string[];
  link?: string;
  github?: string;
  featured: boolean;
}

export const portfolioData = {
  personal: {
    name: 'Md Mahbubur Rahman',
    title: 'Senior Software Developer | AI & Automation',
    designation: 'Senior Software Developer',
    bio: 'I started my programming journey during my diploma in Computer Technology, where I was first introduced to web development and problem-solving through code. What began as curiosity quickly turned into passion as I started building real-world applications and exploring how software can solve everyday challenges. Over time, I transitioned into full-stack development, working with different technologies and gaining hands-on experience in building scalable systems, automation tools, and data-driven platforms. \n\n I enjoy working on projects that involve system design, backend architecture, and performance optimization, especially where I can build something impactful from scratch. Recently, I’ve been focusing more on AI integration, automation, and data processing systems, which I find both challenging and exciting.',
    personalBio: 'Beyond coding, I like to keep my life balanced. I enjoy learning new technologies, exploring productivity systems, and thinking about innovative ideas. In my free time, I also like watching tech content, improving my workflow, and occasionally playing games or spending time with friends.',
    email: 'mahbubur.rahman0407@gmail.com',
    phone: '+88 01854097990',
    location: 'Dhaka, Bangladesh',
    profileImage: '/images/profile.jpg',
    resume: 'https://drive.google.com/uc?export=download&id=1T2UGG6nRvwmf_R4J60dXgH-i0f9pfknL',
  },

  socials: {
    github: 'https://github.com/wdmahbubur',
    linkedin: 'https://linkedin.com/in/mrrohanc',
    email: 'mahbubur.rahman0407@gmail.com',
    whatsapp: 'https://wa.me/8801854097990',
  },

  skills: [
    {
      category: 'Frontend Development',
      skills: [
        { name: 'React.js', level: 'Expert' },
        { name: 'Next.js', level: 'Expert' },
        { name: 'TypeScript', level: 'Advanced' },
        { name: 'Angular.js', level: 'Expert' },
        { name: 'Tailwind CSS', level: 'Expert' },
        { name: 'JavaScript (ES6+)', level: 'Expert' },
        { name: 'Redux & Context API', level: 'Advanced' },
        { name: 'Material-UI & shadcn/ui', level: 'Advanced' },
      ],
    },
    {
      category: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 'Expert' },
        { name: 'Express.js', level: 'Expert' },
        { name: 'SQL', level: 'Expert' },
        { name: 'MongoDB', level: 'Advanced' },
        { name: 'PostgreSQL', level: 'Advanced' },
        { name: 'RESTful APIs', level: 'Expert' },
        { name: 'GraphQL', level: 'Intermediate' },
        { name: 'Mongoose & Sequelize', level: 'Advanced' },
      ],
    },
    {
      category: 'DevOps & Tools',
      skills: [
        { name: 'Azure Cloud', level: 'Advanced' },
        { name: 'Docker & Kubernetes', level: 'Intermediate' },
        { name: 'Git & GitHub', level: 'Expert' },
        { name: 'CI/CD Pipelines', level: 'Advanced' },
        { name: 'Webpack & Vite', level: 'Intermediate' },
        { name: 'Linux/Unix', level: 'Advanced' },
      ],
    },
    {
      category: 'AI & Automation',
      skills: [
        { name: 'OpenAI API Integration', level: 'Advanced' },
        { name: 'Prompt Engineering', level: 'Advanced' },
        { name: 'Automation Scripting', level: 'Advanced' },
        { name: 'n8n', level: 'Advanced' },
        { name: 'Python Basics', level: 'Intermediate' },
      ],
    },
  ] as SkillCategory[],

  experience: [
    {
      id: '1',
      company: 'Loosely Coupled Technologies',
      position: 'Senior Software Developer',
      duration: 'Jan 2023 - Present',
      location: 'Dhaka, Bangladesh',
      description:
        'Leading the development of enterprise-scale web applications using modern technologies. Architecting scalable solutions and mentoring a team of 3+ junior developers.',
      achievements: [
        'Led a team of 3–5 developers to deliver 10+ features/month, improving development velocity by 30%',
        'Designed and built scalable full-stack applications (Node.js, React, MS SQL, Azure) serving 5K+ active users.',
        'Developed data-driven systems processing 50K+ records/day, improving reporting efficiency by 40%.',
        'Integrated 6+ third-party APIs (Facebook Graph API, Google Cloud, courier services), reducing manual operations by 35%.',
        'Implemented CI/CD pipelines, reducing deployment time by 40% and minimizing release errors.',
        'Built hybrid mobile integrations (Android WebView, JS Bridge, Bluetooth POS), enabling 1K+ daily mobile interactions.',
      ],
      technologies: ['Angular.js', 'React', 'Next.js', 'Node.js', 'MS SQL', 'TypeScript', 'Tailwind CSS', 'Azure', 'Git', 'GitHub', 'CI/CD Pipelines', 'Webpack & Vite', 'Linux/Unix'],
    },
    {
      id: '2',
      company: 'LinkedSage Limited',
      position: 'MERN Stack Developer',
      duration: 'Aug 2022 - Dec 2022',
      location: 'Dhaka, Bangladesh',
      description:
        'Developed and maintained multiple client projects using MERN stack with focus on performance optimization and user experience.',
      achievements: [
        'Developed and deployed 8+ new features for production web applications using MERN stack.',
        'Maintained ERP and admin systems used by 100+ users, ensuring high availability.',
        'Reduced frontend bundle size by 45% through code optimization',
        'Integrated 3+ third-party APIs and reduced bug resolution time by 25%.',
      ],
      technologies: ['React', 'Express', 'MongoDB', 'JavaScript', 'Linode', 'Git', 'GitHub'],
    },
    {
      id: '3',
      company: 'DS Legends Pte. Ltd.',
      position: 'MERN Stack Developer',
      duration: 'Feb 2022 - Jul 2022',
      location: 'Singapore',
      description:
        'Contributed to the development of a SaaS platform for project management with focus on frontend development.',
      achievements: [
        'Migrated a Laravel-based system to MERN stack, improving performance by 30%.',
        'Integrated blockchain features into React applications, enhancing system capabilities.',
        'Developed an NFT marketplace, supporting end-to-end user transactions.',
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'JavaScript', 'Laravel', 'Git', 'GitHub'],
    },
  ] as Experience[],

  education: [
    {
      id: '1',
      institution: 'Southeast University',
      degree: 'Bachelor of Science',
      field: 'Computer Science and Engineering',
      duration: '2022 - Present',
      location: 'Dhaka, Bangladesh',
      details: 'Graduated with 3.8/4.0 GPA, completing advanced courses in Data Structures, Algorithms, and Web Development.',
    },
    {
      id: '2',
      institution: 'Comilla Private Polytechnic Institute',
      degree: 'Diploma in Engineering',
      field: 'Computer Technology',
      duration: '2017 - 2022',
      location: 'Cumilla, Bangladesh',
      details: 'Completed advanced courses in Data Structures, Algorithms, and Web Development.',
    },
  ] as Education[],

  projects: [
    {
      id: '1',
      title: 'Smart Inventory & Order Management System',
      shortDescription: 'A full-stack web application for managing products, orders, stock levels, and a restock queue.',
      description:
        'A comprehensive inventory management solution featuring real-time KPIs, concurrency-safe stock locking (SELECT FOR UPDATE), and automated restock queues. Built with a role-based access control system, it ensures atomic stock deductions during order creation and automatic restoration upon cancellation, providing a reliable experience for managing complex inventory workflows.',
      image: '/images/inventory-management.png',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'React', 'TypeScript', 'Tailwind CSS', 'TanStack Query', 'Zod', 'JWT', 'Recharts'],
      challenges: [
        'Implementing concurrency-safe stock locking using SELECT FOR UPDATE to prevent race conditions during high-volume ordering.',
        'Architecting a reliable order status state machine with atomic stock deduction and restoration.',
        'Developing a dynamic, priority-based restock queue using automated threshold calculations.',
        'Structuring a full-stack codebase with raw SQL transactions for maximum performance and reliability.',
      ],
      improvements: [
        'Implement real-time notifications via WebSockets for low-stock alerts and order updates.',
        'Add batch import/export functionality for products and orders via CSV/Excel.',
        'Integrate barcode/QR code scanning for faster inventory updates.',
        'Develop a dedicated mobile companion app for warehouse staff.',
      ],
      link: 'https://inventory-management-eap.vercel.app',
      github: 'https://github.com/wdmahbubur/smart-inventory-management-v2',
      featured: true,
    },
    // {
    //   id: '2',
    //   title: 'Real-Time Collaboration App',
    //   shortDescription: 'A web-based application enabling real-time document editing and team collaboration.',
    //   description:
    //     'Built a collaborative document editing platform similar to Google Docs, supporting real-time synchronization, user permissions, and version history. Handles concurrent user edits with conflict resolution.',
    //   image: '',
    //   technologies: ['React', 'Node.js', 'Socket.io', 'PostgreSQL', 'Redis', 'Docker'],
    //   challenges: [
    //     'Implementing real-time synchronization for multiple users',
    //     'Handling concurrent edits with conflict resolution',
    //     'Scaling to support thousands of concurrent users',
    //     'Ensuring data consistency and integrity',
    //   ],
    //   improvements: [
    //     'Add offline-first capabilities',
    //     'Implement AI-powered suggestions',
    //     'Add advanced analytics',
    //     'Create mobile applications',
    //   ],
    //   link: 'https://collab-app-demo.com',
    //   github: 'https://github.com/wdmahbubur/collab-app',
    //   featured: true,
    // },
    // {
    //   id: '3',
    //   title: 'E-Commerce Platform',
    //   shortDescription: 'A modern, full-featured e-commerce platform with admin dashboard and payment integration.',
    //   description:
    //     'Developed a complete e-commerce solution with product catalog, shopping cart, secure payment processing, order management, and an admin dashboard for store management. Integrated with Stripe for payments.',
    //   image: '',
    //   technologies: ['React', 'Express', 'MongoDB', 'Stripe API', 'JWT', 'AWS S3'],
    //   challenges: [
    //     'Integrating secure payment processing',
    //     'Managing inventory in real-time',
    //     'Optimizing product search and filtering',
    //     'Handling high traffic during sales',
    //   ],
    //   improvements: [
    //     'Implement AI recommendations',
    //     'Add mobile app',
    //     'Create subscription model',
    //     'Add advanced analytics',
    //   ],
    //   link: 'https://ecommerce-demo.com',
    //   github: 'https://github.com/wdmahbubur/ecommerce-platform',
    //   featured: true,
    // },
  ] as Project[],
};
