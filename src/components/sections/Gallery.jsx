import { motion } from "framer-motion";

import galery1 from "../../assets/img/galery_1.png";
import galery3 from "../../assets/img/galery_3.png";
import galery4 from "../../assets/img/galery_4.png";
import galery5 from "../../assets/img/galery_5.png";
import galery6 from "../../assets/img/galery_6.png";
import galery7 from "../../assets/img/galery_7.png";
import galery9 from "../../assets/img/galery_9.png";
import galery10 from "../../assets/img/galery_10.png";

export default function Gallery() {
  const images = [
    galery1,
    galery3,
    galery4,
    galery5,
    galery6,
    galery7,
    galery9,
    galery10
  ];
  return (
    <section id="Galería" className="py-2 bg-zinc-800">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <h2 className="text-4xl md:text-5xl font-black uppercase italic text-white tracking-tighter">
          Nuestra <span className="text-red-600">Galería</span>
        </h2>
        <div className="w-20 h-1 bg-red-600 mt-4 mx-auto"></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1 p-1">
        {images.map((src, i) => <img key={i} src={src} className="aspect-square object-cover transition-all" />)}
      </div>
    </section>
  );
}