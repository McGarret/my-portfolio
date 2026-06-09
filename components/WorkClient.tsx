"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { BsArrowUpRight, BsGithub } from 'react-icons/bs'
import Link from 'next/link'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import Image from 'next/image'
import WorkSliderBtns from '@/components/WorkSliderBtns'
import { urlFor } from '@/sanity/image'

// Type correspondant au schéma Sanity
export type Project = {
  _id: string
  num: string
  category: string
  title: string
  description: string
  stack: { name: string }[]
  image?: { asset: { _ref: string } }
  live?: string
  github?: string
}

type WorkClientProps = {
  projects: Project[]
}

export default function WorkClient({ projects }: WorkClientProps) {
  const [project, setProject] = useState<Project>(projects[0])

  const handleSlideChange = (swiper: SwiperClass) => {
    const currentIndex = swiper.activeIndex
    setProject(projects[currentIndex])
  }

  if (projects.length === 0) {
    return (
      <section className="min-h-[80vh] flex items-center justify-center">
        <p className="text-white/60 text-xl">
          Aucun projet trouvé.{' '}
          <Link href="/studio" className="text-accent underline">
            Ajoutez-en un depuis le studio
          </Link>
          .
        </p>
      </section>
    )
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* Infos projet */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* Numéro */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              {/* Catégorie */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                Projet {project.category}
              </h2>

              {/* Titre */}
              <h3 className="text-xl font-semibold text-accent">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-white/60">{project.description}</p>

              {/* Stack */}
              <ul className="flex gap-4 flex-wrap">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ','}
                  </li>
                ))}
              </ul>

              {/* Bordure */}
              <div className="border border-white/20"></div>

              {/* Boutons */}
              <div className="flex items-center gap-4">
                {/* Live */}
                {project.live ? (
                  <Link href={project.live} target="_blank" rel="noopener noreferrer">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/50 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Projet en direct</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                ) : (
                  <span className="w-[70px] h-[70px] rounded-full bg-white/10 flex justify-center items-center opacity-40 cursor-not-allowed">
                    <BsArrowUpRight className="text-white text-3xl" />
                  </span>
                )}

                {/* GitHub */}
                {project.github ? (
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/50 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Dépôt Github</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                ) : (
                  <span className="w-[70px] h-[70px] rounded-full bg-white/10 flex justify-center items-center opacity-40 cursor-not-allowed">
                    <BsGithub className="text-white text-3xl" />
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Slider images */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((p, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* Overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10" />
                    {/* Image */}
                    <div className="w-full h-full relative">
                      {p.image?.asset ? (
                        <Image
                          src={urlFor(p.image).width(800).height(460).url()}
                          fill
                          className="object-cover"
                          alt={p.title}
                          sizes="(max-width: 1280px) 100vw, 50vw"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-white/30 text-sm">
                          Aucune image
                        </div>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] h-[44px] w-[44px] flex justify-center items-center transition-all"
                iconsStyles=""
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
