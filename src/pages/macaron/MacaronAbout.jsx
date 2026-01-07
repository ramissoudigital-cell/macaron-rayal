import React from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, Leaf, Users } from 'lucide-react';
import Layout from '@/components/macaron/Layout';

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "Chaque création est le fruit d'une passion transmise depuis trois générations"
  },
  {
    icon: Leaf,
    title: "Qualité",
    description: "Ingrédients premium sélectionnés auprès de producteurs locaux d'excellence"
  },
  {
    icon: Award,
    title: "Savoir-faire",
    description: "Techniques artisanales perpétuées et perfectionnées au fil des années"
  },
  {
    icon: Users,
    title: "Partage",
    description: "Des moments de bonheur à partager en famille ou entre amis"
  }
];

const timeline = [
  { year: "1987", event: "Ouverture de la première boutique par Marie-Claire Dubois" },
  { year: "1995", event: "Création du célèbre Macaron Glacé Royal" },
  { year: "2005", event: "Prix du Meilleur Artisan Glacier d'Île-de-France" },
  { year: "2012", event: "Antoine Dubois reprend le flambeau familial" },
  { year: "2018", event: "Rénovation complète de la boutique historique" },
  { year: "2023", event: "Lancement de la gamme bio et végane" }
];

export default function MacaronAbout() {
  return (
    <Layout currentPageName="About">
      <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white pt-24 pb-16">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="text-rose-400 text-sm tracking-widest uppercase">Notre Histoire</span>
            <h1 className="text-4xl md:text-6xl font-light text-gray-800 mt-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              L'Art du <span className="italic text-rose-500">Glacé</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-300 to-rose-500 mx-auto mt-6 rounded-full" />
          </motion.div>
        </div>

        {/* Main Story Section */}
        <section className="max-w-7xl mx-auto px-4 mb-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&h=800&fit=crop"
                  alt="Notre boutique"
                  className="rounded-3xl shadow-2xl shadow-rose-200"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-rose-200 rounded-3xl -z-10" />
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-rose-300 rounded-full -z-10 opacity-60" />

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -right-4 top-1/4 bg-white p-4 rounded-2xl shadow-xl"
              >
                <span className="text-4xl font-light text-rose-500" style={{ fontFamily: "'Playfair Display', serif" }}>37</span>
                <p className="text-gray-500 text-sm">années d'excellence</p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Une tradition familiale <span className="italic text-rose-500">d'excellence</span>
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  C'est en 1987, dans le cœur historique de Paris, que <strong className="text-rose-500">Marie-Claire Dubois</strong> 
                  ouvre les portes de Macaron Royal. Passionnée par l'art culinaire africain et la pâtisserie glacée, 
                  elle rêvait de créer un lieu où les saveurs authentiques d'Afrique rencontreraient 
                  l'excellence de la glacerie artisanale française.
                  </p>
                  <p>
                  Notre spécialité ? Une fusion unique entre <strong className="text-rose-500">cuisine africaine traditionnelle</strong> 
                  et créations glacées raffinées. De l'attiéké au poulet braisé, en passant par nos macarons glacés, 
                  chaque plat raconte une histoire de passion et de tradition.
                  </p>
                  <p>
                  Aujourd'hui, c'est son fils <strong className="text-rose-500">Antoine</strong> qui perpétue cette double tradition 
                  culinaire, en proposant des plats africains authentiques et des glaces artisanales d'exception. 
                  Il sélectionne personnellement chaque ingrédient pour garantir qualité et authenticité.
                  </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-gradient-to-r from-rose-100 to-rose-50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-rose-400 text-sm tracking-widest uppercase">Nos Valeurs</span>
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mt-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Ce qui nous <span className="italic text-rose-500">anime</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="bg-white p-8 rounded-3xl shadow-lg shadow-rose-100 text-center group"
                  >
                    <div className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-rose-500 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-rose-500 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-medium text-gray-800 mb-3">{value.title}</h3>
                    <p className="text-gray-500">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-rose-400 text-sm tracking-widest uppercase">Notre Parcours</span>
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mt-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Les moments <span className="italic text-rose-500">clés</span>
              </h2>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-rose-300 via-rose-400 to-rose-300 transform md:-translate-x-1/2" />

              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-rose-500 rounded-full transform -translate-x-1/2 z-10 shadow-lg shadow-rose-500/30" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg shadow-rose-100 inline-block">
                      <span className="text-2xl font-light text-rose-500" style={{ fontFamily: "'Playfair Display', serif" }}>
                        {item.year}
                      </span>
                      <p className="text-gray-600 mt-2">{item.event}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-gradient-to-b from-white to-rose-50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-rose-400 text-sm tracking-widest uppercase">Notre Équipe</span>
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mt-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Les artisans du <span className="italic text-rose-500">goût</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Antoine Dubois", role: "Maître Glacier", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop" },
                { name: "Sophie Martin", role: "Cheffe Pâtissière", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop" },
                { name: "Lucas Bernard", role: "Artisan Chocolatier", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop" }
              ].map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-3xl">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rose-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-white text-lg font-medium">{member.name}</p>
                      <p className="text-rose-200">{member.role}</p>
                    </div>
                  </div>
                  <div className="text-center mt-4 group-hover:opacity-0 transition-opacity duration-300">
                    <p className="text-xl font-medium text-gray-800">{member.name}</p>
                    <p className="text-rose-500">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
