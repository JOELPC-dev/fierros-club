import { Mail, MessageSquare, User, Target, Phone } from "lucide-react";
import contacto from "../../assets/img/contacto.png";

export default function Contact() {
  return (
    <section id="contacto" className="py-24 bg-zinc-950 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LADO IZQUIERDO: Información */}
        <div className="space-y-8">
          <div>
            <h2 className="text-5xl font-black uppercase italic tracking-tighter mb-4">
              ¿Listo para <span className="text-red-600">empezar?</span>
            </h2>
            <p className="text-zinc-400">No esperes a mañana. Escríbenos ahora y obtén tu asesoría gratuita. Tu transformación comienza con un solo mensaje.</p>
          </div>

          <div className="space-y-6">
            <a href="https://wa.me/51921013929" className="flex items-center gap-4 text-zinc-300 hover:text-red-600 transition-colors">
              <MessageSquare className="text-red-600" /> +51 921 013 929
            </a>
            <a href="mailto:fierrosclub@gmail.com" className="flex items-center gap-4 text-zinc-300 hover:text-red-600 transition-colors">
              <Mail className="text-red-600" /> fierrosclub@gmail.com
            </a>
          </div>

          {/* Imagen llamativa al costado */}
          <img
            src={contacto}
            alt="Gym Contact"
            className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-700 rounded-sm"
          />
        </div>

        {/* LADO DERECHO: Formulario "Bonito" */}
        <div className="bg-zinc-900/50 p-8 border border-zinc-800 relative group">
          {/* Efecto de borde brillante al pasar el mouse */}
          <div className="absolute inset-0 border border-red-600/0 group-hover:border-red-600/50 transition-all duration-500 pointer-events-none"></div>
          
          <form 
            action="https://formsubmit.co/fierrosclub@gmail.com" 
            method="POST"
            className="grid gap-6 relative z-10"
          >
            <input type="hidden" name="_captcha" value="false" />

            {/* Campo Nombres y Apellidos */}
            <div className="relative">
              <User className="absolute left-4 top-4 text-zinc-600 w-5 h-5" />
              <input name="nombre_completo" required className="w-full bg-zinc-950 border border-zinc-800 p-4 pl-12 italic text-white focus:border-red-600 focus:outline-none transition-colors" placeholder="NOMBRES Y APELLIDOS" />
            </div>

            {/* Fila doble: Correo y Teléfono */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative">
                <Mail className="absolute left-4 top-4 text-zinc-600 w-5 h-5" />
                <input name="email" type="email" required className="w-full bg-zinc-950 border border-zinc-800 p-4 pl-12 italic text-white focus:border-red-600 focus:outline-none transition-colors" placeholder="EMAIL" />
              </div>
              <div className="relative">
                <Phone className="absolute left-4 top-4 text-zinc-600 w-5 h-5" />
                <input name="whatsapp" type="tel" required className="w-full bg-zinc-950 border border-zinc-800 p-4 pl-12 italic text-white focus:border-red-600 focus:outline-none transition-colors" placeholder="WHATSAPP" />
              </div>
            </div>

            {/* Meta */}
            <div className="relative">
              <Target className="absolute left-4 top-4 text-zinc-600 w-5 h-5" />
              <textarea name="meta" required className="w-full bg-zinc-950 border border-zinc-800 p-4 pl-12 h-32 italic text-white focus:border-red-600 focus:outline-none transition-colors" placeholder="¿CUÁL ES TU META PRINCIPAL?" />
            </div>
            
            <button type="submit" className="w-full py-5 bg-red-600 font-black uppercase italic text-white hover:bg-red-500 transition-all active:scale-[0.98]">
              Enviar Formulario
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}