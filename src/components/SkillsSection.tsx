import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Cloud, TestTube, Wrench, Smartphone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function SkillsSection() {
    const skillCategories = [
        {
            icon: Code2,
            title: "Programming Languages",
            skills: ["Java", "JavaScript", "TypeScript", "Python", "C", "SQL", "HTML", "CSS"],
            color: "bg-blue-50 text-blue-700"
        },
        {
            icon: Wrench,
            title: "Frameworks & Libraries",
            skills: ["Spring Boot", "React", "Node.js", "Express.js", "Thymeleaf", "Tailwind CSS"],
            color: "bg-green-50 text-green-700"
        },
        {
            icon: Database,
            title: "Databases & Cloud",
            skills: ["MySQL", "AWS RDS", "AWS S3", "AWS EC2", "AWS Amplify"],
            color: "bg-purple-50 text-purple-700"
        },
        {
            icon: TestTube,
            title: "Testing & DevOps",
            skills: ["Unit Testing", "Integration Testing", "E2E Testing", "CI/CD Pipelines", "Agile Development"],
            color: "bg-orange-50 text-orange-700"
        },
        {
            icon: Wrench,
            title: "Development Tools",
            skills: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "Vite"],
            color: "bg-red-50 text-red-700"
        },
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
                        Technical Skills
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        A comprehensive toolkit built through hands-on project experience and continuous learning.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-slate-50 to-white">
                                <CardContent className="p-8">
                                    <div className="flex items-center mb-6">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${category.color}`}>
                                            <category.icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-slate-900">
                                            {category.title}
                                        </h3>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill) => (
                                            <Badge
                                                key={skill}
                                                variant="outline"
                                                className="bg-white border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors duration-200"
                                            >
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}