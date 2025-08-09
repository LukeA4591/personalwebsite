import {Code2, ExternalLink} from "lucide-react";
import projects from "../data/projects.js";
import Section from "./Section";
import Card from "./Card";
import Tag from "./Tag";

function Projects() {
    return (
        <Section id="projects" title="Projects" icon={Code2}>
            <div className="grid gap-6 md:grid-cols-2">
                {projects.map((p) => (
                    <Card key={p.name}>
                        <div className="flex items-center gap-3">
                            {p.icon ? <p.icon className="h-5 w-5" /> : null}
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold">{p.name}</h3>
                                <p className="text-sm text-zinc-500">{p.period}</p>
                            </div>
                            {p.url ? (
                                <a href={p.url} className="inline-flex items-center gap-1 text-sm underline">
                                    Demo <ExternalLink className="h-4 w-4" />
                                </a>
                            ) : null}
                        </div>
                        <p className="mt-3 text-zinc-700 dark:text-zinc-300">{p.blurb}</p>
                        <ul className="mt-3 list-disc space-y-1 pl-5 text-zinc-700 dark:text-zinc-300">
                            {p.highlights.map((h, i) => (
                                <li key={i}>{h}</li>
                            ))}
                        </ul>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {p.tags.map((t) => (
                                <Tag key={t}>{t}</Tag>
                            ))}
                        </div>
                    </Card>
                ))}
            </div>
        </Section>
    );
}

export  default Projects;