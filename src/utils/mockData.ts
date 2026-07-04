import { ResumeData } from '@/types/resume';

export const MOCK_RESUME_DATA: ResumeData = {
    name: "Estelle Darcy",
    headline: "Content Creator & Media Strategist",
    description: "Creative and detail-oriented Content Creator with 3+ years of experience produing engaging content for online platforms. Skilled in writing, editing, and content strategy development.",
    contact: {
        email: "hello@reallygreatsite.com",
        phone: "123-456-7890",
        location: "123 Anywhere St., Any City",
        linkedin: "linkedin.com/in/estelledarcy"
    },
    skills: [
        { name: "Content Writing", level: 5 },
        { name: "SEO Optimization", level: 4 },
        { name: "Social Media Strategist", level: 4 },
        { name: "Video Production", level: 3 },
        { name: "Graphic Design", level: 4 },
        { name: "Copy Editing", level: 5 },    
    ],
    experience: [
        {
            title: "Content Creator",
            company: "Ginyard International Co.",
            timeline: "2021 - Present",
            points: [
                "Produced high quality written and visual content dfor website, social media, and email marketing campaigns.",
                "Collaborated with marketing team to develop content strategist tghat increased engagement and brand awareness by 22%",
                "Utilized analytics tools to track performance metrics and optimize campaign strategy for maximum reach."
            ]
        },
        {
            title: "Junior Editor",
            company: "Arowwai Industries",
            timeline: "2019 - 2021",
            points: [
                "Edited and refined over 50 articles and blog posts per month for clarity, syntax, and SEO alignment.",
                "Managed the weekly content publication calendar and coordinated across 4 freelance writers."
            ]
        }
    ],
    education: [
        {
            degree: "Bachelor's Degree in Communication",
            institution: "Rimberio University",
            timeline: "Graduated May 2018"
        }
    ],
    interests: ["Creative Writing", "Photography", "Podcasting"]
};
