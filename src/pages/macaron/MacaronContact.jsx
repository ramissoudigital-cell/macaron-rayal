import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import Layout from '@/components/macaron/Layout';

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresse",
    content: "Azito Palace",
    subtitle: "Abidjan, Côte d'Ivoire"
  },
  {
    icon: Phone,
    title: "Téléphone",
    content: "+225 07 00 89 86 86",
    subtitle: "Du lundi au dimanche"
  },
  {
    icon: Mail,
    title: "Email",
    content: "contact@macaronroyal.fr",
    subtitle: "Réponse sous 24h"
  },
  {
    icon: Clock,
    title: "Horaires",
    content: "10h00 - 22h00",
    subtitle: "Tous les jours"
  }
];

const hours = [
  { day: "Lundi", hours: "10h00 - 22h00" },
  { day: "Mardi", hours: "10h00 - 22h00" },
  { day: "Mercredi", hours: "10h00 - 22h00" },
  { day: "Jeudi", hours: "10h00 - 22h00" },
  { day: "Vendredi", hours: "10h00 - 23h00" },
  { day: "Samedi", hours: "10h00 - 23h00" },
  { day: "Dimanche", hours: "11h00 - 21h00" }
];

export default function MacaronContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success('Message envoyé avec succès ! Nous vous répondrons rapidement.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Layout currentPageName="Contact">
      <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white pt-24 pb-16">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="text-rose-400 text-sm tracking-widest uppercase">Contact</span>
            <h1 className="text-4xl md:text-6xl font-light text-gray-800 mt-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Venez nous <span className="italic text-rose-500">rencontrer</span>
            </h1>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
              Nous serions ravis de vous accueillir dans notre boutique ou de répondre à vos questions
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-300 to-rose-500 mx-auto mt-6 rounded-full" />
          </motion.div>
        </div>

        {/* Contact Info Cards */}
        <div className="max-w-7xl mx-auto px-4 mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white p-6 rounded-3xl shadow-lg shadow-rose-100 text-center group"
                >
                  <div className="w-14 h-14 bg-rose-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-rose-500 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-rose-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-2">{info.title}</h3>
                  <p className="text-gray-800 font-medium text-lg">{info.content}</p>
                  <p className="text-gray-500 text-sm mt-1">{info.subtitle}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-rose-100">
                <h2 className="text-2xl font-light text-gray-800 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Envoyez-nous un <span className="italic text-rose-500">message</span>
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-gray-500 mb-2 block">Votre nom *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="rounded-xl border-gray-200 focus:border-rose-400 focus:ring-rose-400"
                        placeholder="Jean Dupont"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-500 mb-2 block">Email *</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="rounded-xl border-gray-200 focus:border-rose-400 focus:ring-rose-400"
                        placeholder="jean@exemple.fr"
                      />
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-gray-500 mb-2 block">Téléphone</label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="rounded-xl border-gray-200 focus:border-rose-400 focus:ring-rose-400"
                        placeholder="06 12 34 56 78"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-500 mb-2 block">Sujet *</label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="rounded-xl border-gray-200 focus:border-rose-400 focus:ring-rose-400"
                        placeholder="Réservation groupe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm text-gray-500 mb-2 block">Message *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="rounded-xl border-gray-200 focus:border-rose-400 focus:ring-rose-400 resize-none"
                      placeholder="Comment pouvons-nous vous aider ?"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-rose-500 hover:bg-rose-600 text-white py-6 rounded-xl text-lg transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-rose-500/20"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        Envoi en cours...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Send className="w-5 h-5" />
                        Envoyer le message
                      </span>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Map & Hours */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Map */}
              <div className="bg-white p-4 rounded-3xl shadow-xl shadow-rose-100 overflow-hidden">
                <div className="aspect-video rounded-2xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps?q=5.3031787,-4.0776511&z=17&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white p-8 rounded-3xl shadow-xl shadow-rose-100">
                <h3 className="text-xl font-light text-gray-800 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Horaires <span className="italic text-rose-500">d'ouverture</span>
                </h3>
                <div className="space-y-3">
                  {hours.map((item) => (
                    <div
                      key={item.day}
                      className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
                    >
                      <span className="text-gray-600">{item.day}</span>
                      <span className="text-gray-800 font-medium">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div className="bg-gradient-to-r from-rose-500 to-pink-500 p-8 rounded-3xl text-white">
                <h3 className="text-xl font-light mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Suivez-nous
                </h3>
                <p className="text-rose-100 mb-6">
                  Restez informés de nos nouvelles créations et événements
                </p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:text-rose-500 transition-all duration-300"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:text-rose-500 transition-all duration-300"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
