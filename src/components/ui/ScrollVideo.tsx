import { useRef, useEffect, useState } from 'react'

export default function ScrollVideo() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const onLoaded = () => setReady(true)
    video.addEventListener('loadedmetadata', onLoaded)
    return () => video.removeEventListener('loadedmetadata', onLoaded)
  }, [])

  useEffect(() => {
    if (!ready) return
    const section = sectionRef.current
    const video = videoRef.current
    if (!section || !video) return

    const handleScroll = () => {
      const rect = section.getBoundingClientRect()
      const scrollHeight = section.offsetHeight - window.innerHeight
      const scrolled = -rect.top
      const progress = Math.max(0, Math.min(1, scrolled / scrollHeight))
      if (video.duration) {
        video.currentTime = progress * video.duration
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [ready])

  return (
    <div ref={sectionRef} style={{ height: '300vh' }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <video
          ref={videoRef}
          src="/videos/hero.mp4"
          preload="auto"
          muted
          playsInline
          disablePictureInPicture
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay with text */}
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-end pb-20 pointer-events-none">
          <div className="text-center text-white pointer-events-auto">
            <p className="text-sm uppercase tracking-widest text-green-300 mb-2">Faites défiler pour découvrir</p>
            <div className="w-px h-10 bg-white/50 mx-auto animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  )
}
