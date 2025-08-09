import {Gamepad2, ServerCog} from "lucide-react";

const projects = [
    {
        name: "HomeHelper",
        period: "Feb 2025 – Current",
        blurb:
            "Team project using Java, Spring Boot, and Thymeleaf. Followed Agile/Scrum with sprints, standups, and iterative development.",
        highlights: [
            "7-person team, code reviews, planning & retros",
            "Backend APIs, auth, validation, and templating",
        ],
        tags: ["Java", "Spring Boot", "Thymeleaf", "Agile", "Scrum"],
        icon: ServerCog,
        url: null,
    },
    {
        name: "GameTrove",
        period: "Feb 2025 – Jun 2025",
        blurb:
            "React web app + Node/Express API to browse and review video games: search, reviews/ratings, accounts, wishlists & ownership.",
        highlights: [
            "React front-end with reusable components",
            "Express REST API, pagination & filtering",
        ],
        tags: ["React", "Node.js", "Express", "REST"],
        icon: Gamepad2,
        url: null,
    },
];

export default projects;