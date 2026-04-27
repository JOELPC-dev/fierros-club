import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero({ scrollTo }) {
  return (
    <section id="home" className="relative h-screen flex items-center">
      <div className="absolute inset-0 z-0 bg-zinc-950">
        <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2070" className="w-full h-full object-cover opacity-30 grayscale" alt="Gym" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <span className="text-red-500 font-black tracking-[0.4em] uppercase mb-6 block text-sm">Fuerza Real • El Templo del Poder</span>
          <h1 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-[0.8] mb-8">
            En fierros club <br /><span className="text-red-600 italic">entrenas</span> <br /> de verdad
          </h1>
          <div className="flex gap-6">
            <button onClick={() => scrollTo('contacto')} className="px-10 py-5 bg-red-600 font-black uppercase italic text-xl flex items-center gap-3 hover:bg-red-500 transition-all">
              Prueba Gratis <ArrowRight />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}