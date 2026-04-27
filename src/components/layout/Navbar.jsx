import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import logoFierros from "../../assets/img/logo.png";

export default function Navbar({ scrollTo, scrolled }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = ['Sobre Nosotros', 'Planes', 'Galería', 'Ubicación'];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-900/95 backdrop-blur-md py-3 shadow-xl border-b border-zinc-800' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO - Aumentamos h-10 a h-14 o h-16 para que destaque más */}
        <div className="cursor-pointer flex items-center" onClick={() => scrollTo('home')}>
          <img 
            src={logoFierros} 
            alt="Fierros Club" 
            className="h-14 md:h-16 w-auto object-contain transition-all duration-300" 
          />
        </div>

        {/* MENÚ ESCRITORIO - Todo igual */}
        <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-zinc-400">
          {navLinks.map((item) => (
            <button key={item} onClick={() => scrollTo(item.replace(' ', '-'))} className="hover:text-white transition-colors">
              {item}
            </button>
          ))}
          <button onClick={() => scrollTo('contacto')} className="bg-red-600 hover:bg-red-500 text-white px-6 py-2 rounded-full text-xs font-bold uppercase transition-all">
            Únete ahora
          </button>
        </div>

        {/* BOTÓN HAMBURGUESA - Igual */}
        <button className="md:hidden text-white z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* MENÚ MÓVIL DESPLEGABLE */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-zinc-950 flex flex-col items-center justify-center gap-8 md:hidden z-40"
          >
            {navLinks.map((item) => (
              <button 
                key={item} 
                onClick={() => { scrollTo(item.replace(' ', '-')); setIsMenuOpen(false); }} 
                className="text-2xl font-black uppercase italic hover:text-orange-600 transition-colors"
              >
                {item}
              </button>
            ))}
            <button onClick={() => { scrollTo('contacto'); setIsMenuOpen(false); }} className="bg-red-600 px-8 py-3 rounded-full font-bold uppercase">
              Únete ahora
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}