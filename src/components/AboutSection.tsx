import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Users, Trophy } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutSection() {
    const highlights = [
        {
            icon: Code2,
            title: "Full-Stack Expertise",
            description: "Experienced in modern web technologies, from React frontends to Spring Boot backends"
        },
        {
            icon: Users,
            title: "Team Collaboration",
            description: "Skilled in Agile development practices, sprint planning, and iterative releases"
        },
        {
            icon: Trophy,
            title: "Leadership Experience",
            description: "National sailing competitor and instructor, developing leadership in high-pressure situations"
        }
    ];

    return (
        <div className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        About Me
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        I am a penultimate-year Software Engineering student at the University of Canterbury
                        with strong full-stack development skills. I am experienced working in Agile team projects
                        and delivering high-quality software. I bring a strong work ethic, problem-solving ability,
                        and a collaborative mindset to every project I work on.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {highlights.map((highlight, index) => (
                        <motion.div
                            key={highlight.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-slate-50 to-white">
                                <CardContent className="p-8">
                                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                                        <highlight.icon className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-slate-900 mb-4 text-center">
                                        {highlight.title}
                                    </h3>
                                    <p className="text-slate-600 text-center leading-relaxed">
                                        {highlight.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}