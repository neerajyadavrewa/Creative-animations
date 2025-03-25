'use client'
import Link from "next/link"
import { BackgroundGradient } from "./ui/background-gradient"


function FeaturedCourses() {
  return (
    <div className="py-12 bg-gray-900">
   <div>
    <div className="text-center">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn with the best</p>
    </div>
   </div>
   <div className="mt-10">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        <div className="flex justify-center">
      <BackgroundGradient
      className="flex flex-col gap-4 rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
        <div className="p-4 sm:p-6 flex flex-col item-center text-center flex-grow text-white ">
            <p className="text-lg sm:text-xl text-black mt-2 mb-2 dark:text-neutral-200">
                Guitar course</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                you will be albe to play any song with the help of it and you will be master within few days </p>
            <Link href={"#"} className="text-white mt-2" >Learn more</Link>
        </div>
       
      </BackgroundGradient>
        </div>
        

        <div className="flex justify-center">
      <BackgroundGradient
      className="flex flex-col gap-4 rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
        <div className="p-4 sm:p-6 flex flex-col item-center text-center flex-grow text-white ">
            <p className="text-lg sm:text-xl text-black mt-2 mb-2 dark:text-neutral-200">
                Harmonium course</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                you will be albe to play any song with the help of it and you will be master within few days </p>
            <Link href={"#"} className="text-white mt-2" >Learn more</Link>
        </div>
       
      </BackgroundGradient>
        </div>

        <div className="flex justify-center">
      <BackgroundGradient
      className="flex flex-col gap-4 rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
        <div className="p-4 sm:p-6 flex flex-col item-center text-center flex-grow text-white ">
            <p className="text-lg sm:text-xl text-black mt-2 mb-2 dark:text-neutral-200">
            Veena course</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                you will be albe to play any song with the help of it and you will be master within few days </p>
            <Link href={"#"} className="text-white mt-2" >Learn more</Link>
        </div>
       
      </BackgroundGradient>
        </div>



        <div className="flex justify-center">
      <BackgroundGradient
      className="flex flex-col gap-4 rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
        <div className="p-4 sm:p-6 flex flex-col item-center text-center flex-grow text-white ">
            <p className="text-lg sm:text-xl text-black mt-2 mb-2 dark:text-neutral-200">
                Flute course</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                you will be albe to play any song with the help of it and you will be master within few days </p>
            <Link href={"#"} className="text-white mt-2" >Learn more</Link>
        </div>
       
      </BackgroundGradient>
        </div>

        <div className="flex justify-center">
      <BackgroundGradient
      className="flex flex-col gap-4 rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
        <div className="p-4 sm:p-6 flex flex-col item-center text-center flex-grow text-white ">
            <p className="text-lg sm:text-xl text-black mt-2 mb-2 dark:text-neutral-200">
                Tabla course</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                you will be albe to play any song with the help of it and you will be master within few days </p>
            <Link href={"#"} className="text-white mt-2" >Learn more</Link>
        </div>
       
      </BackgroundGradient>
        </div>
       
       



    </div>
   </div>
  
    </div>
  )
}

export default FeaturedCourses