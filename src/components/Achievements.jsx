import {Trophy} from "lucide-react";
import achievements from "../data/achievements.js";
import interests from "../data/interests.js";
import Section from "./Section";
import Card from "./Card";

function Achievements() {
    return (
        <Section id="achievements" title="Achievements" icon={Trophy}>
            <div className="grid gap-6 md:grid-cols-3">
                {achievements.map((a) => (
                    <Card key={a.title}>
                        <h3 className="font-semibold">{a.title}</h3>
                        {a.note ? <p className="mt-2 text-zinc-700 dark:text-zinc-300">{a.note}</p> : null}
                    </Card>
                ))}
            </div>
            <div className="mt-6 text-sm text-zinc-600 dark:text-zinc-300">
                Also into: {interests.join(", ")}
            </div>
        </Section>
    );
}

export default Achievements;