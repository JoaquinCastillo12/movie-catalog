"use client"

import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function Navigation() {
  return (
    <header className="bg-[#0a0e1a]/95 backdrop-blur-sm border-b border-primary/20 sticky top-0 z-50 shadow-[0_4px_20px_-10px_rgba(var(--primary),0.3)]">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="text-3xl font-bold drop-shadow-[0_0_10px_rgba(var(--primary),0.5)]">
              <span className="text-primary">M</span>
              <span className="text-white">OVIE</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a href="https://www.facebook.com" className="text-white/70 hover:text-primary transition-colors hover:drop-shadow-[0_0_8px_rgba(var(--primary),0.8)]">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com" className="text-white/70 hover:text-primary transition-colors hover:drop-shadow-[0_0_8px_rgba(var(--primary),0.8)]">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.twitter.com" className="text-white/70 hover:text-primary transition-colors hover:drop-shadow-[0_0_8px_rgba(var(--primary),0.8)]">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://www.youtube.com" className="text-white/70 hover:text-primary transition-colors hover:drop-shadow-[0_0_8px_rgba(var(--primary),0.8)]">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
