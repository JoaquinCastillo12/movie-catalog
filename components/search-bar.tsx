"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative max-w-3xl mx-auto">
      <Input
        type="text"
        placeholder="Buscar películas..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-14 pl-6 pr-32 bg-white/5 border-white/10 text-white placeholder:text-white/40 text-lg rounded-full focus:bg-white/10 transition-colors"
      />
      <Button
        size="lg"
        className="absolute right-1 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary/90 text-white rounded-full px-8"
      >
        <Search className="w-5 h-5 mr-2" />
        SEARCH
      </Button>
    </div>
  )
}
