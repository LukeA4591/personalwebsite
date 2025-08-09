import {CpuIcon} from "lucide-react";
import skills from "../data/skills.js";
import Section from "./Section";
import Card from "./Card";
import Tag from "./Tag";

function Skills() {
    return (
        <Section id="skills" title="Skills" icon={CpuIcon}>
            <div className="grid gap-6 md:grid-cols-3">
                <Card>
                    <h3 className="font-medium">Languages</h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                        {skills.languages.map((s) => (
                            <Tag key={s}>{s}</Tag>
                        ))}
                    </div>
                </Card>
                <Card>
                    <h3 className="font-medium">Technologies</h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                        {skills.technologies.map((s) => (
                            <Tag key={s}>{s}</Tag>
                        ))}
                    </div>
                </Card>
                <Card>
                    <h3 className="font-medium">Testing</h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                        {skills.testing.map((s) => (
                            <Tag key={s}>{s}</Tag>
                        ))}
                    </div>
                </Card>
            </div>
        </Section>
    );
}

export default Skills;