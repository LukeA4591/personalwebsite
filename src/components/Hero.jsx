import {Github, Linkedin, Mail, MapPin} from "lucide-react";
import lukeapic from "../../lukeapic.jpeg";
import profile from "../data/profile.js";
import {motion} from "framer-motion";

function Hero() {
    return (
        <section id="home" className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-zinc-50 dark:to-zinc-950" />
            <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-8 px-6 py-20 md:grid-cols-2 md:py-28">
                <div className="flex flex-col justify-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl font-bold tracking-tight md:text-5xl"
                    >
                        {profile.name}
                    </motion.h1>
                    <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-300">{profile.title}</p>
                    <p className="mt-6 max-w-prose text-zinc-700 dark:text-zinc-300">{profile.summary}</p>
                    <div className="mt-8 flex flex-wrap items-center gap-3">
                        <a
                            href={`mailto:${profile.email}`}
                            className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-white hover:opacity-90 dark:bg-white dark:text-black"
                        >
                            <Mail className="h-4 w-4" /> Contact me
                        </a>
                        <a href={profile.links.linkedin} className="inline-flex items-center gap-2 rounded-full border px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800">
                            <Linkedin className="h-4 w-4" /> LinkedIn
                        </a>
                        <a href={profile.links.github} className="inline-flex items-center gap-2 rounded-full border px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800">
                            <Github className="h-4 w-4" /> GitHub
                        </a>
                    </div>
                    <div className="mt-4 flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-300">
                        <MapPin className="h-4 w-4" /> {profile.location}
                    </div>
                </div>
                <div className="order-first md:order-none">
                    <div className="relative mx-auto aspect-square max-w-sm overflow-hidden rounded-2xl border shadow-sm">
                        <img
                            src={lukeapic}
                            alt="Luke Armstrong"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;