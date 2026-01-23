"use client";

import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import "swiper/css";

import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import Link from 'next/link';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Image from 'next/image';
import WorkSliderBtns from '@/components/WorkSliderBtns';

const projects = [
    {
        num: '01',
        category: 'fullstack',
        title: 'SaaS Digitalisation de Tontines',
        description: "Plateforme SaaS moderne pour la gestion et la digitalisation des tontines, permettant une traçabilité et une transparence accrues.",
        stack: [{ name: "Next.js 15" }, { name: "Laravel 12" }, { name: "TailwindCSS" }],
        image: '/assets/work/thumb1.png',
        live: "",
        github: "",
    },
    {
        num: '02',
        category: 'fullstack',
        title: 'Gestion de Stock & POS',
        description: "Application robuste de gestion de stock et points de vente conçue avec Filament PHP, offrant une interface d'administration intuitive.",
        stack: [{ name: "Laravel 10" }, { name: "Filament PHP v3" }, { name: "MySQL" }],
        image: '/assets/work/thumb2.png',
        live: "",
        github: "",
    },
    {
        num: '03',
        category: 'frontend',
        title: 'Plateforme de réservation',
        description: "Interface fluide et performante pour la réservation de voitures et de terrains de jeux, optimisée pour l'expérience utilisateur.",
        stack: [{ name: "Next.js" }, { name: "TailwindCSS" }, { name: "Framer Motion" }],
        image: '/assets/work/thumb3.png',
        live: "",
        github: "",
    },
    {
        num: '04',
        category: 'fullstack',
        title: 'Gestion des Transits DHT',
        description: "Système complet de gestion des opérations de transit pour DHT Transit, facilitant le suivi des dossiers et la facturation.",
        stack: [{ name: "Laravel" }, { name: "Bootstrap" }, { name: "PostgreSQL" }],
        image: '/assets/work/thumb1.png',
        live: "",
        github: "",
    },
]

const Work = () => {

    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper: SwiperClass) => {
        // get current slide index
        const currentIndex = swiper.activeIndex;

        //update project state based on current slide index

        setProject(projects[currentIndex]);
    }

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
            className='min-h-[80vh] felx flex-col justify-center py-12 xl:px-0'>
            <div className="container mx-auto">
                <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
                    <div
                        className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
                        <div className='flex flex-col gap-[30px] h-[50%]'>
                            {/* outline num */}
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            {/* project category */}
                            <h2
                                className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>
                                Projet {project.category}
                            </h2>
                            {/* project description */}
                            <p className='text-white/60'>{project.description}</p>
                            {/* stack */}
                            <ul className='flex gap-4'>
                                {project.stack.map((item, index) => {
                                    return <li key={index} className='text-xl text-accent'>
                                        {item.name}
                                        {index !== project.stack.length - 1 && ","}
                                    </li>;
                                })}
                            </ul>
                            {/* boerder */}
                            <div className="border border-white/20"></div>
                            {/* buttons */}
                            <div className='flex items-center gap-4'>
                                {/* live project button */}
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger
                                                className='w-[70px] h-[70px] rounded-full bg-white/50 flex justify-center items-center group'
                                            >
                                                <BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Projet en direct</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>

                                {/* github project button */}
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger
                                                className='w-[70px] h-[70px] rounded-full bg-white/50 flex justify-center items-center group'
                                            >
                                                <BsGithub className='text-white text-3xl group-hover:text-accent' />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Dépôt Github</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className='w-full xl:w-[50%]' >
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className='xl:h-[520px] mb-12'
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index) => {
                                return <SwiperSlide
                                    key={index}
                                    className='w-full'
                                >
                                    <div
                                        className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'
                                    >
                                        {/* overlay */}
                                        <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'>

                                        </div>
                                        {/* image */}
                                        <div className='w-full h-full'>
                                            <Image src={project.image} fill className='object-covert' alt='' />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            })}
                            {/* slider ttons */}
                            <WorkSliderBtns
                                containerStyles='flex gap-2 absolute right-0 
                                    bottom-[calc(50%_-_22px)] xl:bottom-0 
                                    z-20 w-full justify-between xl:w-max xl:justify-none'
                                btnStyles='bg-accent hover:bg-accent-hover 
                                    text-primary text-[22px] h-[44px] w-[44px] flex justify-center items-center transition-all'
                                iconsStyles=''
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Work