import { motion } from 'framer-motion'
import React from 'react'
const varients={
  open: { 
    transition: { staggerChildren: 0.1, delayChildren: 0.2}
   },
  closed: { 
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
   }
}

const itemlist = {
  open: { y: 0, opacity: 1 },
  closed: { y: 50, opacity: 0 }
}

const Links = () => {
  const items = ['home', 'about', 'services', 'contact']
  return (
    <motion.div variants={varients} className='absolute w-full h-full flex flex-col items-center justify-center gap-6'>
      {items.map((item, index) => (
        <motion.a key={index} variants={itemlist} whileHover={{scale:1.2}} whileTap={{scale:0.95}} href="#"  className='font-semibold text-2xl uppercase'>{item}</motion.a>
      ))}
    </motion.div>
  )
}

export default Links
