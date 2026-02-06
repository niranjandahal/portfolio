import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Linkedin, Youtube, Github } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'niranjandahal76@gmail.com', href: 'mailto:niranjandahal76@gmail.com' },
  { icon: Phone, label: 'WhatsApp', value: '+977 9864117880', href: 'https://wa.me/9779864117880' },
  { icon: MapPin, label: 'Location', value: 'Kathmandu, Nepal', href: '#' },
];

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/niranjan-dahal-77463021a' },
  { icon: Youtube, label: 'YouTube', href: 'https://youtube.com/@fluttertip' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/niranjandahal' },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        '.contact-heading',
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

      // Contact info animation
      gsap.fromTo(
        '.contact-info-item',
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: '.contact-info',
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-32 bg-black overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="contact-heading text-center mb-16">
          <span className="text-indigo-400 text-sm font-medium uppercase tracking-wider">
            Contact
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            Let's <span className="text-gradient">Work Together</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's discuss how we can
            bring your ideas to life with Flutter.
          </p>
        </div>

        <div>
          {/* Contact Info */}
          <div className="contact-info space-y-8 max-w-2xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <p className="text-white/60 leading-relaxed">
                Whether you need a Flutter app developed, want to collaborate on a project,
                or just want to say hello, I'm always open to new opportunities and connections.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="contact-info-item group flex items-center gap-4 p-4 glass-card rounded-xl hover:bg-white/5 transition-colors"
                >
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-white/50">{item.label}</div>
                    <div className="font-medium">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-medium text-white/50 mb-4 uppercase tracking-wider">
                Follow Me
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-info-item w-12 h-12 glass-card rounded-lg flex items-center justify-center hover:bg-white/10 hover:-translate-y-1 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* YouTube CTA */}
            <div className="glass-card rounded-xl p-6 bg-gradient-to-br from-red-500/10 to-transparent border-red-500/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                  <Youtube className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Flutter Tips on YouTube</div>
                  <div className="text-sm text-white/60">150K+ views • Tutorials & Tips</div>
                </div>
              </div>
              <a
                href="https://youtube.com/@fluttertip"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block w-full py-2 bg-red-500/20 hover:bg-red-500/30 rounded-lg text-center text-red-400 font-medium transition-colors"
              >
                Subscribe to Channel
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
