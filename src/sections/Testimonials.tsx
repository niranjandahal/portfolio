import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight, Quote, Youtube, Award, Trophy, User } from 'lucide-react';
import { getAssetPath } from '@/lib/getAssetPath';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    name: 'NepFix Digital Team',
    role: 'Client - Home Service App',
    image: getAssetPath('/avatar-sarah.jpg'),
    quote:
      "Niranjan delivered an excellent Home Service App MVP that exceeded our expectations. His Flutter expertise and attention to detail made the project a huge success.",
  },
  {
    id: 2,
    name: 'Zegocloud Team',
    role: 'Sponsor - Live Streaming Projects',
    image: getAssetPath('/avatar-michael.jpg'),
    quote:
      "Working with Niranjan on our sponsored live streaming and video call apps was a pleasure. He quickly mastered the ZegoCloud SDK and delivered impressive MVPs.",
  },
  {
    id: 3,
    name: 'IOE Research Committee',
    role: 'Research Grant - CBDC Project',
    image: getAssetPath('/avatar-emily.jpg'),
    quote:
      "Niranjan's CBDC Digital Wallet project demonstrated exceptional understanding of blockchain technology. A well-deserved research grant recipient.",
  },
  {
    id: 4,
    name: 'Hackathon Judges',
    role: 'VR Tourism Nepal - Runner-Up',
    image: getAssetPath('/avatar-david.jpg'),
    quote:
      "Built an impressive VR tourism app in just 24 hours. The 360° immersive experience and technical implementation were outstanding for a hackathon project.",
  },
  {
    id: 5,
    name: 'Flutter Community',
    role: 'YouTube Subscribers',
    image: getAssetPath('/avatar-lisa.jpg'),
    quote:
      "Niranjan's Flutter Tips channel has been incredibly helpful. His Movie Hunt tutorial alone has helped thousands of developers learn Flutter with 150K+ views!",
  },
];

const achievements = [
  { icon: Award, label: 'Research Grants', value: '2' },
  { icon: Trophy, label: 'Hackathon Awards', value: '1' },
  { icon: Youtube, label: 'YouTube Views', value: '150K+' },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        '.testimonials-heading',
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

      // Carousel entrance
      gsap.fromTo(
        carouselRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: carouselRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Achievements animation
      gsap.fromTo(
        '.achievement-card',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: '.achievements',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0));
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative py-32 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="testimonials-heading text-center mb-16">
          <span className="text-indigo-400 text-sm font-medium uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4">
            What People <span className="text-gradient">Say</span>
          </h2>
        </div>

        {/* Achievements */}
        <div className="achievements flex flex-wrap justify-center gap-6 mb-12">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="achievement-card glass-card rounded-xl px-6 py-4 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                <achievement.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gradient">{achievement.value}</div>
                <div className="text-sm text-white/50">{achievement.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel */}
        <div ref={carouselRef} className="relative">
          {/* Main Card */}
          <div className="glass-card rounded-3xl p-8 md:p-12 relative">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center">
              <Quote className="w-6 h-6 text-white" />
            </div>

            {/* Content */}
            <div className="pt-4">
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-8 italic">
                "{activeTestimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-accent/20 border-2 border-indigo-500/30">
                  <User className="w-8 h-8 text-indigo-400" />
                </div>
                <div>
                  <div className="font-semibold text-lg">{activeTestimonial.name}</div>
                  <div className="text-white/50">{activeTestimonial.role}</div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="absolute bottom-8 right-8 flex gap-3">
              <button
                onClick={handlePrev}
                className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'w-8 bg-gradient-accent'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
