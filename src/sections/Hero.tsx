import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, ChevronDown, Youtube, Github, Linkedin } from 'lucide-react';
import { getAssetPath } from '@/lib/getAssetPath';

gsap.registerPlugin(ScrollTrigger);

const projectImages = [
  { src: getAssetPath('/project-bhagchal.jpg'), alt: 'BhagChal Game', color: 'rgba(99, 102, 241, 0.3)' },
  { src: getAssetPath('/project-roomfinder.jpg'), alt: 'Room Finder', color: 'rgba(59, 130, 246, 0.3)' },
  { src: getAssetPath('/project-cbdc.jpg'), alt: 'CBDC Wallet', color: 'rgba(168, 85, 247, 0.3)' },
  { src: getAssetPath('/project-homeservice.jpg'), alt: 'Home Service', color: 'rgba(245, 158, 11, 0.3)' },
  { src: getAssetPath('/project-moviehunt.jpg'), alt: 'Movie Hunt', color: 'rgba(239, 68, 68, 0.3)' },
  { src: getAssetPath('/project-diseasedetection.jpg'), alt: 'Disease Detection', color: 'rgba(34, 197, 94, 0.3)' },
  { src: getAssetPath('/project-vrtourism.jpg'), alt: 'VR Tourism', color: 'rgba(6, 182, 212, 0.3)' },
];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const phone1Ref = useRef<HTMLDivElement>(null);
  const phone2Ref = useRef<HTMLDivElement>(null);
  const orbit1Ref = useRef<HTMLDivElement>(null);
  const orbit2Ref = useRef<HTMLDivElement>(null);
  const [currentProject, setCurrentProject] = useState(0);

  useEffect(() => {
    // Project carousel rotation every 3 seconds
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projectImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animations
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

      // Headline word reveal
      const words = headlineRef.current?.querySelectorAll('.word');
      if (words) {
        tl.fromTo(
          words,
          { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
          { clipPath: 'inset(0 0% 0 0)', opacity: 1, duration: 0.8, stagger: 0.1 },
          0.4
        );
      }

      // Subheadline blur in
      tl.fromTo(
        subheadlineRef.current,
        { filter: 'blur(10px)', opacity: 0 },
        { filter: 'blur(0px)', opacity: 1, duration: 0.6 },
        0.9
      );

      // CTA button
      tl.fromTo(
        ctaRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: 'elastic.out(1, 0.5)' },
        1.1
      );

      // Phone mockups orbit entrance - slow elegant blend animation
      tl.fromTo(
        phone1Ref.current,
        { opacity: 0, scale: 0.8, filter: 'blur(20px)' },
        { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1.5, ease: 'power2.out' },
        0.6
      );

      tl.fromTo(
        phone2Ref.current,
        { opacity: 0, scale: 0.8, filter: 'blur(20px)', x: 300, rotate: 30 },
        { opacity: 1, scale: 1, filter: 'blur(0px)', x: 0, rotate: 15, duration: 2, ease: 'power2.out' },
        0.9
      );

      // Orbital rings
      tl.fromTo(
        [orbit1Ref.current, orbit2Ref.current],
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5 },
        1
      );

      // Scroll-triggered parallax
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.to(headlineRef.current, { y: -100 * progress, duration: 0 });
          gsap.to(subheadlineRef.current, { y: -150 * progress, duration: 0 });
          gsap.to(phone1Ref.current, { rotate: -15 * progress, y: -50 * progress, duration: 0 });
          gsap.to(phone2Ref.current, { rotate: 15 + 15 * progress, y: -80 * progress, duration: 0 });
          gsap.to([orbit1Ref.current, orbit2Ref.current], {
            scale: 1 + 0.3 * progress,
            opacity: 1 - 0.7 * progress,
            duration: 0,
          });
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-black"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              'radial-gradient(ellipse at 30% 20%, rgba(99, 102, 241, 0.3) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(168, 85, 247, 0.2) 0%, transparent 50%)',
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-white/70">Available for new projects</span>
          </div>

          <h1
            ref={headlineRef}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
          >
            <span className="word inline-block">Building</span>{' '}
            <span className="word inline-block text-gradient">Flutter</span>{' '}
            <span className="word inline-block">Apps</span>{' '}
            <span className="word inline-block">That</span>{' '}
            <span className="word inline-block text-gradient">Matter</span>
          </h1>

          <p
            ref={subheadlineRef}
            className="text-lg sm:text-xl text-white/60 max-w-xl leading-relaxed"
          >
            I'm Niranjan Dahal, a Flutter developer from Nepal creating cross-platform 
            mobile experiences.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              ref={ctaRef}
              href="#projects"
              onClick={handleCtaClick}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-accent rounded-full text-lg font-semibold text-white hover:glow-accent-strong transition-all duration-300 hover:scale-105"
            >
              View My Work
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-3 px-8 py-4 glass-card rounded-full text-lg font-semibold text-white hover:bg-white/5 transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com/niranjandahal"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 glass-card rounded-xl flex items-center justify-center hover:bg-white/10 hover:-translate-y-1 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/niranjan-dahal-77463021a"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 glass-card rounded-xl flex items-center justify-center hover:bg-white/10 hover:-translate-y-1 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://youtube.com/@fluttertip"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 glass-card rounded-xl flex items-center justify-center hover:bg-white/10 hover:-translate-y-1 transition-all"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 pt-8">
            <div>
              <div className="text-3xl font-bold text-gradient">10+</div>
              <div className="text-sm text-white/50">Projects Built</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient">2</div>
              <div className="text-sm text-white/50">Research Grants</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient">150K+</div>
              <div className="text-sm text-white/50">YouTube Views</div>
            </div>
          </div>
        </div>

        {/* Right Content - Phone Mockups */}
        <div className="relative hidden lg:block h-[900px]">
          {/* Orbital Rings */}
          <div
            ref={orbit1Ref}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/5 rounded-full animate-spin-slow"
          />
          <div
            ref={orbit2Ref}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/10 rounded-full animate-spin-slower"
          />

          {/* Phone 1 - Main Carousel - Centered */}
          <div
            ref={phone1Ref}
            className="absolute top-[30%] left-1/2 -translate-x-1/2 z-30 animate-float"
            style={{ transform: 'translate(-60%, -65%) !important' }}
          >
            <div className="relative w-64 h-auto transition-opacity duration-700">
              <img
                key={currentProject}
                src={projectImages[currentProject].src}
                alt={projectImages[currentProject].alt}
                className="w-64 h-auto drop-shadow-2xl rounded-3xl hover:scale-105 transition-all duration-700"
                style={{ filter: `drop-shadow(0 25px 50px ${projectImages[currentProject].color})` }}
              />
            </div>
          </div>

          {/* Phone 2 - Secondary Project - Centered and offset */}
          <div
            ref={phone2Ref}
            className="absolute top-[30%] left-1/2 z-20 animate-float-delayed"
            style={{ transform: 'translate(-20%, -60%) rotate(15deg) !important' }}
          >
            <div className="relative w-56 h-auto transition-opacity duration-700">
              <img
                key={`secondary-${currentProject}`}
                src={projectImages[(currentProject + 1) % projectImages.length].src}
                alt={projectImages[(currentProject + 1) % projectImages.length].alt}
                className="w-56 h-auto drop-shadow-2xl rounded-3xl hover:scale-105 transition-all duration-700"
                style={{ filter: `drop-shadow(0 20px 40px ${projectImages[(currentProject + 1) % projectImages.length].color})` }}
              />
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 right-20 w-12 h-12 bg-indigo-500/20 rounded-lg backdrop-blur-sm animate-float" />
          <div className="absolute bottom-32 left-20 w-8 h-8 bg-purple-500/20 rounded-full backdrop-blur-sm animate-float-delayed" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </div>
    </section>
  );
}