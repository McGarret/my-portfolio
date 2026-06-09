"use client"

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { BsArrowUpRight, BsGithub, BsZoomIn, BsXLg } from 'react-icons/bs'
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
  const [lightboxImage, setLightboxImage] = useState<{ src: string; title: string } | null>(null)

  const handleSlideChange = (swiper: SwiperClass) => {
    const currentIndex = swiper.activeIndex
    setProject(projects[currentIndex])
  }

  const openLightbox = useCallback((src: string, title: string) => {
    setLightboxImage({ src, title })
    document.body.style.overflow = 'hidden'
  }, [])

  const closeLightbox = useCallback(() => {
    setLightboxImage(null)
    document.body.style.overflow = ''
  }, [])

  // Fermeture via la touche Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
    }
    if (lightboxImage) {
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxImage, closeLightbox])

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
    <>
      {/* ── Lightbox ──────────────────────────────────── */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            key="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            {/* Bouton fermer */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              onClick={closeLightbox}
              className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all duration-200"
              aria-label="Fermer le lightbox"
            >
              <BsXLg className="text-sm" />
            </motion.button>

            {/* Légende */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.15 }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm font-mono"
            >
              {lightboxImage.title}
            </motion.p>

            {/* Image plein écran */}
            <motion.div
              key="lightbox-image"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative w-[90vw] max-w-5xl aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightboxImage.src}
                fill
                className="object-contain"
                alt={lightboxImage.title}
                sizes="90vw"
                quality={90}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Page principale ───────────────────────────── */}
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
                    <div className="h-[460px] relative group flex flex-col bg-[#1c1c22] rounded-xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-300">
                      {/* Barre navigateur */}
                      <div className="w-full bg-[#232329] px-4 py-3 flex items-center gap-2 border-b border-white/5 shrink-0">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f56] opacity-80 group-hover:opacity-100 transition-opacity"></div>
                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e] opacity-80 group-hover:opacity-100 transition-opacity"></div>
                        <div className="w-3 h-3 rounded-full bg-[#27c93f] opacity-80 group-hover:opacity-100 transition-opacity"></div>
                        <div className="flex-1 text-center text-[11px] text-white/20 select-none truncate px-4 font-mono lowercase">
                          {p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.com
                        </div>
                      </div>

                      {/* Zone image — cliquable pour le lightbox */}
                      <div
                        className="w-full flex-1 relative overflow-hidden bg-black/20 cursor-zoom-in"
                        onClick={() => {
                          if (p.image?.asset) {
                            openLightbox(
                              urlFor(p.image).width(1920).height(1080).url(),
                              p.title
                            )
                          }
                        }}
                      >
                        {/* Icône zoom — apparaît au survol */}
                        <div className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/40 border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                          <BsZoomIn className="text-white text-sm" />
                        </div>

                        {/* Overlay survol */}
                        <div className="absolute inset-0 bg-black/10 z-10 group-hover:bg-black/5 transition-all duration-500" />

                        {p.image?.asset ? (
                          <Image
                            src={urlFor(p.image).width(800).height(460).url()}
                            fill
                            className="object-cover object-top group-hover:scale-105 transition-all duration-500"
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
    </>
  )
}
