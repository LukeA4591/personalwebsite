import {BookOpenText, GraduationCap} from "lucide-react";

const education = [
    {
        school: "University of Canterbury",
        location: "Christchurch, NZ",
        degree: "Bachelor of Software Engineering with Honours",
        period: "Feb 2023 – Current",
        details: [
            "Professional GPA: 7.0 / 9.0",
            "Coursework: Algorithms, Operating Systems, Compilers, AI, Computer Networks, Relational DB, Computer Systems, Web Computing Architectures, Computer Graphics",
        ],
        icon: GraduationCap,
    },
    {
        school: "Wellington College",
        location: "Wellington, NZ",
        degree: "Secondary School",
        period: "Feb 2018 – Nov 2022",
        details: [
            "School Sailing team (Nationals)",
            "Accelerated mathematics & physics (Cambridge AS/A Level Pure Maths alongside NCEA)",
        ],
        icon: BookOpenText,
    },
];

export default education;