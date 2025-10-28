"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/cinematic-movie-scene-dark.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e1a] via-[#0a0e1a]/80 to-transparent" />
      </div>

      {/* Navigation Arrows */}
      <button className="absolute left-8 top-1/2 -translate-y-1/2 text-primary hover:text-primary/80 transition-colors z-10">
        <ChevronLeft className="w-12 h-12" />
      </button>
      <button className="absolute right-8 top-1/2 -translate-y-1/2 text-primary hover:text-primary/80 transition-colors z-10">
        <ChevronRight className="w-12 h-12" />
      </button>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-3xl space-y-6">
          <p className="text-white/80 text-sm uppercase tracking-wider">Welcome to Our movie site</p>
          <h1 className="text-6xl font-bold text-balance">
            <span className="text-white">OUR SPECIAL </span>
            <span className="text-primary">MOVIES</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto text-pretty">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
            standard dummy text ever since the 1500s, when an unknown
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base rounded-full">
            Read more →
          </Button>
        </div>
      </div>
    </section>
  )
}
