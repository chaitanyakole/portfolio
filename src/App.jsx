import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Briefcase, GraduationCap, Award, ChevronDown, Menu, X, Sparkles, Rocket, Zap, Terminal } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const skills = {
    'Web Development': ['HTML', 'CSS', 'TailwindCSS', 'RJSF'],
    'Programming Languages': ['JavaScript', 'TypeScript'],
    'JS Frameworks': ['React.js', 'Next.js', 'React Native'],
    'Backend & Tools': ['Node.js', 'PostgreSQL', 'REST APIs', 'WebRTC'],
    'Version Control': ['Git', 'GitHub', 'GitLab'],
    'Other': ['Keycloak', 'Socket.IO', 'Google Analytics']
  };

  const experience = [
    {
      title: 'Software Engineer',
      company: 'Tekdi Technologies Pvt Ltd',
      location: 'Maharashtra, India',
      period: '01/2023 – 05/2025',
      achievements: [
        'Developed user interfaces for Mobile/Desktop platforms using React, HTML & CSS, JavaScript',
        'Built Single Page Applications (SPAs) using React.js, improving user engagement',
        'Integrated RESTful Web Services and implemented RESTful APIs',
        'Utilized GitHub and GitLab for source code management',
        'Implemented React Router for smooth navigation',
        'Optimized DOM manipulation to increase page load speed'
      ]
    },
    {
      title: 'Associate Broadband',
      company: 'Gazon Communication India Limited',
      location: 'Maharashtra, India',
      period: '05/2021 – 04/2022',
      achievements: [
        'Installed and configured broadband equipment and services',
        'Audited networks using ping tests, traceroutes, and speed tests',
        'Troubleshot broadband service issues for clients',
        'Handled network fibers, Cat6 wires, and LAN cables',
        'Achieved 95% service uptime across residential and business clients'
      ]
    }
  ];

  const projects = [
    {
      title: 'Global CCTV Solutions',
      company: 'Personal Project',
      period: '2025 – Present',
      link: 'global-cctv-solutions.vercel.app',
      description: 'Full-stack e-commerce platform for CCTV products with advanced admin portal for managing inventory, quotations, and customer communications',
      features: [
        'Admin dashboard for product management (add, edit, delete)',
        'Review management system with approval workflow',
        'Automated quotation and AMC contract generation',
        'Direct WhatsApp & email integration for customer communication',
        'Real-time inventory tracking and order management',
        'Secure authentication and role-based access control'
      ],
      tech: ['React', 'Next.js', 'Node.js', 'MongoDB', 'TailwindCSS', 'WhatsApp API', 'Email API'],
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      title: 'AI-Powered Interview Assistant',
      company: 'Hackathon Project',
      period: '04/2025',
      description: 'Built an AI-driven interview platform enabling real-time video interviews with live monitoring features',
      features: [
        'Real-time video interviews with tab-switch detection',
        'Automated question generation using LLMs',
        'Confidence tracking and automated scoring',
        'Integrated WebRTC and Whisper.cpp for speech-to-text'
      ],
      tech: ['React', 'WebRTC', 'Python', 'Flask', 'Whisper.cpp', 'Ollama', 'Socket.IO'],
      gradient: 'from-violet-500 to-purple-600'
    },
    {
      title: 'ALL-SAAS',
      company: 'Tekdi Technologies Pvt Ltd',
      period: '10/2024 – 02/2025',
      link: 'all-saas-metabase.tekdinext.com',
      description: 'Assisted Language Learning Software As a Service platform',
      features: [
        'Transformed UI/UX wireframes into responsive code',
        'Developed and integrated REST/Web APIs',
        'Implemented Google Analytics',
        'Optimized database interactions with PostgreSQL'
      ],
      tech: ['Node.js', 'Next.js', 'Keycloak', 'PostgreSQL', 'Google Analytics'],
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Educate Girls',
      company: 'Tekdi Technologies Pvt Ltd',
      period: '03/2023 – 09/2024',
      link: 'pragatiapp.educategirls.ngo',
      description: 'Educational platform for empowering girls through technology',
      features: [
        'Built responsive web application',
        'Implemented real-time data synchronization',
        'Integrated authentication and authorization',
        'Optimized performance for mobile devices'
      ],
      tech: ['React', 'WebRTC', 'Python', 'Flask', 'Socket.IO'],
      gradient: 'from-pink-500 to-rose-600'
    }
  ];

  const education = [
    {
      degree: 'BE (Mechanical Engineering)',
      institution: 'Savitribai Phule Pune University',
      year: '2022',
      score: '8.70 CGPA'
    },
    {
      degree: 'XII (Maharashtra State Board)',
      institution: 'PCM Maharashtra State Board Wagholi',
      year: '2018',
      score: '69.80%'
    }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        <div 
          className="absolute w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-10 transition-all duration-1000 pointer-events-none"
          style={{ 
            left: `${mousePosition.x - 192}px`, 
            top: `${mousePosition.y - 192}px` 
          }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/80 backdrop-blur-xl shadow-lg shadow-blue-500/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent flex items-center gap-2">
              <Terminal className="text-blue-400" />
              <span>CK</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-1 bg-slate-800/50 backdrop-blur-sm rounded-full px-2 py-2 border border-slate-700/50">
              {['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize px-6 py-2 rounded-full transition-all duration-300 ${
                    activeSection === item 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/50' 
                      : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              className="md:hidden text-white p-2 hover:bg-slate-800 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-slate-800">
            <div className="px-4 py-4 space-y-2">
              {['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left px-6 py-3 capitalize rounded-xl transition-all ${
                    activeSection === item
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                      : 'hover:bg-slate-800 text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <div className="mb-8 space-y-6">
            <div className="relative w-40 h-40 mx-auto mb-8 group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-spin" style={{ animationDuration: '3s' }}></div>
              <div className="absolute inset-1 bg-slate-900 rounded-full"></div>
              <div className="absolute inset-2 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-5xl font-bold group-hover:scale-110 transition-transform duration-300">
                CK
              </div>
              <Sparkles className="absolute -top-2 -right-2 text-yellow-400 animate-pulse" size={24} />
            </div>

            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-blue-500/10 backdrop-blur-sm rounded-full border border-blue-500/20 mb-4">
                <span className="text-blue-400 flex items-center gap-2">
                  <Rocket size={16} className="animate-bounce" />
                  Available for opportunities
                </span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Chaitanay Kole
                </span>
              </h1>
              
              <div className="flex items-center justify-center gap-3 mb-6">
                <Zap className="text-yellow-400 animate-pulse" />
                <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  React.js Developer
                </h2>
                <Zap className="text-yellow-400 animate-pulse" />
              </div>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Transforming ideas into pixel-perfect, high-performance web experiences with cutting-edge technologies
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <a href="mailto:chaitanyajkole7777@gmail.com" 
                 className="group flex items-center gap-3 px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-800 transition-all">
                <Mail size={20} className="text-blue-400 group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline text-gray-300 group-hover:text-white">chaitanyajkole7777@gmail.com</span>
              </a>
              <a href="tel:8830173241" 
                 className="group flex items-center gap-3 px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-purple-500/50 hover:bg-slate-800 transition-all">
                <Phone size={20} className="text-purple-400 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300 group-hover:text-white">8830173241</span>
              </a>
              <div className="flex items-center gap-3 px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50">
                <MapPin size={20} className="text-pink-400" />
                <span className="text-gray-300">Pune, Maharashtra</span>
              </div>
            </div>

            <div className="flex justify-center gap-4 mb-12">
              <a href="https://github.com/chaitanyakole" target="_blank" rel="noopener noreferrer" 
                 className="group relative p-4 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all hover:scale-110 hover:-translate-y-1">
                <Github size={28} className="text-gray-300 group-hover:text-white transition-colors" />
                <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              <a href="https://linkedin.com/in/chaitanay-kole" target="_blank" rel="noopener noreferrer"
                 className="group relative p-4 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all hover:scale-110 hover:-translate-y-1">
                <Linkedin size={28} className="text-blue-400 group-hover:text-blue-300 transition-colors" />
                <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-105 flex items-center gap-2">
                View My Work
                <Rocket className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full font-semibold text-lg hover:bg-slate-800 hover:border-slate-600 transition-all hover:scale-105">
                Get In Touch
              </button>
            </div>
          </div>
          
          <button onClick={() => scrollToSection('about')} className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown size={40} className="text-blue-400" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 px-4">
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-500/10 backdrop-blur-sm rounded-full border border-blue-500/20 text-blue-400 mb-4">
              Introduction
            </span>
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-slate-900/90 backdrop-blur-xl p-12 rounded-3xl border border-slate-800 shadow-2xl">
              <p className="text-xl text-gray-300 leading-relaxed">
                A highly skilled <span className="text-blue-400 font-semibold">React.js Developer</span> with over <span className="text-purple-400 font-semibold">two years</span> of extensive experience in designing and developing 
                high-performance web applications. Proficient in building responsive and scalable user interfaces using 
                React.js, React Native, JavaScript, and TypeScript, with deep expertise in modern front-end technologies 
                like Context API and component-based architecture. Experienced in integrating applications with RESTful APIs, 
                optimizing performance, and ensuring seamless user experiences. Passionate about writing <span className="text-pink-400 font-semibold">clean, maintainable 
                code</span> and keeping up to date with the latest front-end development trends and best practices.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-10">
                <div className="text-center p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all">
                  <div className="text-4xl font-bold text-blue-400 mb-2">2+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all">
                  <div className="text-4xl font-bold text-purple-400 mb-2">4+</div>
                  <div className="text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-pink-500/50 transition-all">
                  <div className="text-4xl font-bold text-pink-400 mb-2">10+</div>
                  <div className="text-gray-400">Technologies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-32 px-4">
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-purple-500/10 backdrop-blur-sm rounded-full border border-purple-500/20 text-purple-400 mb-4">
              Career Journey
            </span>
            <h2 className="text-5xl md:text-6xl font-bold mb-4 flex items-center justify-center gap-4">
              <Briefcase className="text-purple-400" size={48} />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Experience</span>
            </h2>
          </div>
          
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
                <div className="relative bg-slate-900/90 backdrop-blur-xl p-10 rounded-3xl border border-slate-800 hover:border-purple-500/50 transition-all">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-white mb-2">{exp.title}</h3>
                      <p className="text-2xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">{exp.company}</p>
                      <p className="text-gray-400 mt-1">{exp.location}</p>
                    </div>
                    <span className="inline-block mt-4 md:mt-0 px-4 py-2 bg-purple-500/10 rounded-full text-purple-400 border border-purple-500/20">{exp.period}</span>
                  </div>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 group/item">
                        <span className="text-purple-400 mt-1 group-hover/item:scale-125 transition-transform">▹</span>
                        <span className="text-gray-300 group-hover/item:text-white transition-colors">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-32 px-4">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-cyan-500/10 backdrop-blur-sm rounded-full border border-cyan-500/20 text-cyan-400 mb-4">
              Portfolio
            </span>
            <h2 className="text-5xl md:text-6xl font-bold mb-4 flex items-center justify-center gap-4">
              <Code className="text-cyan-400" size={48} />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Featured Projects</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative">
                <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500`}></div>
                <div className="relative h-full bg-slate-900/90 backdrop-blur-xl p-8 rounded-3xl border border-slate-800 hover:border-cyan-500/50 transition-all flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                      <p className={`text-lg bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent font-semibold`}>{project.company}</p>
                    </div>
                    {project.link && (
                      <a href={`https://${project.link}`} target="_blank" rel="noopener noreferrer" 
                         className="p-3 bg-slate-800/50 rounded-xl hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 transition-all group/link">
                        <ExternalLink size={20} className="text-cyan-400 group-hover/link:scale-110 transition-transform" />
                      </a>
                    )}
                  </div>
                  
                  <span className="inline-block px-3 py-1 bg-cyan-500/10 rounded-full text-cyan-400 text-sm border border-cyan-500/20 mb-4 w-fit">
                    {project.period}
                  </span>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-6 flex-grow">
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-3">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-4 py-2 bg-slate-800/80 border border-slate-700 rounded-xl text-cyan-400 text-sm font-medium hover:border-cyan-500/50 hover:bg-slate-800 transition-all">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-32 px-4">
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-pink-500/10 backdrop-blur-sm rounded-full border border-pink-500/20 text-pink-400 mb-4">
              Expertise
            </span>
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items], index) => {
              const colors = [
                'from-blue-500 to-cyan-500',
                'from-purple-500 to-pink-500',
                'from-orange-500 to-red-500',
                'from-green-500 to-emerald-500',
                'from-yellow-500 to-orange-500',
                'from-indigo-500 to-purple-500'
              ];
              return (
                <div key={category} className="group relative">
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${colors[index]} rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300`}></div>
                  <div className="relative bg-slate-900/90 backdrop-blur-xl p-6 rounded-2xl border border-slate-800 hover:border-pink-500/50 transition-all h-full">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <Zap className="text-pink-400" size={20} />
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill, i) => (
                        <span key={i} className="px-3 py-1.5 bg-slate-800/50 border border-slate-700 text-gray-300 rounded-lg text-sm hover:border-pink-500/50 hover:text-white transition-all">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="relative py-32 px-4">
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-green-500/10 backdrop-blur-sm rounded-full border border-green-500/20 text-green-400 mb-4">
              Academic Background
            </span>
            <h2 className="text-5xl md:text-6xl font-bold mb-4 flex items-center justify-center gap-4">
              <GraduationCap className="text-green-400" size={48} />
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Education</span>
            </h2>
          </div>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                <div className="relative bg-slate-900/90 backdrop-blur-xl p-8 rounded-3xl border border-slate-800 hover:border-green-500/50 transition-all">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                      <p className="text-lg bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent font-semibold">{edu.institution}</p>
                    </div>
                    <div className="text-left md:text-right mt-4 md:mt-0">
                      <p className="text-gray-400 mb-1">{edu.year}</p>
                      <p className="text-2xl font-bold text-green-400">{edu.score}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

         <div className="mt-16">
            <h3 className="text-4xl font-bold mb-8 text-center flex items-center justify-center gap-3">
              <Award className="text-yellow-400" size={36} />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Certifications</span>
            </h3>
            <div className="space-y-6">
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                <div className="relative bg-slate-900/90 backdrop-blur-xl p-8 rounded-3xl border border-slate-800 hover:border-yellow-500/50 transition-all">
                  <h4 className="text-2xl font-bold text-white mb-2">AI-STROM</h4>
                  <p className="text-lg bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent font-semibold mb-2">Tekdi Technologies PVT LTD. - 2025</p>
                  <p className="text-gray-300 mb-6">Built an AI-driven interview platform enabling real-time video interviews</p>
                  <a href="https://drive.google.com/file/d/1XSoZ6cnT9y3R3D4fqRo717D4Ma2xjWxb/view?usp=sharing" 
                     target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-yellow-500/50 transition-all hover:scale-105">
                    View Certificate <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                <div className="relative bg-slate-900/90 backdrop-blur-xl p-8 rounded-3xl border border-slate-800 hover:border-blue-500/50 transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-2">Data Science Course</h4>
                      <p className="text-lg bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold mb-2">In Progress - 2025</p>
                    </div>
                    <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold animate-pulse">
                      Ongoing
                    </span>
                  </div>
                  <p className="text-gray-300">Currently pursuing comprehensive training in Data Science, covering machine learning, statistical analysis, data visualization, and advanced analytics techniques</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-4">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <span className="inline-block px-4 py-2 bg-blue-500/10 backdrop-blur-sm rounded-full border border-blue-500/20 text-blue-400 mb-4">
              Let's Connect
            </span>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              I'm currently open to new opportunities and collaborations. Whether you have a project in mind or just want to connect, feel free to reach out!
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a href="mailto:chaitanyajkole7777@gmail.com" 
               className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-105 flex items-center gap-3">
              <Mail size={24} />
              <span>Email Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity -z-10"></div>
            </a>
            <a href="https://github.com/chaitanyakole" target="_blank" rel="noopener noreferrer"
               className="group px-10 py-5 bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-white rounded-2xl font-semibold text-lg hover:bg-slate-800 hover:border-slate-600 transition-all hover:scale-105 flex items-center gap-3">
              <Github size={24} />
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/chaitanay-kole" target="_blank" rel="noopener noreferrer"
               className="group px-10 py-5 bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-white rounded-2xl font-semibold text-lg hover:bg-slate-800 hover:border-slate-600 transition-all hover:scale-105 flex items-center gap-3">
              <Linkedin size={24} />
              <span>LinkedIn</span>
            </a>
          </div>

          <div className="relative group max-w-2xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
            <div className="relative bg-slate-900/90 backdrop-blur-xl p-8 rounded-3xl border border-slate-800">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-left">
                  <h4 className="text-gray-400 text-sm mb-2">Email</h4>
                  <p className="text-white">chaitanyajkole7777@gmail.com</p>
                </div>
                <div className="text-left">
                  <h4 className="text-gray-400 text-sm mb-2">Phone</h4>
                  <p className="text-white">+91 8830173241</p>
                </div>
                <div className="text-left">
                  <h4 className="text-gray-400 text-sm mb-2">Location</h4>
                  <p className="text-white">Pune, Maharashtra, India</p>
                </div>
                <div className="text-left">
                  <h4 className="text-gray-400 text-sm mb-2">Availability</h4>
                  <p className="text-green-400 font-semibold">Open to Work</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 border-t border-slate-800">
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                Chaitanay Kole
              </div>
              <p className="text-gray-400">React.js Developer</p>
            </div>
            
            <div className="flex gap-4">
              <a href="https://github.com/chaitanyakole" target="_blank" rel="noopener noreferrer"
                 className="p-3 bg-slate-800/50 rounded-xl hover:bg-slate-800 border border-slate-700 hover:border-blue-500/50 transition-all">
                <Github size={20} className="text-gray-300" />
              </a>
              <a href="https://linkedin.com/in/chaitanay-kole" target="_blank" rel="noopener noreferrer"
                 className="p-3 bg-slate-800/50 rounded-xl hover:bg-slate-800 border border-slate-700 hover:border-blue-500/50 transition-all">
                <Linkedin size={20} className="text-blue-400" />
              </a>
              <a href="mailto:chaitanyajkole7777@gmail.com"
                 className="p-3 bg-slate-800/50 rounded-xl hover:bg-slate-800 border border-slate-700 hover:border-blue-500/50 transition-all">
                <Mail size={20} className="text-purple-400" />
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-slate-800 text-center">
            <p className="text-gray-400">
              © 2025 Chaitanay Kole. Built with <span className="text-red-400">❤️</span> using React & Tailwind CSS
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Designed & Developed with passion for creating amazing web experiences
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}