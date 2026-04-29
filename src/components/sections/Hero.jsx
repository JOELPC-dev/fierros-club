import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import videoClub from "../../assets/img/video_club.mp4";

export default function Hero({ scrollTo }) {
  return (
    <> {/* Fragmento necesario para envolver múltiples secciones */}
      
      {/* SECCIÓN HERO (INTACTA) */}
      <section id="home" className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0 bg-zinc-950">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2070" 
            className="w-full h-full object-cover opacity-30 grayscale" 
            alt="Gym" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-red-500 font-black tracking-[0.4em] uppercase mb-6 block text-sm">
              Fuerza Real • El Templo del Poder
            </span>
            <h1 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-[0.8] mb-8">
              En fierros club <br /><span className="text-red-600 italic">entrenas</span> <br /> de verdad
            </h1>
            <div className="flex gap-6">
              <button 
                onClick={() => scrollTo('contacto')} 
                className="px-10 py-5 bg-red-600 font-black uppercase italic text-xl flex items-center gap-3 hover:bg-red-500 transition-all"
              >
                Prueba Gratis <ArrowRight />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECCIÓN DE VIDEO Y DISCIPLINA (NUEVA) */}
      <section className="bg-zinc-950 py-16 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-10 bg-zinc-900/30 p-8 rounded-sm border border-zinc-800/50"
          >
            {/* CONTENEDOR DEL VIDEO */}
            <div className="relative w-full md:w-80 aspect-video md:aspect-square bg-black overflow-hidden border-2 border-red-600 shadow-[0_0_25px_rgba(220,38,38,0.15)] group">
              <video 
                controls 
                autoPlay 
                muted 
                loop 
                playsInline
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
              >
                <source src={videoClub} type="video/mp4" />
                Tu navegador no soporta videos.
              </video>
            </div>

            {/* TEXTO ACOMPAÑANTE */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-white font-black text-3xl md:text-5xl uppercase tracking-tighter leading-none mb-4 italic">
                Trabajamos con <span className="text-red-600">disciplina</span>
              </h3>
              <p className="text-zinc-400 text-lg md:text-xl font-light italic max-w-xl leading-relaxed">
                "No solo te damos las herramientas, <span className="text-white font-bold">apoyamos a formarte</span> como un guerrero de elite. Forjamos el carácter que te define."
              </p>
              
              <div className="mt-8 flex items-center justify-center md:justify-start gap-4">
                <div className="h-[3px] w-16 bg-red-600"></div>
                <span className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-zinc-500 font-black">
                  Fierros Club Mentality
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </>
  );
}