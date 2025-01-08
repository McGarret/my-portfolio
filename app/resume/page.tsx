"use client";
import { SiAdobeillustrator, SiTypescript } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import {
    FaHtml5,
    FaCss3,
    FaReact,
    FaJs,
    FaFigma,
    FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { motion } from "motion/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const about = {
    title: "About me",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Benjamin Koffi AKOSSOU",
        },
        {
            fieldName: "Phone",
            fieldValue: "(00228) 90 30 21 11 / 97 90 87 13",
        },
        {
            fieldName: "Experience",
            fieldValue: "6+ Years",
        },
        {
            fieldName: "Nationality",
            fieldValue: "Togolais",
        },
        {
            fieldName: "Email",
            fieldValue: "benakossou@outlook.com",
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available",
        },
        {
            fieldName: "Languages",
            fieldValue: "English, French, Ewe",
        },
    ],
};

const experience = {
    icon: "/assets/resume/badge.svg",
    title: "My experience",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    items: [
        {
            company: "Online Services",
            postion: "Full Stack Developper",
            duration: "2023 - Present",
        },
        {
            company: "GALAXIE TECH",
            postion: "Backend Developper",
            duration: "2021 - 2023",
        },
        {
            company: "Stock Managment Startup",
            postion: "Full Stack Developper",
            duration: "2020 - 2021",
        },
        {
            company: "Stage à KAD 7",
            postion: "Support technique de KAD 7",
            duration: "2019 - 2020",
        },
        {
            company: "Stage à AFRITEC TOGO",
            postion: "Stagiaire en câblage réseaux informatiques",
            duration: "2017 - 2018",
        },
    ],
};
const education = {
    icon: "/assets/resume/cap.svg",
    title: "My education",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    items: [
        {
            institution: "Online Course Platform",
            degree: "Full Stack Development Bootcamp",
            duration: "2023",
        },
        {
            institution: "W3SCHOOL",
            degree: "Backend Track",
            duration: "2022",
        },
        {
            institution: "Online Course",
            degree: "Programming Course",
            duration: "2023",
        },
        {
            institution: "IAI TOGO",
            degree: "Diplomé Ingénieur des Traveaux Informatiques",
            duration: "2020",
        },
        {
            institution: "IAI TOGO",
            degree: "Licence en Génie Logiciel",
            duration: "2017 - 2020",
        },
    ],
};

const skills = {
    title: "My Skills",
    description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolorem, dicta numquam repellendus necessitatibus beatae quisquam, a nihil dignissimos quibusdam repellat ducimus totam amet. Odio soluta sapiente eveniet enim. Tenetur?",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "html 5",
        },
        {
            icon: <FaCss3 />,
            name: "css 3",
        },
        {
            icon: <FaJs />,
            name: "Javascript",
        },
        {
            icon: <SiTypescript />,
            name: "Javascript",
        },
        {
            icon: <FaReact />,
            name: "react.js",
        },
        {
            icon: <SiNextdotjs />,
            name: "next.js",
        },
        {
            icon: <FaNodeJs />,
            name: "node.js",
        },
        {
            icon: <SiTailwindcss />,
            name: "tailwind.css",
        },
        {
            icon: <FaFigma />,
            name: "figma",
        },
        {
            icon: <SiAdobephotoshop />,
            name: "adobe photoshop",
        },
        {
            icon: <SiAdobeillustrator />,
            name: "adobe illustrator",
        },
    ],
};

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs
                    defaultValue="experience"
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>

                    <div className="min-h-[70vh] w-full">
                        <TabsContent value="experience">
                            {/* experience */}
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold"> {experience.title} </h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {experience.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent"> {item.duration} </span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ">
                                                        {item.postion}
                                                    </h3>
                                                    <div className="flex items-center gap-3">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        <TabsContent value="education" className="w-full h-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold"> {education.title} </h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {education.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent"> {item.duration} </span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ">
                                                        {item.degree}
                                                    </h3>
                                                    <div className="flex items-center gap-3 mt-6">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.institution}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>


                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold"> {skills.title} </h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {skills.description}
                                </p>
                                {/* <ScrollArea className="h-[400px]"> */}
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-4 xl:gap-[30px] ">
                                    {skills.skillList.map((skill, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className="">
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300"> {skill.icon} </div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="capitalize">{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        );
                                    })}
                                </ul>
                                {/* </ScrollArea> */}
                            </div>
                        </TabsContent>


                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold"> {about.title} </h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0"> {about.description} </p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                            <span className="text-white/60">{item.fieldName}</span>
                                            <span>{item.fieldValue}</span>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;
