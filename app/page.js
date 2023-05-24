'use client'

import { motion } from "framer-motion"
import { usePathname } from "next/navigation";
import Login from './../components/auth/Login';

export default function Home() {
  const path = usePathname()
  return (
    <motion.div
      key={path}
      initial="initialState"
      animate="animateState"
      exit="exitState"
      transition={{
        duration: 0.75
      }}
      variants={{
        initialState: {
          opacity: 0,
          y: 20
        },
        animateState: {
          opacity: 1,

        },
        exitState: {

        },
      }}
    >
      <Login />
    </motion.div>
  )
}
