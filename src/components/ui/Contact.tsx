import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({
    prenom: '', nom: '', email: '', telephone: '', message: '',
    acceptContact: false, acceptCgv: false,
  })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="py-14 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="text-3xl font-bold text-[#2d5a27] mb-2">Recevoir mon devis gratuit</h2>
            <p className="text-gray-500 text-sm mb-6">Remplissez le formulaire, nous vous répondons rapidement.</p>

            {sent ? (
              <div className="bg-[#f4f9f2] border border-[#4a7c3f] rounded-lg p-8 text-center">
                <div className="text-4xl mb-3">✅</div>
                <p className="font-semibold text-[#2d5a27]">Votre demande a bien été envoyée !</p>
                <p className="text-gray-600 text-sm mt-1">Nous vous contacterons dans les plus brefs délais.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Prénom *</label>
                    <input
                      type="text" required
                      value={form.prenom}
                      onChange={e => setForm({ ...form, prenom: e.target.value })}
                      className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#4a7c3f]"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Nom *</label>
                    <input
                      type="text" required
                      value={form.nom}
                      onChange={e => setForm({ ...form, nom: e.target.value })}
                      className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#4a7c3f]"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">E-mail *</label>
                  <input
                    type="email" required
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#4a7c3f]"
                    placeholder="votre@email.fr"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Téléphone</label>
                  <input
                    type="tel"
                    value={form.telephone}
                    onChange={e => setForm({ ...form, telephone: e.target.value })}
                    className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#4a7c3f]"
                    placeholder="06 XX XX XX XX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Votre message *</label>
                  <textarea
                    required rows={4}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#4a7c3f] resize-none"
                    placeholder="Décrivez votre besoin..."
                  />
                </div>

                <div className="space-y-2">
                  <label className="flex items-start gap-2 text-sm text-gray-600 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.acceptContact}
                      onChange={e => setForm({ ...form, acceptContact: e.target.checked })}
                      className="mt-0.5 accent-[#4a7c3f]"
                    />
                    J'accepte d'être recontacté par téléphone
                  </label>
                  <label className="flex items-start gap-2 text-sm text-gray-600 cursor-pointer">
                    <input
                      type="checkbox" required
                      checked={form.acceptCgv}
                      onChange={e => setForm({ ...form, acceptCgv: e.target.checked })}
                      className="mt-0.5 accent-[#4a7c3f]"
                    />
                    J'accepte les conditions générales d'utilisation *
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#e07b2a] hover:bg-[#c5681c] text-white font-bold py-3.5 rounded text-sm transition-colors"
                >
                  Recevoir mon devis gratuit
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-xl font-bold text-[#2d5a27] mb-4">Nous contacter</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📞</span>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-semibold tracking-wide">Téléphone</p>
                    <a href="tel:0379496140" className="font-bold text-[#2d5a27] hover:underline">
                      03 79 49 61 40
                    </a>
                    <p className="text-xs text-gray-400">Appel non surtaxé</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-semibold tracking-wide">Email</p>
                    <a href="mailto:arbo.raph@orange.fr" className="text-[#4a7c3f] hover:underline text-sm">
                      arbo.raph@orange.fr
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-semibold tracking-wide">Adresse</p>
                    <p className="text-sm text-gray-700">
                      6 rue Pair<br />
                      88580 SAULCY SUR MEURTHE
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-gray-100 rounded-lg h-52 flex items-center justify-center border border-gray-200">
              <div className="text-center text-gray-400">
                <div className="text-4xl mb-2">🗺️</div>
                <p className="text-sm">Saulcy-sur-Meurthe<br />Vosges (88)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
