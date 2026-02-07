import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, X, ExternalLink, Github, Youtube, Award, Trophy } from 'lucide-react';
import { getAssetPath } from '@/lib/getAssetPath';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: 'Home Service App',
    category: 'Service Platform',
    description:
      'Dual-role Flutter application connecting customers with service providers. Built for NepFix Digital Services with features like real-time service booking, payment integration, and provider ratings.',
    image: getAssetPath('/project-homeservice.jpg'),
    tags: ['Flutter', 'Firebase', 'Payments', 'Realtime'],
    color: '#f59e0b',
    links: { preview: 'https://homeservice-eosin.vercel.app/', github: '#' },
    hasLivePreview: true,
    highlights: ['Dual Role System', 'Real-time Booking'],
  },
  {
    id: 2,
    title: 'BhagChal Game',
    category: 'Game Development',
    description:
      'Cross-platform real-time multiplayer Nepali traditional board game (Bagh Chal) using Flutter and Firebase. Features online multiplayer, real-time game state sync, and beautiful UI.',
    image: getAssetPath('/project-bhagchal.jpg'),
    tags: ['Flutter', 'Firebase', 'Realtime', 'Game'],
    color: '#8b5cf6',
    links: { preview: 'https://bhagchal.vercel.app/', github: '#' },
    hasLivePreview: true,
    highlights: ['Realtime Multiplayer', 'Nepali Traditional Game'],
  },
  {
    id: 2,
    title: 'Room Finder',
    category: 'Rental Platform',
    description:
      'Dual-role room finding and rental platform connecting landlords and tenants, eliminating agents with real-time booking system using Firebase streams.',
    image: getAssetPath('/project-roomfinder.jpg'),
    tags: ['Flutter', 'Firebase Streams', 'Maps', 'Booking'],
    color: '#3b82f6',
    links: { preview: 'https://kothakhoj.vercel.app/', github: '#' },
    hasLivePreview: true,
    highlights: ['Dual Role System', 'Realtime Booking'],
  },
  {
    id: 3,
    title: 'CBDC Digital Wallet',
    category: 'Blockchain / Fintech',
    description:
      'Research Grant Awarded Project - Final Year Project. Digital wallet mobile app based on blockchain technology using Hyperledger Fabric and ChainCode.',
    image: getAssetPath('/project-cbdc.jpg'),
    tags: ['Flutter', 'Node.js', 'Hyperledger', 'Blockchain'],
    color: '#10b981',
    links: { preview: 'https://cbdc-flutter-app.vercel.app/', github: '#' },
    hasLivePreview: true,
    highlights: ['Research Grant', 'Blockchain', 'CBDC'],
    award: 'Research Grant Awarded',
  },
  {
    id: 4,
    title: 'Movie Hunt',
    category: 'Entertainment',
    description:
      'Movie discovery platform showing trending movies/series with details and trailers. Featured in YouTube tutorial with 150K+ views.',
    image: getAssetPath('/project-moviehunt.jpg'),
    tags: ['Flutter', 'API Integration', 'TMDB', 'YouTube'],
    color: '#ef4444',
    links: { preview: 'https://moviehunt-flutter.vercel.app/', youtube: 'https://youtube.com/@fluttertip' },
    hasLivePreview: true,
    highlights: ['20K+ YouTube Views', 'Trending Movies API'],
  },
  {
    id: 5,
    title: 'Video Call App MVP',
    category: 'Communication',
    description:
      'Real-time video calling Flutter app integrated with ZegoCloud SDK. Sponsored collaboration project showcasing seamless peer-to-peer video communication.',
    image: getAssetPath('/project-videocall.jpg'),
    tags: ['Flutter', 'ZegoCloud', 'WebRTC', 'Realtime'],
    color: '#3b82f6',
    links: { preview: '', github: '', youtube: 'https://www.youtube.com/watch?v=Gcjw_9sgZ4c' },
    hasLivePreview: false,
    hasYoutubeOnly: true,
    highlights: ['Real-time Video', 'Peer-to-Peer'],
  },
  {
    id: 6,
    title: 'Disease Detection App',
    category: 'AI / Healthcare',
    description:
      'Research Grant Awarded Project. Identify plant diseases by phone camera using hybrid machine learning model (ResNet50 + VGG16).',
    image: getAssetPath('/project-diseasedetection.jpg'),
    tags: ['Flutter', 'Flask', 'ML', 'ResNet50', 'VGG16'],
    color: '#22c55e',
    links: { preview: '', github: 'https://github.com/niranjandahal/diseasedetection' },
    hasLivePreview: false,
    highlights: ['Hybrid ML Model', 'Image Classification'],
    award: 'Research Grant Awarded',
  },
  {
    id: 6,
    title: 'VR Tourism Nepal',
    category: 'Virtual Reality',
    description:
      'Built in 24-hour hackathon. Tourists can explore Nepal tourist spots in immersive 360° view with physical VR headset support.',
    image: getAssetPath('/project-vrtourism.jpg'),
    tags: ['Flutter', 'VR', '360° View', 'Tourism'],
    color: '#06b6d4',
    links: { preview: '', github: 'https://github.com/niranjandahal/VR_Application_Flutter' },
    hasLivePreview: false,
    highlights: ['24hr Hackathon', '360° VR Experience'],
    award: 'Hackathon Runner-Up',
  },
];

const otherProjects = [
  { name: 'Quiz App', desc: 'Interactive learning platform' },
  { name: 'E-commerce App', desc: 'Online shopping solution' },
  { name: 'Food Order App', desc: 'Restaurant ordering system' },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        '.projects-heading',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Grid cards stagger animation
      const cards = gridRef.current?.querySelectorAll('.project-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 80, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-32 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="projects-heading text-center mb-16">
          <span className="text-indigo-400 text-sm font-medium uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            A selection of my notable work  
          </p>
        </div>

        {/* Projects Grid */}
        <div
          ref={gridRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative glass-card rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-500 hover:glow-accent">
                {/* Award Badge */}
                {project.award && (
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 bg-gradient-accent rounded-full text-xs font-medium">
                    {project.award.includes('Hackathon') ? <Trophy className="w-3 h-3" /> : <Award className="w-3 h-3" />}
                    {project.award}
                  </div>
                )}

                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    {/* Category Tag */}
                    <span
                      className="inline-flex w-fit px-3 py-1 rounded-full text-xs font-medium mb-3 backdrop-blur-sm"
                      style={{ backgroundColor: `${project.color}40`, color: project.color }}
                    >
                      {project.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-gradient transition-all duration-300">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-white/70 mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-white/10 rounded text-xs text-white/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* View Button */}
                    <div className="inline-flex items-center gap-2 text-indigo-400 font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      View Details
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Border Glow */}
                <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-indigo-500/30 transition-colors duration-300 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-center mb-8 text-white/80">
            Other Projects
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {otherProjects.map((proj, index) => (
              <div
                key={index}
                className="px-5 py-3 glass-card rounded-xl text-sm text-white/70 hover:bg-white/10 transition-colors"
              >
                <span className="font-medium text-white">{proj.name}</span>
                {proj.desc && (
                  <span className="text-white/50"> • {proj.desc}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedProject(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" />

          {/* Modal Content */}
          <div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-auto glass-card rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 glass-card rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid md:grid-cols-2">
              {/* Image */}
              <div className="relative aspect-square md:aspect-auto">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden" />
                
                {/* Award Badge on Image */}
                {selectedProject.award && (
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-4 py-2 bg-gradient-accent rounded-full text-sm font-medium">
                    {selectedProject.award.includes('Hackathon') ? <Trophy className="w-4 h-4" /> : <Award className="w-4 h-4" />}
                    {selectedProject.award}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-8 space-y-6">
                {/* Category */}
                <span
                  className="inline-flex px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    backgroundColor: `${selectedProject.color}30`,
                    color: selectedProject.color,
                  }}
                >
                  {selectedProject.category}
                </span>

                {/* Title */}
                <h3 className="text-3xl font-bold">{selectedProject.title}</h3>

                {/* Description */}
                <p className="text-white/70 leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Highlights */}
                <div>
                  <h4 className="text-sm font-medium text-white/50 mb-3 uppercase tracking-wider">
                    Key Features
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-3 py-1.5 glass-card rounded-lg text-sm text-white/80"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <h4 className="text-sm font-medium text-white/50 mb-3 uppercase tracking-wider">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 glass-card rounded-lg text-sm text-white/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4 pt-4 flex-col">
                  {selectedProject.hasYoutubeOnly ? (
                    <a
                      href={selectedProject.links.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 bg-gradient-accent rounded-xl font-semibold text-white flex items-center justify-center gap-2 hover:glow-accent-strong transition-all"
                    >
                      <Youtube className="w-4 h-4 text-red-500" />
                      Watch on YouTube
                    </a>
                  ) : selectedProject.hasLivePreview ? (
                    <a
                      href={selectedProject.links.preview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 bg-gradient-accent rounded-xl font-semibold text-white flex items-center justify-center gap-2 hover:glow-accent-strong transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Preview
                    </a>
                  ) : (
                    <a
                      href={selectedProject.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 bg-gradient-accent rounded-xl font-semibold text-white flex items-center justify-center gap-2 hover:glow-accent-strong transition-all"
                    >
                      <Github className="w-4 h-4" />
                      View on GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
