"use client"

import { useState, useRef, useCallback, useEffect, useMemo, memo, type ChangeEvent } from "react"
import { Upload, Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Movie } from "@/types/movie"

export function VideoPlayer({ movie }: { movie: Movie }) {
  const [videoSrc, setVideoSrc] = useState<string>(movie.movie)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isHighRes, setIsHighRes] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const progressRef = useRef<number>(0)
  const rafRef = useRef<number | undefined>(undefined)

  // Detectar cambios de fullscreen
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
  }, [])

  // Limpiar URLs de objetos y cancelAnimationFrame al desmontar el componente
  useEffect(() => {
    return () => {
      if (videoSrc && videoSrc.startsWith('blob:')) {
        URL.revokeObjectURL(videoSrc)
      }
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [videoSrc])

  const handleFileChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      // Limpiar URL anterior si existe
      if (videoSrc && videoSrc.startsWith('blob:')) {
        URL.revokeObjectURL(videoSrc)
      }
      const newSrc = URL.createObjectURL(file)
      setVideoSrc(newSrc)
      setIsPlaying(true)
    }
  }, [videoSrc])

  const togglePlay = useCallback(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }, [isPlaying])

  const toggleMute = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }, [isMuted])

  const updateProgress = useCallback(() => {
    if (videoRef.current && videoRef.current.duration && !isNaN(videoRef.current.duration)) {
      const newProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100
      // Solo actualizar si el cambio es significativo (> 0.1%)
      if (Math.abs(newProgress - progressRef.current) > 0.1) {
        progressRef.current = newProgress
        setProgress(newProgress)
      }

      // Detectar si es video de alta resolución (4K o superior)
      if (videoRef.current.videoWidth > 1920 || videoRef.current.videoHeight > 1080) {
        setIsHighRes(true)
      }
    }
  }, [])

  const handleTimeUpdate = useCallback(() => {
    // Usar requestAnimationFrame para throttle de actualizaciones
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
    }
    rafRef.current = requestAnimationFrame(updateProgress)
  }, [updateProgress])

  const handleSeek = useCallback((value: number[]) => {
    if (videoRef.current && videoRef.current.duration && !isNaN(videoRef.current.duration)) {
      const time = (value[0] / 100) * videoRef.current.duration
      videoRef.current.currentTime = time
      // Solo actualizar si el cambio es significativo
      if (Math.abs(value[0] - progressRef.current) > 0.5) {
        progressRef.current = value[0]
        setProgress(value[0])
      }
    }
  }, [])

  const toggleFullscreen = useCallback(() => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen()
      } else {
        videoRef.current.requestFullscreen()
      }
    }
  }, [])

  const handleVideoClick = useCallback(() => {
    // Doble click para cambiar archivo
    fileInputRef.current?.click()
  }, [])

  // Memoizar el valor del slider para evitar re-renders
  const sliderValue = useMemo(() => [progress], [progress])

  // Componente memoizado para los controles de reproducción
  const PlayControls = memo(() => (
    <div className="flex items-center gap-4">
      <button
        onClick={togglePlay}
        className="text-white hover:text-primary transition-colors duration-150 transform hover:scale-110"
        style={{ willChange: 'transform' }}
      >
        {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8" />}
      </button>

      <div className="flex items-center gap-2 group/volume">
        <button
          onClick={toggleMute}
          className="text-white hover:text-primary transition-colors duration-150 transform hover:scale-110"
          style={{ willChange: 'transform' }}
        >
          {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
        </button>
      </div>
    </div>
  ))

  // Componente memoizado para los controles adicionales
  const AdditionalControls = memo(() => (
    <div className="flex items-center gap-4">
      <button
        onClick={toggleFullscreen}
        className="text-white hover:text-primary transition-colors duration-150 transform hover:scale-110"
        style={{ willChange: 'transform' }}
      >
        <Maximize className="w-6 h-6" />
      </button>
    </div>
  ))

  return (
    <div
      className="relative w-full aspect-video bg-black/90 rounded-xl overflow-hidden border border-primary/30 shadow-[0_0_30px_rgba(var(--primary),0.2)] group"
      style={{
        willChange: 'transform',
        backfaceVisibility: 'hidden',
        perspective: 1000,
        // Optimización adicional para contenedor
        contain: isFullscreen ? 'none' : 'layout style paint'
      }}
    >
      {!videoSrc ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
          <div className="p-6 rounded-full bg-primary/10 border border-primary/20 shadow-[0_0_20px_rgba(var(--primary),0.2)] animate-pulse">
            <Upload className="w-12 h-12 text-primary" />
          </div>
          <div className="text-center space-y-2">
            <h3 className="text-xl font-bold text-white">Select Local Movie</h3>
            <p className="text-white/60 text-sm">Choose a video file from your device to play</p>
          </div>
          <Button 
            onClick={() => fileInputRef.current?.click()}
            className="bg-primary hover:bg-primary/90 text-white shadow-[0_0_15px_rgba(var(--primary),0.4)]"
          >
            Browse Files
          </Button>
        </div>
      ) : (
        <>
          <video
            key={videoSrc} // Forzar re-mount cuando cambia el src
            ref={videoRef}
            src={videoSrc}
            className="w-full h-full object-contain"
            onTimeUpdate={handleTimeUpdate}
            onEnded={() => setIsPlaying(false)}
            onLoadedMetadata={updateProgress} // Actualizar progreso cuando se carga metadata
            onDoubleClick={handleVideoClick} // Doble click para cambiar archivo
            preload="metadata" // Mejor rendimiento inicial
            autoPlay
            playsInline // Mejor rendimiento en dispositivos móviles
            muted={!isMuted} // Mantener muted para autoplay
            style={{
              willChange: isFullscreen ? 'auto' : 'transform',
              backfaceVisibility: 'hidden',
              transform: 'translateZ(0)',
              imageRendering: isFullscreen ? 'auto' : 'pixelated', // Mejor rendimiento cuando no está en fullscreen
              // Optimizar calidad de renderizado basado en fullscreen y resolución
              filter: isFullscreen ? 'none' : (isHighRes ? 'contrast(1.01) blur(0.3px)' : 'none'), // Optimización para videos 4K+
            }}
          />
          
          {/* Controls Overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-out flex flex-col justify-end p-6 group-hover:pointer-events-auto pointer-events-none"
            style={{
              willChange: 'opacity',
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden'
            }}
          >
            <div className="space-y-4">
              <Slider
                value={sliderValue}
                max={100}
                step={0.1}
                onValueChange={handleSeek}
                className="cursor-pointer"
              />

              <div className="flex items-center justify-between">
                <PlayControls />
                <AdditionalControls />
              </div>
            </div>
          </div>
        </>
      )}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="video/*"
        className="hidden"
      />
    </div>
  )
}
