import { useState } from "react";
import { Menu, X } from "lucide-react";
import profile from "../data/profile.js";

function Nav() {
    const [open, setOpen] = useState(false);
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
            <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
                <a href="#home" className="font-semibold tracking-tight">{profile.name}</a>

                {/* Desktop nav */}
                <nav className="hidden sm:flex items-center gap-3 text-sm">
                    {items.map(it => (
                        <a key={it.href} href={it.href} className="rounded-full px-3 py-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800">
                            {it.label}
                        </a>
                    ))}
                </nav>

                {/* Mobile toggle */}
                <button
                    className="sm:hidden p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800"
                    aria-expanded={open}
                    aria-controls="mobile-nav"
                    onClick={() => setOpen(o => !o)}
                >
                    {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
            </div>

            {/* Mobile panel */}
            <div
                id="mobile-nav"
                className={`${open ? "block" : "hidden"} sm:hidden border-t bg-white/90 dark:bg-zinc-900/90`}
            >
                <div className="mx-auto max-w-6xl px-6 py-3 flex flex-col">
                    {items.map(it => (
                        <a
                            key={it.href}
                            href={it.href}
                            className="py-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800"
                            onClick={() => setOpen(false)}
                        >
                            {it.label}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
}

export default Nav;
