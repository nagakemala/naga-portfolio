'use client'

import { motion } from 'framer-motion'

export default function Page() {
  return (
    <main style={{ fontFamily: 'Arial', padding: '40px' }}>
      <motion.h1 initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}}>
        Naga Kemala
      </motion.h1>

      <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2}}>
        Photographer & Videographer since 2021
      </motion.p>

      <section style={{ marginTop: '40px' }}>
        <h2>Portfolio</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px,1fr))', gap:'16px' }}>
          <div style={{ background:'#eee', height:150 }}></div>
          <div style={{ background:'#ddd', height:150 }}></div>
          <div style={{ background:'#ccc', height:150 }}></div>
        </div>
      </section>

      <section style={{ marginTop: '40px' }}>
        <h2>Contact</h2>
        <p>Email: naga.kemala@gmail.com</p>
        <p>WA: 087771400982</p>
        <p>IG: @nagakemala</p>
      </section>
    </main>
  )
}
