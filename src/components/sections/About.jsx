import { motion } from "framer-motion";
import { Zap, Target, Users, Shield, Award } from "lucide-react"; 
import identidad from "../../assets/img/identidad.png";

export default function About() {
  const pilares = [
    { icon: Zap, text: "Fuerza Bruta", desc: "Potencia tu capacidad física al límite." },
    { icon: Target, text: "Resultados Reales", desc: "Sin excusas, solo cambios crudos." },
    { icon: Users, text: "Comunidad", desc: "Un clan unido por el mismo objetivo." },
  ];

  return (
    <section id="Sobre-Nosotros" className="bg-zinc-950 text-white overflow-hidden">
      
      {/* --- BLOQUE 1: INTRODUCCIÓN E IDENTIDAD --- */}
      <div className="py-24 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* COLUMNA DE IMAGEN: Efecto de profundidad profesional */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true }} 
          className="relative group"
        >
          <div className="absolute -inset-4 bg-red-600/20 rounded-xl blur-2xl group-hover:bg-red-600/30 transition-all duration-700"></div>
          <div className="relative bg-zinc-900 border border-zinc-800 p-3 shadow-2xl overflow-hidden rounded-sm">
            <img 
              src={identidad} 
              alt="Identidad Fierros" 
              className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-105" 
            />
            {/* Overlay de textura */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60"></div>
          </div>
          {/* Adorno geométrico */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-8 border-r-8 border-red-600 z-[1] hidden md:block opacity-50"></div>
        </motion.div>

        {/* COLUMNA DE TEXTO: Storytelling Potente */}
        <div className="flex flex-col">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="flex items-center gap-2 text-red-600 font-black tracking-[0.3em] uppercase mb-4 text-xs">
              <span className="w-8 h-[2px] bg-red-600"></span> Misión • El Templo
            </span>
            
            <h2 className="font-['Anton'] text-6xl md:text-8xl uppercase italic mb-8 leading-[0.9] tracking-tighter">
              FIERROS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">CLUB</span>
            </h2>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-10 border-l-2 border-zinc-800 pl-6 italic"
          >
            Forjados en el corazón de Huancayo, no somos un gimnasio convencional. Somos el santuario donde la 
            <span className="text-white font-bold text-shadow-sm"> Fuerza Real</span> se encuentra con la disciplina. 
            Aquí no vendemos promesas, proporcionamos el hierro para forjar tu <span className="text-red-500 font-bold">legado físico</span>.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {pilares.map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-zinc-900/50 border border-zinc-800 p-5 hover:border-red-600/50 transition-all group"
              >
                <p.icon className="w-8 h-8 text-red-600 mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="text-xs font-black uppercase text-white mb-1">{p.text}</h4>
                <p className="text-[10px] text-zinc-500 uppercase tracking-tighter">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* --- BLOQUE 2: BANNER DE IMPACTO --- */}
      <section 
        className="relative h-[50vh] flex items-center justify-center bg-fixed bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1350&q=80')" }}
      >
        <div className="absolute inset-0 bg-red-600/5 mix-blend-overlay"></div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-center px-4 relative z-10"
        >
          <h2 className="font-['Anton'] text-7xl md:text-9xl uppercase text-white drop-shadow-[6px_6px_0px_#E53935] tracking-tight">
            SIN EXCUSAS
          </h2>
          <p className="text-red-500 font-black italic tracking-widest uppercase mt-2 text-sm md:text-xl">
            Donde el hierro forja tu mejor versión
          </p>
        </motion.div>
      </section>

      {/* --- BLOQUE 3: HISTORIA Y CARDS --- */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-6">
            <h3 className="font-['Anton'] text-4xl uppercase border-b-4 border-red-600 inline-block mb-4">Trayectoria</h3>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Fierros Club nació como un gimnasio de barrio, creado para personas reales que buscan mejorar su vida a través del esfuerzo diario. 
              No nació con luces de lujo, sino con la convicción de que el verdadero cambio se logra con disciplina.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Aquí el hierro no se quiebra, se forja. Construimos hábitos fuertes para guerreros que saben que los resultados llegan con esfuerzo real.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="group bg-zinc-900 border-l-4 border-red-600 p-8 hover:bg-zinc-800 transition-all">
              <Shield className="w-10 h-10 text-red-600 mb-4" />
              <h4 className="font-['Anton'] text-2xl uppercase mb-2">Misión</h4>
              <p className="text-zinc-500 text-sm italic">
                Brindar a la comunidad un espacio accesible y funcional, promoviendo hábitos saludables y resultados sostenibles[cite: 1].
              </p>
            </div>
            <div className="group bg-zinc-900 border-l-4 border-white p-8 hover:bg-zinc-800 transition-all">
              <Award className="w-10 h-10 text-white mb-4" />
              <h4 className="font-['Anton'] text-2xl uppercase mb-2">Visión</h4>
              <p className="text-zinc-500 text-sm italic">
                Ser el gimnasio más reconocido por generar transformaciones físicas reales y una comunidad comprometida[cite: 1].
              </p>
            </div>
          </div>
        </div>

        {/* --- BLOQUE 4: VALORES TÉCNICOS --- */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-red-600 p-1 rounded-sm shadow-[0_20px_50px_rgba(229,57,53,0.3)]"
        >
          <div className="bg-zinc-950 py-12 px-6 flex flex-col md:flex-row items-center justify-around gap-8">
            {['Compromiso', 'Disciplina', 'Respeto', 'Cercanía', 'Esfuerzo Real'].map((valor, i) => (
              <div key={i} className="group flex flex-col items-center">
                <span className="text-zinc-700 font-['Anton'] text-4xl mb-2 group-hover:text-red-600/20 transition-colors">0{i+1}</span>
                <span className="text-white font-black uppercase italic tracking-widest text-sm group-hover:text-red-600 transition-colors">{valor}</span>
              </div>
            ))}
          </div>
        </motion.div>
        
        <p className="text-center mt-12 text-zinc-500 uppercase tracking-[0.4em] text-[10px] font-bold">
           Acompañamos tu proceso sin falsas promesas
        </p>
      </div>
    </section>
  );
}