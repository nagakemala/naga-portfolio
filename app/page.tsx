'use client';
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Portfolio() {
  const name = 'Naga Kemala'
  const since = 2021
  const email = 'email@example.com' // ganti dengan email kamu
  const whatsapp = '+62 812 3456 7890' // ganti dengan nomor WA kamu (format internasional)
  const instagram = 'https://instagram.com/yourhandle' // ganti

  const whatsappDigits = Array.from(whatsapp).filter(c => '0123456789'.includes(c)).join('')

  const items = [
    // Ganti src dengan path gambar/video milikmu atau hosting CDN
    { id: 1, type: 'photo', category: 'Product', title: 'Minimal Product Shot', src: '/images/product-1.jpg' },
    { id: 2, type: 'video', category: 'Product', title: '360 Product Reel', src: '/videos/product-1.mp4' },
    { id: 3, type: 'photo', category: 'Event', title: 'Conference Coverage', src: '/images/event-1.jpg' },
    { id: 4, type: 'video', category: 'Event', title: 'Event Highlights Reel', src: '/videos/event-2.mp4' },
    { id: 5, type: 'photo', category: 'Product', title: 'Detail Shot', src: '/images/product-2.jpg' },
    { id: 6, type: 'photo', category: 'Event', title: 'Crowd Moment', src: '/images/event-2.jpg' },
  ]


const categories = ['All', 'Product', 'Event']
const [active, setActive] = useState<string>('All') // lightweight local state placeholder

  // NOTE: This single-file component is meant as a visual example.
  // If you implement in React, replace the lightweight state above with useState and real assets.

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans">
      {/* HERO */}
      <header className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-4xl md:text-5xl font-extrabold tracking-tight">
              {name}
            </motion.h1>
            <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2}} className="mt-3 max-w-xl text-neutral-600">
              Photographer & Videographer — visual storytelling since {since}. Specialising in editorial product photography and event coverage with a clean, minimalist editorial aesthetic.
            </motion.p>
            <div className="mt-6 flex gap-3">
              <a href="#portfolio" className="inline-block px-5 py-3 border rounded-full text-sm font-medium hover:shadow">View Portfolio</a>
              <a href={`mailto:${email}`} className="inline-block px-5 py-3 rounded-full text-sm font-medium bg-neutral-900 text-white">Contact</a>
            </div>
          </div>

          <div className="w-full md:w-96">
            {/* Highlight image — gantikan dengan hero image milikmu */}
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border bg-neutral-100">
              <img alt="hero" src="/images/hero.jpg" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </header>

      {/* FILTER & PORTFOLIO */}
      <main id="portfolio" className="max-w-7xl mx-auto px-6 pb-20">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold">Portfolio</h2>
          <p className="text-neutral-600 mt-2">Product & Event — curated selection. Klik gambar untuk memperbesar atau memutar video.</p>

          {/* Category pills */}
          <div className="mt-6 flex gap-3">
            {categories.map(cat => (
              <button key={cat} onClick={() => setActive(cat)} className={`px-4 py-2 rounded-full text-sm ${cat === active ? 'bg-neutral-900 text-white' : 'bg-neutral-100 text-neutral-700'}`}>
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Grid */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.filter(it => active === 'All' ? true : it.category === active).map(item => (
              <article key={item.id} className="rounded-xl overflow-hidden border bg-white shadow-sm">
                <div className="relative h-64 bg-neutral-50">
                  {item.type === 'photo' ? (
                    <img src={item.src} alt={item.title} className="object-cover w-full h-full" />
                  ) : (
                    <video controls className="object-cover w-full h-full">
                      <source src={item.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-xs text-neutral-500 mt-1">{item.category} • {item.type === 'photo' ? 'Photo' : 'Video'}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* ABOUT + PACKAGES */}
      <section className="max-w-6xl mx-auto px-6 py-16 bg-neutral-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold">About — {name}</h2>
            <p className="mt-4 text-neutral-600">Saya memulai fotografi dan videografi sejak {since}. Fokus pada narasi visual, detail produk, dan momen event. Gaya editorial—bersih, minimalis, dan siap dipajang di katalog atau media brand.</p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 bg-white rounded-lg border">
                <div className="text-sm text-neutral-500">Layanan</div>
                <div className="font-semibold mt-1">Foto & Video</div>
              </div>
              <div className="p-4 bg-white rounded-lg border">
                <div className="text-sm text-neutral-500">Khusus</div>
                <div className="font-semibold mt-1">Product, Event</div>
              </div>
              <div className="p-4 bg-white rounded-lg border">
                <div className="text-sm text-neutral-500">Availability</div>
                <div className="font-semibold mt-1">By request</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium">Packages — contoh</h3>
            <div className="mt-4 space-y-3">
              <div className="p-4 bg-white rounded-lg border">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm text-neutral-500">Product Mini</div>
                    <div className="font-semibold">1 Photo Set + 1 Short Reel</div>
                  </div>
                  <div className="text-sm font-medium">IDR 1.5jt</div>
                </div>
              </div>
              <div className="p-4 bg-white rounded-lg border">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm text-neutral-500">Event Basic</div>
                    <div className="font-semibold">3 Hours Coverage + Highlights</div>
                  </div>
                  <div className="text-sm font-medium">IDR 3.5jt</div>
                </div>
              </div>
              <div className="p-4 bg-white rounded-lg border">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm text-neutral-500">Custom</div>
                    <div className="font-semibold">Tailored to brand needs</div>
                  </div>
                  <div className="text-sm font-medium">Request</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold">Work with me</h2>
            <p className="text-neutral-600 mt-2">Untuk project atau pertanyaan—hubungi lewat email atau WhatsApp. Saya biasanya membalas dalam 24–48 jam.</p>

            <div className="mt-6 space-y-3">
              <div className="p-4 rounded-lg border bg-white">
                <div className="text-sm text-neutral-500">Email</div>
                <div className="font-medium mt-1"><a href={`mailto:${email}`}>{email}</a></div>
              </div>

              <div className="p-4 rounded-lg border bg-white">
                <div className="text-sm text-neutral-500">WhatsApp</div>
                <div className="font-medium mt-1"><a href={`https://wa.me/${whatsappDigits}`} target="_blank" rel="noreferrer">Chat via WhatsApp</a></div>
              </div>

              <div className="p-4 rounded-lg border bg-white">
                <div className="text-sm text-neutral-500">Instagram</div>
                <div className="font-medium mt-1"><a href={instagram} target="_blank" rel="noreferrer">@{instagram.split('/').pop()}</a></div>
              </div>
            </div>
          </div>

          <div>
            {/* Simple contact form (non-booking) — form ini hanya contoh, jika mau aktifkan perlu backend/Netlify Forms*/}
            <form className="bg-white border rounded-lg p-6 space-y-4">
              <div>
                <label className="text-sm text-neutral-600">Nama</label>
                <input className="w-full mt-2 border rounded px-3 py-2" placeholder="Nama lengkap" />
              </div>
              <div>
                <label className="text-sm text-neutral-600">Email</label>
                <input className="w-full mt-2 border rounded px-3 py-2" placeholder="email@domain.com" />
              </div>
              <div>
                <label className="text-sm text-neutral-600">Pesan singkat</label>
                <textarea className="w-full mt-2 border rounded px-3 py-2" placeholder="Deskripsikan project singkat..." rows={4} />
              </div>
              <div className="flex justify-end">
                <button type="button" className="px-4 py-2 rounded-full bg-neutral-900 text-white">Kirim</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} {name}. All rights reserved • Built with a clean editorial minimal aesthetic.
      </footer>

      {/* Notes for implementation */}
      <div style={{display:'none'}}>
        {/*
          IMPLEMENTATION NOTES:
          - Replace the lightweight category state with React useState.
          - Replace placeholder image/video src with your uploaded assets (e.g. /assets/product-1.jpg).
          - To host for free: use Vercel or Netlify. Push this as a Next.js or Create-React-App project.
          - For large video files use a CDN or YouTube/Vimeo embed for faster loading.
          - Accessibility: add alt text and captions for videos.
        */}
export default function Page() {
  return <div>...</div>
}

      </div>
    </div>
  )
}
