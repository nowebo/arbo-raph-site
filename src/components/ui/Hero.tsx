import { useRef, useEffect, useState } from 'react'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [progress, setProgress] = useState(0)
  const [showNumber, setShowNumber] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    const video = videoRef.current
    if (!section || !video) return

    let rafId: number

    const update = () => {
      const rect = section.getBoundingClientRect()
      const scrollable = section.offsetHeight - window.innerHeight
      const scrolled = Math.max(0, -rect.top)
      const p = scrollable > 0 ? Math.min(1, scrolled / scrollable) : 0

      setProgress(p)

      if (video.readyState >= 2 && video.duration) {
        video.currentTime = p * video.duration
      }

      rafId = requestAnimationFrame(update)
    }

    rafId = requestAnimationFrame(update)
    return () => cancelAnimationFrame(rafId)
  }, [])

  // Opacity + slide-up for elements entering between [start, end]
  const enter = (start: number, end: number) => {
    const op = progress < start ? 0 : progress > end ? 1 : (progress - start) / (end - start)
    return {
      opacity: op,
      transform: `translateY(${(1 - op) * 22}px)`,
    }
  }

  return (
    <section ref={sectionRef} id="hero" style={{ height: '400vh' }}>
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* Video — currentTime driven by scroll */}
        <video
          ref={videoRef}
          src="/videos/hero.mp4"
          preload="auto"
          muted
          playsInline
          disablePictureInPicture
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay — darkens as you scroll */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/65"
          style={{ opacity: 0.25 + progress * 0.75 }}
        />

        {/* Text sequence */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 text-white">

          {/* Step 1 — location */}
          <div style={enter(0.05, 0.22)} className="flex items-center gap-4 mb-5">
            <div className="h-px w-12 bg-white/40" />
            <span className="text-[11px] uppercase tracking-[0.35em] text-white/60 font-light">
              Saint‑Dié‑des‑Vosges · Vosges
            </span>
            <div className="h-px w-12 bg-white/40" />
          </div>

          {/* Step 2 — main title */}
          <h1
            className="text-6xl md:text-8xl font-bold leading-none mb-4 text-white"
            style={{
              opacity: enter(0.18, 0.40).opacity,
              transform: `translateY(${(1 - (progress < 0.18 ? 0 : progress > 0.40 ? 1 : (progress - 0.18) / 0.22)) * 22}px) scale(${0.88 + 0.12 * (progress < 0.18 ? 0 : progress > 0.40 ? 1 : (progress - 0.18) / 0.22)})`,
              letterSpacing: '-0.03em',
            }}
          >
            Arbo Raph
          </h1>

          {/* Step 3 — subtitle */}
          <p style={enter(0.32, 0.52)} className="text-2xl md:text-3xl font-extralight text-white/80 tracking-[0.12em] mb-3">
            Paysagiste · Élagage
          </p>

          {/* Step 4 — tagline */}
          <p style={enter(0.46, 0.64)} className="text-sm text-white/50 font-light tracking-widest mb-10 uppercase">
            Spécialiste de l'arbre &amp; du jardin dans les Vosges
          </p>

          {/* Step 5 — CTAs */}
          <div style={enter(0.60, 0.80)} className="flex flex-col sm:flex-row gap-3 justify-center">
            {showNumber ? (
              <a
                href="tel:0379496140"
                className="bg-white text-[#2d5a27] font-bold px-9 py-3.5 rounded-full shadow-2xl hover:scale-105 transition-transform text-base"
              >
                03 79 49 61 40
              </a>
            ) : (
              <button
                onClick={() => setShowNumber(true)}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-medium px-9 py-3.5 rounded-full transition-all text-sm tracking-[0.2em] uppercase"
              >
                Afficher le numéro
              </button>
            )}
            <a
              href="#services"
              className="bg-[#4a7c3f] hover:bg-[#3a6230] text-white font-medium px-9 py-3.5 rounded-full shadow-2xl hover:scale-105 transition-transform text-sm tracking-[0.2em] uppercase"
            >
              Devis gratuit
            </a>
          </div>
        </div>

        {/* Scroll nudge — disappears immediately on scroll */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
          style={{ opacity: Math.max(0, 1 - progress * 10) }}
        >
          <span className="text-[9px] text-white/40 uppercase tracking-[0.4em]">Défiler</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
        </div>

        {/* Progress bar */}
        <div
          className="absolute bottom-0 left-0 h-0.5 bg-[#4a7c3f]"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    </section>
  )
}
