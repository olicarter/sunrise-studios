'use client'

import cn from '@/utils/cn'
import { hurricane, jotiOne } from './fonts'
import { motion } from 'framer-motion'

const variants = {
  list: {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  },
  item: {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  },
}
export default function Home() {
  return (
    <div className="flex flex-col h-svh items-center justify-center overflow-hidden">
      <h1 className="flex flex-col gap-1 items-center relative z-10">
        <span className={cn('text-4xl', jotiOne.className)}>SUNRISE</span>
        <span className={cn('text-xl', hurricane.className)}>STUDIOS</span>
      </h1>
      <div className="absolute bottom-0 h-screen overflow-hidden w-screen">
        <motion.div
          animate="animate"
          className="h-screen w-screen translate-x-[calc(50vw-50vh)] translate-y-[calc(100vh-30vh)]"
          initial="initial"
          variants={variants.list}
        >
          <motion.div
            className="absolute bg-rose-500 shadow-[0_0_16vh_4vh] shadow-rose-500/50 inset-[16vh] rounded-full size-[68vh] z-[12]"
            variants={variants.item}
          />
          <motion.div
            className="absolute bg-red-500 shadow-[0_0_16vh_4vh] shadow-red-500/50 inset-[8vh] rounded-full size-[84vh] z-[11]"
            variants={variants.item}
          />
          <motion.div
            className="absolute bg-orange-500 shadow-[0_0_16vh_4vh] shadow-orange-500/50 inset-0 rounded-full size-[100vh] z-[10]"
            variants={variants.item}
          />
          <motion.div
            className="absolute bg-amber-500 shadow-[0_0_16vh_4vh] shadow-amber-500/50 -inset-[8vh] rounded-full size-[116vh] z-[9]"
            variants={variants.item}
          />
          <motion.div
            className="absolute bg-yellow-500 shadow-[0_0_16vh_4vh] shadow-yellow-500/50 -inset-[16vh] rounded-full size-[132vh] z-[8]"
            variants={variants.item}
          />
          <motion.div
            className="absolute bg-lime-500 shadow-[0_0_16vh_4vh] shadow-lime-500/50 -inset-[24vh] rounded-full size-[148vh] z-[7]"
            variants={variants.item}
          />
          <motion.div
            className="absolute bg-green-500 shadow-[0_0_16vh_4vh] shadow-green-500/50 -inset-[32vh] rounded-full size-[164vh] z-[6]"
            variants={variants.item}
          />
          <motion.div
            className="absolute bg-emerald-500 shadow-[0_0_16vh_4vh] shadow-emerald-500/50 -inset-[40vh] rounded-full size-[180vh] z-[5]"
            variants={variants.item}
          />
          <motion.div
            className="absolute bg-teal-500 shadow-[0_0_16vh_4vh] shadow-teal-500/50 -inset-[48vh] rounded-full size-[196vh] z-[4]"
            variants={variants.item}
          />
          <motion.div
            className="absolute bg-cyan-500 shadow-[0_0_16vh_4vh] shadow-cyan-500/50 -inset-[56vh] rounded-full size-[212vh] z-[3]"
            variants={variants.item}
          />
          <motion.div
            className="absolute bg-sky-500 shadow-[0_0_16vh_4vh] shadow-sky-500/50 -inset-[64vh] rounded-full size-[228vh] z-[2]"
            variants={variants.item}
          />
          <motion.div
            className="absolute bg-blue-500 shadow-[0_0_16vh_4vh] shadow-blue-500/50 -inset-[72vh] rounded-full size-[244vh] z-[1]"
            variants={variants.item}
          />
          <motion.div
            className="absolute bg-indigo-500 shadow-[0_0_16vh_4vh] shadow-indigo-500/50 -inset-[80vh] rounded-full size-[260vh] z-[0]"
            variants={variants.item}
          />
        </motion.div>
      </div>
    </div>
  )
}
