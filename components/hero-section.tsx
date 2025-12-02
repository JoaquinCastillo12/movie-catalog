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

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-3xl space-y-6">
          {/* TODO: REPLACE GENERIC TEXT - Update welcome message */}
          <p className="text-white/80 text-sm uppercase tracking-wider font-medium drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            Welcome to Our movie site
          </p>
          <h1 className="text-6xl font-bold text-balance drop-shadow-2xl">
            <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">OUR SPECIAL </span>
            <span className="text-primary drop-shadow-[0_0_25px_rgba(var(--primary),0.6)]">MOVIES</span>
          </h1>
          {/* TODO: REPLACE GENERIC TEXT - Add actual description */}
          <p className="text-white/70 text-lg max-w-2xl mx-auto text-pretty leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
            standard dummy text ever since the 1500s, when an unknown
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base rounded-full shadow-[0_0_20px_rgba(var(--primary),0.5)] hover:shadow-[0_0_30px_rgba(var(--primary),0.7)] transition-all duration-300 border border-primary/20">
            Read more →
          </Button>
        </div>
      </div>
    </section>
  )
}
