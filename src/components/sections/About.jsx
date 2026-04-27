import { motion } from "framer-motion";
import { Zap, Target, Users } from "lucide-react"; 

import identidad from "../../assets/img/identidad.png";

export default function About() {
  const pilares = [
    { icon: Zap, text: "Potencia tu fuerza bruta" },
    { icon: Target, text: "Resultados reales, sin excusas" },
    { icon: Users, text: "Una comunidad de guerreros" },
  ];

  return (
    <section id="Sobre-Nosotros" className="py-20 bg-zinc-900 border-b border-zinc-800 w-full overflow-hidden">
      {/* max-w-7xl mantiene el alineamiento; gap-12-16 para un respiro visual */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* COLUMNA DE IMAGEN: Animación y Responsividad mejorada */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }} 
          className="relative order-2 md:order-1 flex justify-center md:justify-start"
        >
          {/* Contenedor con borde y sombra para efecto "vendedor" */}
          <div className="bg-zinc-800 p-2 shadow-2xl shadow-black/30 w-full max-w-md md:max-w-full">
            <img 
              src={identidad} 
              alt="Identidad Fierros" 
              // w-full asegura responsividad; grayscale-0 por defecto para vender impacto
              className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
            />
          </div>
          {/* Un adorno visual naranja detrás */}
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-red-600 z-[-1] hidden md:block"></div>
        </motion.div>

        {/* COLUMNA DE TEXTO: Storytelling Potente e Íconos */}
        <div className="order-1 md:order-2 flex flex-col text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {/* Superíndice más legible */}
            <span className="text-red-500 font-bold tracking-[0.4em] uppercase mb-4 block text-[10px] md:text-xs">
              Misión • El Templo del Poder
            </span>
            
            {/* Título Responsivo y Agresivo (text-5xl a text-7xl) */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase italic mb-8 tracking-tighter leading-none">
              Fierros <br />
              <span className="text-red-600 italic">Club</span>
            </h2>
          </motion.div>

          {/* Trayectoria: Texto persuasivo, narrativo y "vendedor" */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-zinc-300 text-base md:text-lg lg:text-xl leading-relaxed mb-12 max-w-2xl mx-auto md:mx-0"
          >
            Forgiados en el corazón de Huancayo, Fierros Club no es solo un gimnasio; es un movimiento de 
            <span className="text-white font-bold italic">Fuerza Real</span>. 
            Con años de trayectoria, entendemos que el poder no se regala, se conquista gota a gota, 
            repetición tras repetición. No vendemos promesas vacías; proporcionamos el templo donde 
            <span className="text-red-600 font-bold italic">forjarás un cuerpo legendario</span>. 
            Aquí no hay excusas, solo resultados crudos y poderosos.
          </motion.p>

          {/* Beneficios Clave: Usando iconos de lucide-react (Check installation) */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12"
          >
            {pilares.map((p, i) => (
              <div key={i} className="flex items-center gap-3 md:flex-col md:text-center p-4 bg-zinc-800/50 border border-zinc-800 rounded-sm">
                <p.icon className="w-8 h-8 md:w-10 md:h-10 text-red-600 flex-shrink-0" strokeWidth={1.5} />
                <span className="text-xs md:text-sm font-bold uppercase italic tracking-wider text-zinc-100">{p.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Botón de Acción Directa */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="flex md:justify-start justify-center"
          >
          </motion.div>
        </div>

      </div>
    </section>
  );
}