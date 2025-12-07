import React, { useState, useEffect } from 'react';
import { CameraLens } from './components/CameraLens';
import { SectionHeading } from './components/SectionHeading';
import { ParallaxFloatingItems } from './components/ParallaxFloatingItems';
import { 
  Video, 
  Palette, 
  Smartphone, 
  CheckCircle2, 
  Zap, 
  Users, 
  TrendingUp, 
  Instagram, 
  Mail, 
  Phone, 
  Menu, 
  X,
  ArrowRight,
  Play,
  Aperture
} from 'lucide-react';
import { ServiceItem, ReasonItem } from './types';

// Data Definitions
const services: ServiceItem[] = [
  {
    id: 'video',
    title: 'Video Production',
    description: 'Cinematic storytelling that captures attention.',
    icon: Video,
    features: ['Promotional Videos', 'Product & Service Shoots', 'Corporate Videos', 'Reels & Shorts']
  },
  {
    id: 'content',
    title: 'Creative Content',
    description: 'Scroll-stopping visuals for the modern feed.',
    icon: Zap,
    features: ['Ad Creatives', 'Short & Long-form', 'Branded Storytelling', 'Visual Effects']
  },
  {
    id: 'brand',
    title: 'Brand Identity',
    description: 'Defining who you are with visual strategy.',
    icon: Palette,
    features: ['Brand Storytelling', 'Moodboards', 'Visual Identity', 'Creative Direction']
  },
  {
    id: 'social',
    title: 'Digital & Social',
    description: 'Strategic planning for maximum engagement.',
    icon: Smartphone,
    features: ['Content Strategy', 'Content Planning', 'Digital Assets', 'Trend Analysis']
  }
];

const reasons: ReasonItem[] = [
  {
    id: 'quality',
    title: 'High-Quality Output',
    description: 'Every video, photo, or design is crafted with precision and cinematic quality.',
    icon: Video
  },
  {
    id: 'strategy',
    title: 'Strategy + Creativity',
    description: 'We build visuals that connect, convert, and communicate effectively.',
    icon: TrendingUp
  },
  {
    id: 'client',
    title: 'Client-Focused',
    description: 'Your brand vision becomes our mission. We deliver what aligns with your goals.',
    icon: Users
  },
  {
    id: 'modern',
    title: 'Trend-Driven',
    description: 'Everything is built to fit today’s fast-moving digital world.',
    icon: Zap
  }
];

const AdmoxLogo = () => (
  <svg viewBox="0 0 100 110" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Yellow Part - Right Leg and Top Arch */}
    <path d="M 45 20 L 62 5 L 90 95 L 70 95 L 56 40 Z" fill="#FDC500" />
    
    {/* Green Part - Left Leg */}
    <path d="M 15 95 L 45 20 L 56 40 L 32 105 Z" fill="#006B3F" />
    
    {/* Text on Green Leg */}
    <g transform="translate(30, 98) rotate(-68)">
       <text x="0" y="0" fontSize="10" fontWeight="900" fill="white" fontFamily="sans-serif" style={{textShadow: '0px 1px 2px rgba(0,0,0,0.3)'}}>ADMOX</text>
       <text x="0.2" y="5" fontSize="4" fontWeight="700" fill="white" fontFamily="sans-serif" letterSpacing="0.8" opacity="0.95">MEDIA</text>
    </g>
  </svg>
);

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    // Calculate position relative to center of screen
    const x = e.clientX - window.innerWidth / 2;
    const y = e.clientY - window.innerHeight / 2;
    setMousePos({ x, y });
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-admox-yellow selection:text-black overflow-x-hidden">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-3 shadow-lg border-b border-white/10' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollToSection('hero')}>
            {/* Logo Mark */}
            <div className="w-12 h-12 relative group-hover:scale-105 transition-transform duration-300">
               <AdmoxLogo />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-display font-bold text-white tracking-wide leading-none">
                ADMOX
              </span>
              <span className="text-xs font-bold text-admox-green tracking-[0.2em] leading-none">
                MEDIA
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['Services', 'Why Us', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className="text-gray-300 hover:text-admox-yellow transition-colors text-sm font-semibold uppercase tracking-wider"
              >
                {item}
              </button>
            ))}
            <a 
              href="https://www.instagram.com/admox.media?igsh=MXV5emtmMWdzczhwaw==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-admox-green hover:bg-green-700 text-white px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105 flex items-center gap-2"
            >
              <Instagram size={18} />
              <span>Follow Us</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black border-b border-white/10 p-6 flex flex-col space-y-4 shadow-2xl">
             {['Services', 'Why Us', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className="text-left text-white hover:text-admox-yellow text-lg font-semibold"
              >
                {item}
              </button>
            ))}
             <a 
              href="https://www.instagram.com/admox.media?igsh=MXV5emtmMWdzczhwaw==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-admox-yellow font-bold flex items-center gap-2"
            >
              <Instagram size={20} /> Instagram
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section 
        id="hero" 
        className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-90"></div>
          {/* Subtle Grid */}
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.2 }}></div>
          
          {/* Camera Viewfinder Corners Overlay */}
          <div className="absolute top-24 left-6 w-16 h-16 border-l-2 border-t-2 border-white/20 rounded-tl-3xl pointer-events-none z-10"></div>
          <div className="absolute top-24 right-6 w-16 h-16 border-r-2 border-t-2 border-white/20 rounded-tr-3xl pointer-events-none z-10"></div>
          <div className="absolute bottom-6 left-6 w-16 h-16 border-l-2 border-b-2 border-white/20 rounded-bl-3xl pointer-events-none z-10"></div>
          <div className="absolute bottom-6 right-6 w-16 h-16 border-r-2 border-b-2 border-white/20 rounded-br-3xl pointer-events-none z-10"></div>
          
          {/* Center Crosshair */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 pointer-events-none opacity-20">
             <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white"></div>
             <div className="absolute left-1/2 top-0 h-full w-[1px] bg-white"></div>
          </div>
        </div>

        {/* Floating Parallax Elements (New) */}
        <ParallaxFloatingItems x={mousePos.x} y={mousePos.y} />

        <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse shadow-[0_0_10px_red]"></span>
              <span className="text-xs font-bold text-gray-300 uppercase tracking-widest">REC • 00:00:01</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-extrabold text-white leading-tight">
              Transforming Ideas Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-admox-green to-admox-yellow">High-Impact</span> Visuals
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto md:mx-0 leading-relaxed">
              Admox Media helps businesses communicate with clarity, style, and purpose. We don't just make pretty visuals — we build stories that convert.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <button onClick={() => scrollToSection('contact')} className="bg-admox-yellow hover:bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-[0_0_20px_rgba(253,197,0,0.3)] flex items-center justify-center gap-2">
                <Aperture size={20} />
                Start Your Project
              </button>
              <button onClick={() => scrollToSection('services')} className="border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2">
                <Play size={20} fill="currentColor" />
                Our Services
              </button>
            </div>
          </div>

          <div 
            className="flex justify-center items-center relative transition-transform duration-75 ease-out"
            style={{ transform: `translate(${mousePos.x * -0.01}px, ${mousePos.y * -0.01}px)` }}
          >
            {/* The 3D Camera Element */}
            <CameraLens />
          </div>
        </div>
      </section>

      {/* Brand Personality Ticker */}
      <div className="bg-admox-green py-4 overflow-hidden whitespace-nowrap relative z-20 shadow-xl border-y border-white/10">
        <div className="inline-block animate-[scroll_20s_linear_infinite]">
          {[...Array(2)].map((_, i) => (
             <span key={i} className="text-black font-display font-black text-2xl uppercase tracking-widest mx-4">
               Creative • Bold • Detail-Oriented • Story-Driven • Reliable • Admox Media • 
             </span>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-24 bg-black relative">
        <div className="container mx-auto px-6">
          <SectionHeading title="What We Do" subtitle="Our Expertise" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div key={service.id} className="group bg-gray-900/50 border border-white/5 p-8 rounded-2xl hover:bg-gray-800 transition-all hover:-translate-y-2 duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                   <Aperture size={60} className="text-admox-green" />
                </div>
                <div className="w-14 h-14 bg-gradient-to-br from-admox-green to-emerald-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(0,107,63,0.3)]">
                  <service.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-display">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-6 min-h-[40px]">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 bg-admox-yellow rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-admox-green/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-admox-yellow/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading title="Why Brands Choose Admox" subtitle="The Difference" align="left" />
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                We believe in the power of visual storytelling. Our approach combines data-driven strategy with high-end creativity to ensure your message isn't just seen, but felt.
              </p>
              
              <div className="space-y-6">
                {reasons.map((reason) => (
                  <div key={reason.id} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-admox-green/50 transition-colors">
                    <div className="mt-1 min-w-[40px] h-10 bg-black rounded-lg flex items-center justify-center text-admox-yellow border border-white/10">
                      <reason.icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">{reason.title}</h4>
                      <p className="text-gray-400 text-sm">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Side - Abstract Dashboard/Portfolio layout */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 translate-y-12">
                   <div className="bg-gray-800 rounded-2xl h-64 w-full overflow-hidden relative group">
                      <img src="https://picsum.photos/400/600?random=1" alt="Portfolio" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                        <span className="text-white font-bold">Brand Identity</span>
                      </div>
                   </div>
                   <div className="bg-gray-800 rounded-2xl h-48 w-full overflow-hidden relative group">
                      <img src="https://picsum.photos/400/400?random=2" alt="Portfolio" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                   </div>
                </div>
                <div className="space-y-4">
                   <div className="bg-gray-800 rounded-2xl h-48 w-full overflow-hidden relative group">
                      <img src="https://picsum.photos/400/400?random=3" alt="Portfolio" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                   </div>
                   <div className="bg-gray-800 rounded-2xl h-64 w-full overflow-hidden relative group">
                      <img src="https://picsum.photos/400/600?random=4" alt="Portfolio" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                        <span className="text-white font-bold">Video Production</span>
                      </div>
                   </div>
                </div>
              </div>
              
              {/* Floating Quote Card */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-xl border border-admox-green p-6 rounded-2xl shadow-2xl w-3/4 text-center">
                <p className="text-white italic font-medium mb-3">"Your vision, our creativity — together, we create content that leaves an impact."</p>
                <div className="flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => <div key={i} className="w-2 h-2 rounded-full bg-admox-yellow"></div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Connect */}
      <section className="py-20 bg-admox-dark relative overflow-hidden">
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <Instagram size={48} className="text-admox-yellow mx-auto mb-6" />
          <h2 className="text-4xl font-display font-bold text-white mb-6">See Our Latest Work</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10">
            Follow us on Instagram for behind-the-scenes content, latest shoots, and design inspiration.
          </p>
          <a 
            href="https://www.instagram.com/admox.media?igsh=MXV5emtmMWdzczhwaw=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-purple-500/30"
          >
            <Instagram size={20} />
            @admox.media
          </a>
          
          {/* Mock Grid to simulate Instagram feel */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 opacity-70 hover:opacity-100 transition-opacity duration-500">
             {[5, 6, 7, 8].map((n) => (
               <div key={n} className="aspect-square bg-gray-800 rounded-lg overflow-hidden relative group cursor-pointer">
                 <img src={`https://picsum.photos/300/300?random=${n}`} alt="Insta" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <Instagram className="text-white" size={32} />
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black border-t border-white/10">
        <div className="container mx-auto px-6">
          <SectionHeading title="Let's Create Together" subtitle="Contact Us" />
          
          <div className="max-w-4xl mx-auto bg-gray-900 rounded-3xl p-8 md:p-12 border border-white/5 shadow-2xl relative overflow-hidden">
             {/* Decorative background glow */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-admox-green/20 blur-[100px] rounded-full pointer-events-none"></div>

             <div className="grid md:grid-cols-2 gap-12">
               <div className="space-y-8">
                 <h3 className="text-2xl font-bold text-white">Get in Touch</h3>
                 <p className="text-gray-400">Ready to elevate your brand? Drop us a message or give us a call.</p>
                 
                 <div className="space-y-6">
                   <div className="flex items-center gap-4 text-white group">
                     <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-admox-yellow group-hover:bg-admox-yellow group-hover:text-black transition-colors">
                       <Phone size={24} />
                     </div>
                     <div>
                       <p className="text-sm text-gray-400">Call Us</p>
                       <p className="font-bold text-lg">9335196258</p>
                     </div>
                   </div>
                   
                   <div className="flex items-center gap-4 text-white group">
                     <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-admox-yellow group-hover:bg-admox-yellow group-hover:text-black transition-colors">
                       <Mail size={24} />
                     </div>
                     <div>
                       <p className="text-sm text-gray-400">Email Us</p>
                       <p className="font-bold text-lg">admoxmedia@gmail.com</p>
                     </div>
                   </div>
                 </div>

                 <div className="pt-6">
                    <p className="text-gray-500 text-sm mb-4">CONNECT WITH US</p>
                    <div className="flex gap-4">
                      <a href="https://www.instagram.com/admox.media?igsh=MXV5emtmMWdzczhwaw==" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-admox-green flex items-center justify-center text-white transition-colors"><Instagram size={20}/></a>
                      <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center text-white transition-colors"><Users size={20}/></a>
                    </div>
                 </div>
               </div>

               {/* Simple Form */}
               <form className="space-y-4">
                 <div>
                   <label className="block text-gray-400 text-sm mb-2">Name</label>
                   <input type="text" className="w-full bg-black/50 border border-gray-700 rounded-lg p-3 text-white focus:border-admox-green focus:ring-1 focus:ring-admox-green outline-none transition-all" placeholder="Your Name" />
                 </div>
                 <div>
                   <label className="block text-gray-400 text-sm mb-2">Email</label>
                   <input type="email" className="w-full bg-black/50 border border-gray-700 rounded-lg p-3 text-white focus:border-admox-green focus:ring-1 focus:ring-admox-green outline-none transition-all" placeholder="your@email.com" />
                 </div>
                 <div>
                   <label className="block text-gray-400 text-sm mb-2">Message</label>
                   <textarea rows={4} className="w-full bg-black/50 border border-gray-700 rounded-lg p-3 text-white focus:border-admox-green focus:ring-1 focus:ring-admox-green outline-none transition-all" placeholder="Tell us about your project..."></textarea>
                 </div>
                 <button className="w-full bg-admox-green hover:bg-green-700 text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2 group">
                   Send Message <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                 </button>
               </form>
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-gray-900">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10">
               <AdmoxLogo />
             </div>
             <div className="text-left">
              <h4 className="text-2xl font-bold text-white leading-none">ADMOX <span className="text-admox-yellow">MEDIA</span></h4>
              <p className="text-gray-500 text-xs mt-1">© {new Date().getFullYear()} Admox Media. All rights reserved.</p>
            </div>
          </div>
          <div className="flex gap-8 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;