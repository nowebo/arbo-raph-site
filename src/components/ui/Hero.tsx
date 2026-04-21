import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'

export default function Hero() {
  const wrapRef    = useRef<HTMLDivElement>(null)
  const videoRef   = useRef<HTMLVideoElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const textRef    = useRef<HTMLDivElement>(null)
  const [showNumber, setShowNumber] = useState(false)

  useEffect(() => {
    const wrap    = wrapRef.current
    const video   = videoRef.current
    const overlay = overlayRef.current
    const text    = textRef.current
    if (!wrap || !video || !overlay || !text) return

    /* ── 1. Cercle s'agrandit au chargement ── */
    gsap.fromTo(wrap,
      { clipPath: 'circle(8% at 50% 50%)' },
      {
        clipPath: 'circle(150% at 50% 50%)',
        duration: 1.6,
        ease: 'power2.inOut',
        delay: 0.2,
        onComplete: () => {
          video.currentTime = 0
          video.play()
        },
      }
    )

    /* ── 2. Quand la vidéo se termine : overlay + texte ── */
    const onEnded = () => {
      const tl = gsap.timeline()

      /* Assombrir le fond */
      tl.fromTo(overlay,
        { opacity: 0 },
        { opacity: 1, duration: 1.0, ease: 'power2.inOut' }
      )

      /* Texte : zoom depuis légèrement plus petit + fade */
      tl.fromTo(text,
        { opacity: 0, scale: 0.88, y: 12 },
        { opacity: 1, scale: 1, y: 0, duration: 0.9, ease: 'power3.out' },
        '-=0.4'
      )
    }

    video.addEventListener('ended', onEnded)
    return () => video.removeEventListener('ended', onEnded)
  }, [])

  return (
    <section id="hero" className="relative h-screen overflow-hidden bg-white">

      {/* Cercle vidéo */}
      <div
        ref={wrapRef}
        className="absolute inset-0"
        style={{ clipPath: 'circle(8% at 50% 50%)', willChange: 'clip-path' }}
      >
        <video
          ref={videoRef}
          src="/videos/hero.mp4"
          preload="auto"
          muted
          playsInline
          disablePictureInPicture
          className="w-full h-full object-cover"
        />

        {/* Overlay sombre — apparaît après la vidéo */}
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"
          style={{ opacity: 0 }}
        />
      </div>

      {/* Texte blanc — apparaît après la vidéo */}
      <div
        ref={textRef}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 text-white pointer-events-none"
        style={{ opacity: 0, scale: '0.88' }}
      >
        <div className="flex items-center gap-4 mb-5">
          <div className="h-px w-12 bg-white/40" />
          <span className="text-[11px] uppercase tracking-[0.35em] text-white/60 font-light">
            Saint‑Dié‑des‑Vosges · Vosges
          </span>
          <div className="h-px w-12 bg-white/40" />
        </div>

        <h1
          className="text-6xl md:text-8xl font-bold leading-none mb-4 text-white"
          style={{ letterSpacing: '-0.03em' }}
        >
          Arbo Raph
        </h1>
        <p className="text-2xl md:text-3xl font-extralight text-white/80 tracking-[0.12em] mb-3">
          Paysagiste · Élagage
        </p>
        <p className="text-sm text-white/50 font-light tracking-widest mb-10 uppercase">
          Spécialiste de l'arbre &amp; du jardin dans les Vosges
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center pointer-events-auto">
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
            href="#contact"
            className="bg-[#4a7c3f] hover:bg-[#3a6230] text-white font-medium px-9 py-3.5 rounded-full shadow-2xl hover:scale-105 transition-transform text-sm tracking-[0.2em] uppercase"
          >
            Devis gratuit
          </a>
        </div>
      </div>

      {/* Indicateur scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
        <span className="text-[9px] text-gray-400 uppercase tracking-[0.4em]">Défiler</span>
        <div className="w-px h-10 bg-gradient-to-b from-gray-300 to-transparent" />
      </div>

    </section>
  )
}
