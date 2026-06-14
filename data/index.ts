export const navItems = [
  { name: 'About', link: '#about' },
  { name: 'Experience', link: '#experience' },
  { name: 'Projects', link: '#projects' },
  {
    name: 'Resume',
    link: 'https://drive.google.com/file/d/1VjbpFz5slgEU4_SG3ER7QmnddwVvQua-/view?usp=sharing',
  },
  { name: 'Contact', link: '#contact' },
];

export const gridItems = [
  {
    id: 1,
    title: 'My Career Snapshot',
    description: 'From concept to production — skills, experience, and impact.',
    link: 'https://drive.google.com/file/d/1VjbpFz5slgEU4_SG3ER7QmnddwVvQua-/view?usp=sharing',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-end',
    img: '',
    spareImg: '',
  },
  {
    id: 2,
    title: 'Scalable Production Systems',
    description: 'Designing and developing scalable, secure, and user-centric applications.',
    link: 'https://github.com/sameer2210',
    className: 'lg:col-span-3 md:col-span-3 md:row-span-2',
    imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
    titleClassName: 'justify-center md:justify-start lg:justify-center',
    img: '/b5.svg',
    spareImg: '/grid.svg',
  },
];

export const testimonials = [
  {
    quote:
      'Sameer is highly reliable and focused on delivering quality work. He understands requirements clearly, communicates well, and consistently meets deadlines. His technical skills combined with a positive attitude make him a valuable asset to any development team.',
    name: 'Varun Singh - varun@opticosolutions.com',
    title: 'Founder, Optico Solutions Pvt. Ltd.',
  },
  {
    quote:
      'Working with Sameer was smooth and efficient. He takes ownership of tasks, learns quickly, and always looks for the best possible solution. His problem-solving mindset and commitment to clean code really stand out.',
    name: 'Ajay Dixit - ajay.dixit@opticosolutions.com',
    title: 'Team Lead, Optico Solutions Pvt. Ltd.',
  },
  {
    quote:
      'Sameer is sincere, hardworking, and dependable. He approaches every task with dedication and a strong desire to improve. His ability to collaborate with the team and adapt to challenges makes him a trustworthy professional.',
    name: 'Anshu Panday',
    title: 'Team Lead, Sheryians Pvt. Ltd.',
  },
  {
    quote:
      'Sameer demonstrates strong coding expertise and sharp problem-solving abilities. He approaches technical challenges with a logical, analytical mindset and consistently delivers efficient, scalable solutions. His capability to debug complex issues and write clean, maintainable code makes him a reliable and technically proficient professional.',
    name: 'Ankesh Barahadiya - Ankeshbarahdiya05112002@gmail.com',
    title: 'Co-Founder, Aimvirtue Pvt. Ltd.',
  },
];

export const projects = [
  {
    id: 1,
    title: 'SpandaVidya AI',
    des: 'AI-powered Ayurvedic Healthcare platform featuring chat-based Ayurvedic consultation and PyTorch computer vision cataract detection. Engineered with a NestJS backend and React Native mobile app (Android & iOS).',
    img: '/project/SpandaVidya.png',
    iconLists: [
      '/icons/react.svg',
      '/icons/node.svg',
      '/icons/ts.svg',
      '/icons/mongo.svg',
      '/icons/aws.svg',
      '/icons/openai.svg',
      '/icons/tail.svg',
      '/icons/git.svg',
      '/icons/github.svg',
    ],
    link: 'https://spandavidyaai.com/',
  },
  {
    id: 2,
    title: 'CodeX',
    des: 'Real-time collaborative IDE with Monaco Editor, featuring live code sync, team presence, WebRTC audio/video calls, and Gemini AI-powered code reviews in shared rooms.',
    img: '/project/codex.png',
    iconLists: [
      '/icons/js.svg',
      '/icons/react.svg',
      '/icons/redux.svg',
      '/icons/fm.svg',
      '/icons/tail.svg',
      '/icons/node.svg',
      '/icons/express.svg',
      '/icons/mongo.svg',
      '/icons/webrtc.svg',
      '/icons/docker.svg',
      '/icons/git.svg',
      '/icons/github.svg',
    ],
    link: 'https://codex-psi-murex.vercel.app/',
  },
  {
    id: 3,
    title: 'FileHive',
    des: 'AES-256 encrypted cloud storage platform with nested folder management and Redis-powered caching. Containerized with Docker and deployed via GitHub Actions CI/CD.',
    img: '/project/filehive.png',
    iconLists: [
      '/icons/js.svg',
      '/icons/react.svg',
      '/icons/redux.svg',
      '/icons/fm.svg',
      '/icons/tail.svg',
      '/icons/node.svg',
      '/icons/express.svg',
      '/icons/mongo.svg',
      '/icons/Redis.svg',
      '/icons/cloudinary.svg',
      '/icons/docker.svg',
      '/icons/git.svg',
      '/icons/github.svg',
    ],
    link: 'https://filehive-drive.vercel.app',
  },
  {
    id: 4,
    title: 'Aviyukt NGO',
    des: 'Official NGO platform with Google OAuth, secure JWT sessions, and seamless Razorpay donation/membership payments. Features automated PDF receipts and Aadhaar verification.',
    img: '/project/AviyuktNgo.png',
    iconLists: [
      '/icons/js.svg',
      '/icons/react.svg',
      '/icons/vite.svg',
      '/icons/tail.svg',
      '/icons/node.svg',
      '/icons/express.svg',
      '/icons/mongo.svg',
      '/icons/postman.svg',
      '/icons/Razorpay.svg',
      '/icons/git.svg',
      '/icons/github.svg',
    ],
    link: 'https://aviyuktngo.org/',
  },
  {
    id: 5,
    title: 'ÉLITE',
    des: 'Modern full-stack e-commerce platform with smart filters, cart flow, and secure JWT authentication. Includes admin product management and scalable Redux architecture.',
    img: '/project/Elite.png',
    iconLists: [
      '/icons/js.svg',
      '/icons/react.svg',
      '/icons/vite.svg',
      '/icons/redux.svg',
      '/icons/fm.svg',
      '/icons/tail.svg',
      '/icons/node.svg',
      '/icons/express.svg',
      '/icons/mongo.svg',
      '/icons/git.svg',
      '/icons/github.svg',
    ],
    link: 'https://elite-jade.vercel.app/',
  },
  {
    id: 6,
    title: 'Eato',
    des: 'Delightful recipe web application to discover, create, and manage your favorite dishes with ease. Crafted with modern React tooling and smooth Framer Motion animations.',
    img: '/project/eato.png',
    iconLists: [
      '/icons/js.svg',
      '/icons/react.svg',
      '/icons/vite.svg',
      '/icons/redux.svg',
      '/icons/fm.svg',
      '/icons/tail.svg',
      '/icons/git.svg',
      '/icons/github.svg',
    ],
    link: 'https://recipe-create-pied.vercel.app/',
  },
];

export const appProjects = [
  {
    id: 1,
    title: 'SpandaVidya AI App',
    des: 'AI-powered Ayurvedic Healthcare platform featuring chat-based Ayurvedic consultation and computer vision cataract detection.',
    img: '/project/SpandaVidya.png',
    iconLists: [
      '/icons/react.svg',
      '/icons/ts.svg',
      '/icons/node.svg',
      '/icons/mongo.svg',
      '/icons/aws.svg',
      '/icons/git.svg',
      '/icons/github.svg',
    ],
    link: 'https://github.com/sameer2210/SpandaVidyaAi-App',
  },
  {
    id: 2,
    title: 'DigiScanner App',
    des: 'A powerful document scanning application. Capture, crop, and enhance documents seamlessly to digital format.',
    img: '/project/codex.png',
    iconLists: [
      '/icons/react.svg',
      '/icons/ts.svg',
      '/icons/git.svg',
      '/icons/github.svg',
    ],
    link: 'https://github.com/sameer2210/DigiScanner',
  },
];

export const workExperience = [
  {
    id: 1,
    title: 'Full Stack Developer | Optico Solutions Pvt. Ltd.',
    desc: 'Engineered scalable web and mobile applications utilizing the MERN stack and React Native. Architected secure authentication systems (JWT, OAuth 2.0, RBAC) and integrated resilient payment gateways (Razorpay). Managed end-to-end cloud infrastructure deployments across AWS, GCP, and Hostinger.',
    className: 'md:col-span-2',
    thumbnail: '/exp4.svg',
  },
  {
    id: 2,
    title: 'Software Developer Intern | Sheryians Pvt. Ltd.',
    desc: 'Spearheaded the backend optimization for HRECT, a SaaS recruitment CRM. Designed complex MongoDB aggregation pipelines and query indexing strategies, successfully reducing database query response times by 35% and streamlining automated interview workflows.',
    className: 'md:col-span-2',
    thumbnail: '/exp2.svg',
  },
  {
    id: 3,
    title: 'Freelance Software Engineer',
    desc: 'Delivered end-to-end web and Android mobile solutions for client projects, including a vehicle validation platform. Built responsive frontends in React and React Native, supported by robust Node.js REST APIs and customized admin dashboards.',
    className: 'md:col-span-2',
    thumbnail: '/exp3.svg',
  },
];

export const socialMedia = [
  {
    id: 1,
    img: '/icons/github.svg',
    href: 'https://github.com/sameer2210',
    name: 'GitHub',
  },
  {
    id: 2,
    img: '/icons/twit.svg',
    href: 'https://x.com/Sameer2210_',
    name: 'Twitter (X)',
  },
  {
    id: 3,
    img: '/icons/link.svg',
    href: 'https://www.linkedin.com/in/sameer-khan2210/',
    name: 'LinkedIn',
  },
  {
    id: 4,
    img: '/icons/insta.svg',
    href: 'https://www.instagram.com/isameer_22',
    name: 'Instagram',
  },
  {
    id: 5,
    img: '/icons/youtube.svg',
    href: 'https://www.youtube.com/channel/UCkJWIW5koQOLwPgdE25p6jg',
    name: 'YouTube',
  },
];
