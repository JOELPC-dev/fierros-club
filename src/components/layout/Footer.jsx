import logoFierros from "../../assets/img/logo.png";

export default function Footer({ scrollTo }) {
  const SOCIAL_LINKS = {
    instagram: "https://www.instagram.com/fierrosclub.pe",
    facebook: "https://www.facebook.com/share/19mmkzBCFt/",
    tiktok: "https://www.tiktok.com/@fierrosclub.pe",
  };

  return (
    <footer className="w-full bg-zinc-950 py-16 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          {/* Columna 1: Branding y Logo */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <img src={logoFierros} alt="Fierros Club" className="h-16 w-auto mb-2" />
            <p className="text-zinc-500 text-sm leading-relaxed">
              El templo del poder en Huancayo. Forjando guerreros y transformando vidas con disciplina y fuerza real.
            </p>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-black uppercase italic tracking-widest">Explora</h4>
            <button onClick={() => scrollTo('Planes')} className="text-zinc-500 hover:text-red-600 transition-colors uppercase text-sm">Planes</button>
            <button onClick={() => scrollTo('Galería')} className="text-zinc-500 hover:text-red-600 transition-colors uppercase text-sm">Galería</button>
            <button onClick={() => scrollTo('Ubicación')} className="text-zinc-500 hover:text-red-600 transition-colors uppercase text-sm">Ubicación</button>
          </div>

          {/* Columna 3: Redes Sociales (Iconos clásicos SVG) */}
          <div className="flex flex-col items-center md:items-end gap-6">
            <h4 className="text-white font-black uppercase italic tracking-widest">Síguenos</h4>
            <div className="flex gap-4">
              {/* Instagram */}
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="p-3 bg-zinc-900 border border-zinc-800 hover:border-red-600 rounded-full transition-all group">
                <svg className="w-6 h-6 text-zinc-400 group-hover:text-red-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.77 1.683 4.918 4.918.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.148 3.252-1.683 4.77-4.918 4.918-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.77-1.683-4.918-4.918-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.148-3.252 1.683-4.77 4.918-4.918 1.266-.058 1.646-.07 4.85-.07zm0 2.163c-3.13 0-3.511.012-4.747.068-2.612.119-3.766 1.488-3.885 3.885-.056 1.236-.068 1.617-.068 4.747s.012 3.511.068 4.747c.119 2.612 1.488 3.766 3.885 3.885 1.236.056 1.617.068 4.747.068s3.511-.012 4.747-.068c2.612-.119 3.766-1.488 3.885-3.885.056-1.236.068-1.617.068-4.747s-.012-3.511-.068-4.747c-.119-2.612-1.488-3.766-3.885-3.885-1.236-.056-1.617-.068-4.747-.068zm0 3.754c3.447 0 6.244 2.797 6.244 6.244s-2.797 6.244-6.244 6.244-6.244-2.797-6.244-6.244 2.797-6.244 6.244-6.244zm0 1.936c-2.368 0-4.288 1.92-4.288 4.288s1.92 4.288 4.288 4.288 4.288-1.92 4.288-4.288-1.92-4.288-4.288-4.288zm5.127-1.336c0 .805-.653 1.458-1.458 1.458s-1.458-.653-1.458-1.458.653-1.458 1.458-1.458 1.458.653 1.458 1.458z"/></svg>
              </a>
              {/* Facebook */}
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noreferrer" className="p-3 bg-zinc-900 border border-zinc-800 hover:border-red-600 rounded-full transition-all group">
                <svg className="w-6 h-6 text-zinc-400 group-hover:text-red-600" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
              {/* TikTok */}
              <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noreferrer" className="p-3 bg-zinc-900 border border-zinc-800 hover:border-red-600 rounded-full transition-all group">
                <svg className="w-6 h-6 text-zinc-400 group-hover:text-red-600" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.17a6.33 6.33 0 0 0 11.23-3.75V7.47a9.23 9.23 0 0 0 3.36 1.8V5.82a6.34 6.34 0 0 1-1.07-.64Z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Derechos */}
        <div className="border-t border-zinc-900 mt-5 pt-4 text-center">
          <p className="text-zinc-600 text-xs uppercase font-bold tracking-widest">
            © 2026 Fierros Club • El Templo del Poder • Huancayo, Perú
          </p>
        </div>
      </div>
      
      {/* WhatsApp Flotante */}
      <a 
        href="https://wa.me/51933136112" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 p-4 rounded-full shadow-2xl hover:scale-110 transition-transform"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
          fill="currentColor" viewBox="0 0 24 24" >
          <path fill-rule="evenodd" d="M18.403 5.633A8.92 8.92 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a9 9 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.93 8.93 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.45 7.45 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.45 7.45 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.41 7.41 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73s-.354-.112-.504.112-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393s.149-.224.224-.374.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a10 10 0 0 0-.429-.008.83.83 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321 1.582 2.415 3.832 3.387c.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066s.187-.973.131-1.067-.207-.151-.43-.263" clip-rule="evenodd" />
        </svg>
      </a>

      {/* Facebook Flotante */}
      <a 
        href="https://www.facebook.com/fierrosclub" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-blue-600 p-4 rounded-full shadow-2xl hover:scale-110 transition-transform"
      >
        <svg className="w-6 h-6 text-zinc-400 group-hover:text-red-600" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
      </a>
    </footer>
  );
}