"use client"

import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-[#0a0e1a] border-t border-white/5 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Star Movie */}
          <div>
            <h3 className="text-white font-bold mb-4">Star Movie</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/60 hover:text-primary transition-colors text-sm">
                  Movies
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-primary transition-colors text-sm">
                  TV Series
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-primary transition-colors text-sm">
                  Trailers
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-primary transition-colors text-sm">
                  DMCA
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-primary transition-colors text-sm">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-primary transition-colors text-sm">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>

          {/* Genres */}
          <div>
            <h3 className="text-white font-bold mb-4">Genres</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/60 hover:text-primary transition-colors text-sm">
                  Action
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-primary transition-colors text-sm">
                  Animation
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-primary transition-colors text-sm">
                  Fantasy
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-primary transition-colors text-sm">
                  Horror
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-primary transition-colors text-sm">
                  Musical
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-primary transition-colors text-sm">
                  Mystery
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-primary transition-colors text-sm">
                  Comedy
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div className="md:col-span-2">
            <h3 className="text-white font-bold mb-4">Subscribe</h3>
            <p className="text-white/60 text-sm mb-4">
              Subscribe to mailing list to get new updates on movies, tv-series and news of top movies.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
              />
              <Button className="bg-primary hover:bg-primary/90 text-white px-6">SUBSCRIBE</Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-white/60 text-sm">Social Link</span>
              <div className="flex gap-3">
                <a href="#" className="text-white/70 hover:text-primary transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-white/70 hover:text-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-white/70 hover:text-primary transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-white/70 hover:text-primary transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-white/60 text-sm mb-1">Copyright © 2025</p>
              <p className="text-white/60 text-sm">
                Copyright © Designed and developed by{" "}
                <a href="#" className="text-primary hover:text-primary/80">
                  v0
                </a>
              </p>
              <p className="text-white/40 text-xs mt-1">
                Disclaimer: This site does not store any files on its server. All contents are provided by
                non-affiliated third parties.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
