import {Library} from "lucide-react";
import education from "../data/education.js";
import Section from "./Section";
import Card from "./Card";

function Education() {
    return (
        <Section id="education" title="Education" icon={Library}>
            <div className="grid gap-6 md:grid-cols-2">
                {education.map((ed) => (
                    <Card key={ed.school}>
                        <div className="flex items-center gap-3">
                            {ed.icon ? <ed.icon className="h-5 w-5" /> : null}
                            <div>
                                <h3 className="text-lg font-semibold">{ed.school}</h3>
                                <p className="text-sm text-zinc-500">{ed.degree}</p>
                                <p className="text-sm text-zinc-500">{ed.location} • {ed.period}</p>
                            </div>
                        </div>
                        <ul className="mt-3 list-disc space-y-1 pl-5 text-zinc-700 dark:text-zinc-300">
                            {ed.details.map((d, i) => (
                                <li key={i}>{d}</li>
                            ))}
                        </ul>
                    </Card>
                ))}
            </div>
        </Section>
    );
}

export default Education;