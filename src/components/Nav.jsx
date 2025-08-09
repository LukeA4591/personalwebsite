import {ArrowRight, FileText} from "lucide-react";
import profile from "../data/profile.js";

const RESUME_URL = "#"; // TODO: paste a public link to your CV PDF

function Nav() {
    const items = [
        { href: "#about", label: "About" },
        { href: "#projects", label: "Projects" },
        { href: "#skills", label: "Skills" },
        { href: "#education", label: "Education" },
        { href: "#achievements", label: "Achievements" },
        { href: "#contact", label: "Contact" },
    ];
    return (
        <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur dark:bg-zinc-900/80">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                <a href="#home" className="font-semibold tracking-tight">{profile.name}</a>
                <nav className="flex items-center gap-3 text-sm">
                    {items.map((it) => (
                        <a key={it.href} href={it.href} className="rounded-full px-3 py-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800">
                            {it.label}
                        </a>
                    ))}
                    <a
                        href={RESUME_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex items-center gap-2 rounded-full bg-black px-4 py-1.5 text-white hover:opacity-90 dark:bg-white dark:text-black"
                    >
                        <FileText className="h-4 w-4" /> <span>Resume</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </a>
                </nav>
            </div>
        </header>
    );
}

export default Nav;