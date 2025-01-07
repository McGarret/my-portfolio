"use client";

// import { AnimatePresence } from 'framer-motion'
import { AnimatePresence, motion } from "motion/react"
import { usePathname } from "next/navigation";

const PageTransition = ({ children }: any) => {
    const pathname = usePathname();
    return (
        <AnimatePresence>


            <div key={pathname}>
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{
                        opacity: 0,
                        transition: {
                            delay: 1,
                            duration: 0.1,
                            ease: "linear"
                        },
                    }}
                    className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
                />
                {children}
            </div>
        </AnimatePresence>
    )
}

export default PageTransition