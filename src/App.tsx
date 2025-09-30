import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';

export default function App() {
    const [activeSection, setActiveSection] = useState('hero');

    const sections = [
        { id: 'hero', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'projects', label: 'Projects' },
        { id: 'skills', label: 'Skills' },
        { id: 'contact', label: 'Contact' }
    ];

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['hero', 'about', 'projects', 'skills', 'experience', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section && scrollPosition >= section.offsetTop) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Navigation */}
            <motion.nav
                className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="max-w-6xl mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        <motion.div
                            className="text-xl font-bold text-slate-900"
                            whileHover={{ scale: 1.05 }}
                        >
                            Luke Armstrong
                        </motion.div>
                        <div className="hidden md:flex space-x-8">
                            {sections.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => scrollToSection(section.id)}
                                    className={`text-sm font-medium transition-colors duration-300 hover:text-blue-600 ${
                                        activeSection === section.id ? 'text-blue-600' : 'text-slate-600'
                                    }`}
                                >
                                    {section.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Hero Section */}
            <section id="hero">
                <HeroSection />
            </section>

            {/* About Section */}
            <section id="about">
                <AboutSection />
            </section>

            {/* Projects Section */}
            <section id="projects">
                <ProjectsSection />
            </section>

            {/* Skills Section */}
            <section id="skills">
                <SkillsSection />
            </section>

            {/* Contact Section */}
            <section id="contact">
                <ContactSection />
            </section>
        </div>
    );
}