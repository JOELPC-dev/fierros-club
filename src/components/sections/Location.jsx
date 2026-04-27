import { MapPin, Clock, CalendarDays, Phone} from "lucide-react";

export default function Location() {
  return (
    <section id="Ubicación" className="py-20 bg-zinc-900 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Información Detallada */}
        <div className="space-y-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter mb-4">
              Ubicanos <span className="text-red-600">Aquí</span>
            </h2>
            <p className="text-zinc-400">Visítanos y comienza tu transformación hoy mismo. Estamos en el corazón de El Tambo.</p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <MapPin className="text-red-600 w-6 h-6 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-black italic text-lg">DIRECCIÓN</h4>
                <p className="text-zinc-400">Av. 9 de Diciembre, El Tambo, Huancayo</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <Clock className="text-red-600 w-6 h-6 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-black italic text-lg">HORARIOS</h4>
                <p className="text-zinc-400">Lunes a Viernes: 05:00 - 22:00</p>
                <p className="text-zinc-400">Sábados: 08:00 - 18:00</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <Phone className="text-red-600 w-6 h-6 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-black italic text-lg">CONTACTO</h4>
                <p className="text-zinc-400">+51 921 013 929</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mapa con estilo visual */}
        <div className="h-[450px] w-full bg-zinc-800 rounded-sm overflow-hidden shadow-2xl border border-zinc-800">
          {/* Asegúrate de reemplazar el src por tu enlace real de Google Maps incrustado */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.884784405908!2d-75.2152865248888!3d-12.052601988167333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910e97d394b3227d%3A0x677b5a837071f054!2sEl%20Tambo%2C%20Huancayo!5e0!3m2!1ses-419!2spe!4v1713988632612!5m2!1ses-419!2spe" 
            className="w-full h-full border-0 hover:grayscale-0 transition-all duration-700"
            allowFullScreen="" 
            loading="lazy" 
          />
        </div>
      </div>
    </section>
  );
}