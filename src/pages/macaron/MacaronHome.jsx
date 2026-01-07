import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ChevronDown, Star, MapPin, Clock, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/macaron/Layout';

const specialties = [
  {
    name: "Attiéké Poisson",
    description: "Attiéké accompagné de poisson braisé et sauce tomate",
    image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=400&h=400&fit=crop",
    price: "12.00€"
  },
  {
    name: "Poulet Braisé",
    description: "Poulet mariné et grillé aux épices maison",
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=400&fit=crop",
    price: "16.00€"
  },
  {
    name: "Alloco Complet",
    description: "Bananes plantain frites avec œuf, poisson et piment",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=400&fit=crop",
    price: "10.00€"
  },
  {
    name: "Macaron Glacé Royal",
    description: "Notre signature : macaron artisanal garni de glace maison",
    image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=400&h=400&fit=crop",
    price: "6.50€"
  }
];

const reviews = [
  { name: "Marie L.", text: "Les meilleures glaces de la ville ! Un vrai délice.", rating: 5 },
  { name: "Thomas D.", text: "Cadre magnifique et service impeccable. Je recommande !", rating: 5 },
  { name: "Sophie B.", text: "Les macarons glacés sont une pure merveille.", rating: 5 }
];

export default function MacaronHome() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Layout currentPageName="Home">
      <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=1920&h=1080&fit=crop')",
              transform: `translateY(${scrollY * 0.5}px)`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-rose-900/40 via-rose-800/30 to-rose-950/60" />
          </div>
          
          <div className="relative z-10 text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <motion.span 
                className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm tracking-widest uppercase mb-6"
                animate={{ 
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Artisan Glacier depuis 1987
              </motion.span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-6 tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <motion.span
                animate={{ 
                  textShadow: [
                    "0 0 20px rgba(255,255,255,0.3)",
                    "0 0 30px rgba(255,255,255,0.5)",
                    "0 0 20px rgba(255,255,255,0.3)"
                  ]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Macaron <span className="font-semibold italic">Royal</span>
              </motion.span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
              className="text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto mb-10"
            >
              Restaurant & Glacier - Saveurs africaines et délices glacés
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.7, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link to={createPageUrl('Menu')}>
                  <Button className="!bg-rose-500 hover:!bg-rose-600 !text-white px-8 py-6 text-lg rounded-full shadow-2xl shadow-rose-500/30 transition-all duration-300">
                    Découvrir notre carte
                  </Button>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link to={createPageUrl('Contact')}>
                  <Button className="!bg-white/10 hover:!bg-white/20 !text-white backdrop-blur-xl border border-white/25 hover:border-white/40 px-8 py-6 text-lg rounded-full transition-all duration-300 shadow-xl shadow-black/20 hover:shadow-2xl">
                    Nous trouver
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <ChevronDown className="w-8 h-8 text-white" />
            </motion.div>
          </motion.div>
        </section>

        {/* Specialties Section */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="text-rose-400 text-sm tracking-widest uppercase">Nos créations</span>
              <h2 className="text-4xl md:text-5xl font-light text-gray-800 mt-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Spécialités de la <span className="italic text-rose-500">Maison</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-rose-300 to-rose-500 mx-auto mt-6 rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {specialties.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-3xl bg-white shadow-lg shadow-rose-100">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-rose-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="inline-block px-3 py-1 bg-white text-rose-500 text-sm font-medium rounded-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {item.price}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-xl font-medium text-gray-800 mb-2">{item.name}</h3>
                    <p className="text-gray-500 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link to={createPageUrl('Menu')}>
                <Button variant="outline" className="border-2 border-rose-400 text-rose-500 hover:bg-rose-500 hover:text-white px-8 py-6 rounded-full text-lg transition-all duration-300">
                  Voir toute la carte
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* About Preview */}
        <section className="py-24 bg-gradient-to-r from-rose-100 to-rose-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-rose-400" />
              <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-rose-400" />
              <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-rose-400" />
            </svg>
          </div>
          
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-rose-400 text-sm tracking-widest uppercase">Notre histoire</span>
                <h2 className="text-4xl md:text-5xl font-light text-gray-800 mt-4 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Une passion <span className="italic text-rose-500">artisanale</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Depuis 1987, Macaron Royal perpétue l'art de la glace artisanale française. 
                  Chaque création est le fruit d'un savoir-faire transmis de génération en génération, 
                  alliant tradition et innovation.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Nos ingrédients sont soigneusement sélectionnés auprès de producteurs locaux 
                  pour vous offrir une expérience gustative exceptionnelle.
                </p>
                <Link to={createPageUrl('About')}>
                  <Button className="!bg-rose-500 hover:!bg-rose-600 !text-white px-8 py-6 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-rose-500/20">
                    Découvrir notre histoire
                  </Button>
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative z-10">
                  <img
                    src="https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&h=700&fit=crop"
                    alt="Artisan glacier"
                    className="rounded-3xl shadow-2xl shadow-rose-200"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-rose-200 rounded-3xl -z-10" />
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-rose-300 rounded-full -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-24 px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-rose-400 text-sm tracking-widest uppercase">Témoignages</span>
              <h2 className="text-4xl md:text-5xl font-light text-gray-800 mt-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Ce qu'ils <span className="italic text-rose-500">disent</span> de nous
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <motion.div
                  key={review.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="bg-white p-8 rounded-3xl shadow-lg shadow-rose-100 text-center"
                >
                  <div className="flex justify-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-6">"{review.text}"</p>
                  <span className="text-rose-500 font-medium">{review.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Info Banner */}
        <section className="py-16 bg-rose-500">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 text-center text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <MapPin className="w-10 h-10 mb-4" />
                <h3 className="text-xl font-medium mb-2">Adresse</h3>
                <p className="text-rose-100">Azito Palace</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex flex-col items-center"
              >
                <Clock className="w-10 h-10 mb-4" />
                <h3 className="text-xl font-medium mb-2">Horaires</h3>
                <p className="text-rose-100">Tous les jours : 10h - 22h</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center"
              >
                <Phone className="w-10 h-10 mb-4" />
                <h3 className="text-xl font-medium mb-2">Contact</h3>
                <p className="text-rose-100">+225 07 00 89 86 86</p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
