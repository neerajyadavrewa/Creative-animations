'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
const testimonials = [
    {
      "quote": "The music school has transformed my understanding of music. The teachers are incredibly talented and supportive.",
      "name": "Anjali Kumar",
      "title": "Student"
    },
    {
      "quote": "My son has shown tremendous improvement in his piano skills since joining the school. The curriculum is well-structured and engaging.",
      "name": "Rajesh Singh",
      "title": "Parent"
    },
    {
      "quote": "As a professional musician, I found the advanced courses here to be extremely beneficial. The faculty is top-notch and the environment is inspiring.",
      "name": "Sonia Mehta",
      "title": "Professional Musician"
    },
    {
      "quote": "The school's approach to teaching music is both innovative and effective. I've learned so much in such a short time.",
      "name": "Arjun Patel",
      "title": "Student"
    },
    {
      "quote": "Our collaboration with the music school for community events has been a great success. Their students are well-prepared and professional.",
      "name": "Priya Sharma",
      "title": "Event Organizer"
    }
  ]
  


function MovingCard() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
   <h2 className="text-3xl font-bold text-center mb-8 z-10 text-white">Hear our Harmony:Voices of success</h2>
   <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
    <div className="w-full max-w-6xl">
    <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
   </div>
    </div>
  )
}

export default MovingCard