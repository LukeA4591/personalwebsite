import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Database, Cloud, Server } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function ProjectsSection() {
    const projects = [
        {
            title: "GameTrove",
            period: "Feb 2025 – June 2025",
            description: "A comprehensive web application for browsing, reviewing, and rating video games. Features include wishlist management, ownership tracking, and user accounts with a responsive UI connected to RESTful API endpoints.",
            technologies: ["React", "Node.js", "Express", "MySQL", "AWS"],
            liveUrl: "https://gametrove.lukearmstrong.co.nz",
            architecture: [
                { icon: Database, label: "MySQL (RDS)" },
                { icon: Server, label: "Node.js API (EC2)" },
                { icon: Cloud, label: "Frontend (S3)" }
            ],
            featured: true,
            sourceUrl: "https://github.com/LukeA4591/GameTrove"
        },
        {
            title: "Homehelper",
            period: "Feb 2025 – current",
            description: "A renovation management web application built with Spring Boot and Thymeleaf in a collaborative 7-person team environment. Implemented CI/CD pipelines and comprehensive testing.",
            technologies: ["Java", "Spring Boot", "Thymeleaf", "CI/CD"],
            liveUrl: "https://csse-seng302-team900.canterbury.ac.nz/prod/home",
        },
        {
            title: "Personal Portfolio Website",
            period: "July 2025 – current",
            description: "A responsive single-page application showcasing projects, skills, and achievements. Deployed on AWS Amplify with custom domain and SSL certificate.",
            technologies: ["React", "Tailwind CSS", "AWS Amplify", "Vite"],
            features: [
                "Custom domain with SSL",
                "Responsive design",
                "AWS deployment"
            ],
            sourceUrl: "https://github.com/LukeA4591/personalwebsite"
        }
    ];

    return (
        <div className="py-24 bg-slate-50">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        Featured Projects
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        A selection of projects that demonstrate my full-stack development capabilities and collaborative approach to software engineering.
                    </p>
                </motion.div>

                <div className="space-y-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className={`overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 ${
                                project.featured ? 'bg-gradient-to-br from-blue-50 to-white border-blue-200' : 'bg-white'
                            }`}>
                                <CardContent className="p-8 md:p-12">
                                    <div className="grid md:grid-cols-3 gap-8">
                                        <div className="md:col-span-3">
                                            <div className="flex items-start justify-between mb-4">
                                                <div>
                                                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                                                        {project.title}
                                                        {project.featured && (
                                                            <Badge className="ml-3 bg-blue-100 text-blue-800 border-blue-200">
                                                                Featured
                                                            </Badge>
                                                        )}
                                                    </h3>
                                                    <div className="flex items-center text-slate-500 text-sm mb-4">
                                                        <Calendar className="w-4 h-4 mr-2" />
                                                        {project.period}
                                                    </div>
                                                </div>
                                            </div>

                                            <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                                                {project.description}
                                            </p>

                                            <div className="mb-6">
                                                <h4 className="font-semibold text-slate-900 mb-3">Technologies Used</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {project.technologies.map((tech) => (
                                                        <Badge
                                                            key={tech}
                                                            variant="outline"
                                                            className="bg-white border-slate-300 text-slate-700 hover:bg-slate-50"
                                                        >
                                                            {tech}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>

                                            {project.architecture && (
                                                <div className="mb-6">
                                                    <h4 className="font-semibold text-slate-900 mb-3">AWS Architecture</h4>
                                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                                        {project.architecture.map((item, idx) => (
                                                            <div key={idx} className="flex items-center gap-2 p-3 bg-white rounded-lg border">
                                                                <item.icon className="w-5 h-5 text-blue-600" />
                                                                <span className="text-sm font-medium text-slate-700">{item.label}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {project.features && (
                                                <div className="mb-6">
                                                    <h4 className="font-semibold text-slate-900 mb-3">Key Features</h4>
                                                    <ul className="space-y-1">
                                                        {project.features.map((feature, idx) => (
                                                            <li key={idx} className="text-slate-600 flex items-center">
                                                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                                                                {feature}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            <div className="flex flex-wrap gap-3">
                                                {project.liveUrl && (
                                                    <a
                                                        href={project.liveUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                                                            <ExternalLink className="w-4 h-4 mr-2" />
                                                            View Live
                                                        </Button>
                                                    </a>
                                                )}
                                                {
                                                    project.sourceUrl && (
                                                        <a
                                                            href={project.sourceUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            <Button variant="outline" className="border-slate-300 hover:bg-slate-50">
                                                                <Github className="w-4 h-4 mr-2" />
                                                                Source Code
                                                            </Button>
                                                        </a>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <a
                        href="https://github.com/LukeA4591"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button variant="outline" size="lg" className="border-slate-300 hover:bg-slate-50">
                            <Github className="w-5 h-5 mr-2" />
                            View All Projects on GitHub
                        </Button>
                    </a>
                </motion.div>
            </div>
        </div>
    );
}