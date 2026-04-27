import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const cities = [
  { name: 'Saulcy-sur-Meurthe', lat: 48.2892, lng: 6.9681, main: true },
  { name: 'Saint-Dié-des-Vosges', lat: 48.2833, lng: 6.9500 },
  { name: 'Épinal', lat: 48.1742, lng: 6.4494 },
  { name: 'Remiremont', lat: 48.0167, lng: 6.5833 },
  { name: 'Gérardmer', lat: 48.0717, lng: 6.8790 },
  { name: 'Bruyères', lat: 48.2000, lng: 6.7167 },
  { name: "Raon-l'Étape", lat: 48.4000, lng: 6.8500 },
  { name: 'Senones', lat: 48.3940, lng: 7.0520 },
]

const zones = [
  {
    color: '#2d5a27',
    label: 'Saint-Dié & Environs',
    desc: 'Siège social — intervention rapide en milieu urbain et péri-urbain',
  },
  {
    color: '#4a7c3f',
    label: 'Épinal & Vallée de la Moselle',
    desc: 'Expertise paysagère pour les domaines résidentiels et agricoles',
  },
  {
    color: '#6aab5e',
    label: 'Massif Vosgien',
    desc: 'Abattage et élagage en terrain pentu — Gérardmer, Remiremont et alentours',
  },
]

export default function ZoneIntervention() {
  const mapRef = useRef<HTMLDivElement>(null)
  const instanceRef = useRef<L.Map | null>(null)

  useEffect(() => {
    if (!mapRef.current || instanceRef.current) return

    const map = L.map(mapRef.current, {
      center: [48.22, 6.72],
      zoom: 9,
      zoomControl: true,
      scrollWheelZoom: false,
    })

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 18,
    }).addTo(map)

    cities.forEach(city => {
      const size = city.main ? 16 : 11
      const color = city.main ? '#2d5a27' : '#4a7c3f'
      const icon = L.divIcon({
        className: '',
        html: `<div style="
          background:${color};
          width:${size}px;height:${size}px;
          border-radius:50%;
          border:2.5px solid white;
          box-shadow:0 2px 8px rgba(0,0,0,0.35);
        "></div>`,
        iconSize: [size, size],
        iconAnchor: [size / 2, size / 2],
      })

      L.marker([city.lat, city.lng], { icon })
        .addTo(map)
        .bindPopup(
          `<div style="font-family:'Open Sans',sans-serif;padding:2px 4px">
            <strong style="color:#2d5a27;font-size:13px">${city.name}</strong>
            ${city.main ? '<br><span style="font-size:11px;color:#888">Siège social</span>' : ''}
          </div>`,
          { maxWidth: 180 }
        )
    })

    instanceRef.current = map
    return () => {
      map.remove()
      instanceRef.current = null
    }
  }, [])

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-14 items-start">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#4a7c3f] font-semibold mb-3">Déplacements</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
              Nos Zones<br />d'Intervention
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Nous intervenons dans tout le département des Vosges (88) et ses alentours,
              auprès des particuliers comme des professionnels.
            </p>

            <div className="space-y-5">
              {zones.map((z) => (
                <div key={z.label} className="flex items-start gap-4">
                  <div className="w-1 h-12 rounded-full shrink-0 mt-0.5" style={{ backgroundColor: z.color }} />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm mb-1">{z.label}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{z.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact"
              className="mt-8 inline-flex items-center gap-2 bg-[#2d5a27] hover:bg-[#1e3d1a] text-white font-semibold px-7 py-3.5 rounded-full text-sm transition-colors">
              Vérifier ma zone
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg h-96 border border-gray-100">
            <div ref={mapRef} className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
