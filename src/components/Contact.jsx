import {useMemo} from "react";
import {ArrowRight, FileText, Github, Linkedin, Mail, Phone} from "lucide-react";
import profile from "../data/profile.js";
import Section from "./Section";
import Card from "./Card";
const RESUME_URL = "#"; // TODO: paste a public link to your CV PDF

function Contact() {
    const mailto = useMemo(() => `mailto:${profile.email}`, []);
    const tel = useMemo(() => `tel:${profile.phone.replace(/\s+/g, "")}`, []);

    return (
        <Section id="contact" title="Contact" icon={Mail}>
            <Card>
                <div className="grid gap-6 md:grid-cols-2">
                    <div>
                        <h3 className="text-lg font-semibold">Get in touch</h3>
                        <p className="mt-2 text-zinc-700 dark:text-zinc-300">
                            For opportunities or a quick chat, email or call me. I’m happy to share more about my projects and experience.
                        </p>
                        <div className="mt-4 flex flex-col gap-2 text-sm">
                            <a href={mailto} className="inline-flex items-center gap-2 underline"><Mail className="h-4 w-4" /> {profile.email}</a>
                            <a href={tel} className="inline-flex items-center gap-2 underline"><Phone className="h-4 w-4" /> {profile.phone}</a>
                            <a href={profile.links.linkedin} className="inline-flex items-center gap-2 underline"><Linkedin className="h-4 w-4" /> LinkedIn</a>
                            <a href={profile.links.github} className="inline-flex items-center gap-2 underline"><Github className="h-4 w-4" /> GitHub</a>
                        </div>
                        <div className="mt-6">
                        </div>
                    </div>
                </div>
            </Card>
        </Section>
    );
}

export default Contact;