import {
    Mail, Linkedin, Github, Phone, ArrowRight, ExternalLink,
    GraduationCap, Briefcase, Trophy, Code2, Globe, Sailboat, Gamepad2,
    ServerCog, Cpu, CpuIcon, Library, BookOpenText, FileText, MapPin
} from "lucide-react";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Section from "./components/Section";
import Card from "./components/Card";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import profile from "./data/profile.js";

export default function LukeArmstrongSite() {
    return (
        <div className="min-h-screen bg-white text-zinc-900 antialiased dark:bg-zinc-900 dark:text-zinc-100">
            <Nav />
            <Hero />
            <main>
                <Section id="about" title="About" icon={Globe}>
                    <Card>
                        <p className="text-zinc-700 dark:text-zinc-300">
                            I’m a penultimate-year Software Engineering student with a focus on practical, end‑to‑end development. I’ve built projects in Java/Spring Boot and in the JS ecosystem (React + Node/Express), and I enjoy the process of designing features, implementing them cleanly, and testing thoroughly. Outside of code, I coach sailing and love being outdoors.
                        </p>
                    </Card>
                </Section>
                <Projects />
                <Skills />
                <Education />
                <Achievements />
                <Contact />
            </main>
            <footer className="border-t py-10">
                <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm md:flex-row">
                    <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
                    <div className="flex items-center gap-4">
                        <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-1 underline"><Mail className="h-4 w-4" /> Email</a>
                        <a href={profile.links.linkedin} className="inline-flex items-center gap-1 underline"><Linkedin className="h-4 w-4" /> LinkedIn</a>
                        <a href={profile.links.github} className="inline-flex items-center gap-1 underline"><Github className="h-4 w-4" /> GitHub</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
