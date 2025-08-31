import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Create mailto link with form data
        const subject = `Contact from ${formData.name}`;
        const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
        const mailtoLink = `mailto:luke.armstrong2304@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;
    };

    const contactInfo = [
        {
            icon: Mail,
            label: 'Email',
            value: 'luke.armstrong2304@gmail.com',
            href: 'mailto:luke.armstrong2304@gmail.com'
        },
        {
            icon: MapPin,
            label: 'Location',
            value: 'Christchurch, New Zealand',
            href: null
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            value: 'luke-armstrong450',
            href: 'https://linkedin.com/in/luke-armstrong450/'
        },
        {
            icon: Github,
            label: 'GitHub',
            value: 'LukeA4591',
            href: 'https://github.com/LukeA4591'
        }
    ];

    return (
        <div className="py-24 bg-slate-900 text-white">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Let's Connect
                    </h2>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                        I'm always open to discussing new opportunities, interesting projects, or just having a conversation about technology and software engineering.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>

                        <div className="space-y-4 mb-8">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={info.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-center group"
                                >
                                    <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mr-4 group-hover:bg-slate-700 transition-colors">
                                        <info.icon className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-400 mb-1">{info.label}</p>
                                        {info.href ? (
                                            <a
                                                href={info.href}
                                                target={info.href.startsWith('http') ? '_blank' : '_self'}
                                                rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                                                className="text-white hover:text-blue-400 transition-colors font-medium"
                                            >
                                                {info.value}
                                            </a>
                                        ) : (
                                            <p className="text-white font-medium">{info.value}</p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-slate-800 rounded-2xl p-6"
                        >
                            <h4 className="text-lg font-semibold mb-4">Currently Available For</h4>
                            <ul className="space-y-2">
                                <li className="flex items-center text-slate-300">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                    Internship Opportunities
                                </li>
                                <li className="flex items-center text-slate-300">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                    Part-time Development Work
                                </li>
                                <li className="flex items-center text-slate-300">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                    Collaborative Projects
                                </li>
                                <li className="flex items-center text-slate-300">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                    Mentorship & Learning
                                </li>
                            </ul>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <Card className="bg-slate-800 border-slate-700">
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-2">
                                            Your Name
                                        </label>
                                        <Input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                                            className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-blue-500"
                                            placeholder="Enter your name"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-2">
                                            Email Address
                                        </label>
                                        <Input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                                            className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-blue-500"
                                            placeholder="Enter your email"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-2">
                                            Message
                                        </label>
                                        <Textarea
                                            value={formData.message}
                                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                                            className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-blue-500 h-32"
                                            placeholder="Tell me about your project or opportunity..."
                                            required
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 font-medium transition-colors"
                                    >
                                        <Send className="w-4 h-4 mr-2" />
                                        Send Message
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center mt-16 pt-8 border-t border-slate-800"
                >
                    <p className="text-slate-400">
                        © 2025 Luke Armstrong. Built with React and deployed on AWS.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}