import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Smartphone,
  Code2,
  Database,
  Brain,
  Video,
  Blocks,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Smartphone,
    title: 'Flutter App Development',
    description:
      'Cross-platform mobile apps for iOS and Android using Flutter. Clean architecture, state management with Provider/Bloc/GetX/Riverpod.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Database,
    title: 'Backend Integration',
    description:
      'Firebase, Supabase, Node.js backend integration. Real-time databases, authentication, cloud functions, and API development.',
    color: 'from-orange-500 to-yellow-500',
  },
  {
    icon: Brain,
    title: 'ML Integration',
    description:
      'Integrate machine learning models into mobile apps. Image classification, object detection, and AI-powered features.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Blocks,
    title: 'Blockchain Development',
    description:
      'Digital wallet apps, CBDC solutions using Hyperledger Fabric, ChainCode, and Web3 integration.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Video,
    title: 'Live Streaming Apps',
    description:
      'Real-time video calling and live streaming apps using ZegoCloud SDK, WebRTC, and streaming protocols.',
    color: 'from-red-500 to-rose-500',
  },
  {
    icon: Code2,
    title: 'Code Review & Consulting',
    description:
      'Flutter code review, architecture consultation, performance optimization, and best practices guidance.',
    color: 'from-indigo-500 to-violet-500',
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        '.services-heading',
        { y: 80, opacity: 0 },
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

      // Cards stagger animation
      const cards = cardsRef.current?.querySelectorAll('.service-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { scale: 0, rotate: -180, opacity: 0 },
          {
            scale: 1,
            rotate: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'elastic.out(1, 0.5)',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-32 bg-black overflow-hidden"
    >
      {/* Subtle Gradient Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="services-heading text-center mb-16">
          <span className="text-indigo-400 text-sm font-medium uppercase tracking-wider">
            What I Do
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            Services I <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            From concept to deployment, I provide end-to-end Flutter development services 
            tailored to your unique requirements.
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={cardsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group relative glass-card rounded-2xl p-8 hover:bg-white/5 transition-all duration-500 cursor-pointer"
              style={{ perspective: '800px' }}
            >
              {/* Hover Glow Effect */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
              >
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-gradient transition-all duration-300">
                {service.title}
              </h3>
              <p className="text-white/60 leading-relaxed">{service.description}</p>

              {/* Arrow Indicator */}
              <div className="mt-6 flex items-center gap-2 text-indigo-400 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                <span className="text-sm font-medium">Learn More</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>

              {/* Border Glow */}
              <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-indigo-500/30 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
