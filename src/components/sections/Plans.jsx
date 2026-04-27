import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

import promoEstudiante from "../../assets/img/promo_estudiante.png";
import promoVecino from "../../assets/img/promo_vecino.png";
import promoDuo from "../../assets/img/promo_duo.png";

export default function Plans({ scrollTo }) {
  const plans = [
    { 
      title: "Promo Estudiante", 
      price: "S/ 60", 
      desc: "¡Ponte fuerte cerca de ti!", 
      feats: ['Sin matrícula', 'Eres bienvenido', 'Presenta tu carnet'], 
      image: promoEstudiante 
    },
    { 
      title: "Promo Vecino", 
      price: "S/ 60", 
      desc: "¡Fuerza real, cerca de ti!", 
      feats: ['Sin matrícula', 'Eres bienvenido', 'Rutinas guiadas', '+Comunidad'], 
      featured: true,
      image: promoVecino 
    },
    { 
      title: "Plan Duo", 
      price: "S/ 110", 
      desc: "Entrena en pareja y ahorra", 
      feats: ['Precio especial en pareja', 'Ideal para amigos y parejas'], 
      image: promoDuo 
    }
  ];

  return (
    <section id="Planes" className="py-20 bg-zinc-950 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {plans.map((p, i) => (
          <motion.div 
            key={i}
            // Efecto de entrada al hacer scroll
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            // Efecto al pasar el mouse
            whileHover={{ y: -10 }}
            className={`relative p-8 border ${p.featured ? 'border-2 border-red-600 bg-zinc-900' : 'border-zinc-800 bg-zinc-900/50'} transition-all`}
          >
            <div className="w-full h-auto overflow-hidden mb-6 flex justify-center items-center bg-gray-100">
              <img src={p.image} alt={p.title} className="w-full h-auto object-contain" />
            </div>

            {/* Etiqueta opcional para el destacado */}
            {p.featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-[10px] px-3 py-1 font-black italic uppercase tracking-widest text-white">
                Recomendado
              </span>
            )}
            
            <h3 className="text-sm text-zinc-500 font-bold uppercase tracking-widest mb-2">{p.desc}</h3>
            <h4 className="text-2xl font-black uppercase italic mb-6">{p.title}</h4>
            
            <div className="mb-8">
              <span className="text-5xl font-black text-white italic">{p.price}</span>
              <span className="text-zinc-500 ml-2 italic">/mes</span>
            </div>

            <ul className="space-y-4 mb-10 border-t border-zinc-800 pt-8">
              {p.feats.map(f => (
                <li key={f} className="flex items-center gap-3 text-xs font-bold uppercase italic text-zinc-300">
                  <CheckCircle2 className="text-red-600 w-4 h-4 flex-shrink-0" /> {f}
                </li>
              ))}
            </ul>

            <button 
              onClick={() => scrollTo('contacto')} 
              className={`w-full py-4 font-black italic uppercase transition-all ${p.featured ? 'bg-red-600 hover:bg-red-500 text-white' : 'bg-zinc-800 hover:bg-zinc-700 text-white'}`}
            >
              Elegir Plan
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}