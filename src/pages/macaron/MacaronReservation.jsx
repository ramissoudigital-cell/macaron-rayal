import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Mail, Phone, User, MessageSquare, Sparkles, CheckCircle2, ShoppingBag, Store } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import Layout from '@/components/macaron/Layout';

const reservationTypes = [
  { value: 'table', label: 'Table pour 2-6 personnes', icon: Users },
  { value: 'group', label: 'Groupe (7-15 personnes)', icon: Users },
  { value: 'event', label: 'Événement privé', icon: Sparkles },
];

const timeSlots = [
  '10:00', '10:30', '11:00', '11:30', '12:00', '12:30',
  '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
  '16:00', '16:30', '17:00', '17:30', '18:00', '18:30',
  '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'
];

const features = [
  { icon: Calendar, title: 'Réservation flexible', description: 'Annulation gratuite jusqu\'à 24h avant' },
  { icon: Sparkles, title: 'Expérience premium', description: 'Service personnalisé et attentionné' },
  { icon: CheckCircle2, title: 'Confirmation immédiate', description: 'Réponse sous 2 heures maximum' },
];

export default function MacaronReservation() {
  const [formData, setFormData] = useState({
    type: '',
    date: '',
    time: '',
    guests: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    toast.success('Réservation envoyée ! Nous vous confirmerons par email dans les plus brefs délais.');
  };

  return (
    <Layout currentPageName="Reservation">
      {submitted ? (
        <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white pt-24 pb-16 flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl w-full"
          >
            <div className="bg-white rounded-3xl shadow-2xl shadow-rose-200/50 p-12 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle2 className="w-12 h-12 text-white" />
              </motion.div>
              
              <h2 className="text-3xl font-light text-gray-800 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Réservation <span className="italic text-rose-500">confirmée</span>
              </h2>
              
              <p className="text-gray-600 text-lg mb-8">
                Merci {formData.name} ! Nous avons bien reçu votre demande de réservation pour {formData.guests} personne(s) 
                le {new Date(formData.date).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })} à {formData.time}.
              </p>
              
              <div className="bg-rose-50 rounded-2xl p-6 mb-8">
                <p className="text-gray-700">
                  <strong>📧 Confirmation par email</strong><br />
                  Un email de confirmation vous sera envoyé à <span className="text-rose-500 font-medium">{formData.email}</span> dans les 2 heures.
                </p>
              </div>
              
              <Button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    type: '', date: '', time: '', guests: '',
                    name: '', email: '', phone: '', message: ''
                  });
                }}
                className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-6 rounded-full text-lg"
              >
                Faire une nouvelle réservation
              </Button>
            </div>
          </motion.div>
        </div>
      ) : (
        <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white pt-24 pb-16">
          {/* Header */}
          <div className="max-w-7xl mx-auto px-4 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <span className="text-rose-400 text-sm tracking-widest uppercase">Réservation & Commande</span>
              <h1 className="text-4xl md:text-6xl font-light text-gray-800 mt-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Votre expérience <span className="italic text-rose-500">gourmande</span>
              </h1>
              <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
                Commandez vos glaces ou réservez une table pour une expérience inoubliable
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-rose-300 to-rose-500 mx-auto mt-6 rounded-full" />
            </motion.div>
          </div>

          {/* Order Section */}
          <div className="max-w-7xl mx-auto px-4 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl font-light text-gray-800" style={{ fontFamily: "'Playfair Display', serif" }}>
                Commander vos <span className="italic text-rose-500">glaces</span>
              </h2>
              <p className="text-gray-500 mt-2">Choisissez votre mode de commande préféré</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {/* Click & Collect */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative overflow-hidden bg-gradient-to-br from-rose-500 to-pink-500 rounded-3xl shadow-2xl shadow-rose-200"
              >
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative p-8 md:p-10 text-white">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Store className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-light mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Click & <span className="italic font-medium">Collect</span>
                  </h3>
                  <p className="text-rose-50 mb-6 text-lg">
                    Commandez en ligne et venez chercher vos glaces au glacier
                  </p>
                  <ul className="space-y-2 mb-8 text-rose-50">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                      <span>Prêt en 15 minutes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                      <span>Évitez la file d'attente</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                      <span>Paiement en ligne sécurisé</span>
                    </li>
                  </ul>
                  <Link to={createPageUrl('Menu')}>
                    <Button className="w-full bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white py-6 rounded-xl text-lg font-medium shadow-xl shadow-rose-900/20 group-hover:shadow-2xl transition-all duration-300">
                      Commander maintenant
                    </Button>
                  </Link>
                </div>
              </motion.div>

              {/* Livraison */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative overflow-hidden bg-gradient-to-br from-purple-500 to-indigo-500 rounded-3xl shadow-2xl shadow-purple-200"
              >
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative p-8 md:p-10 text-white">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-light mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Achat <span className="italic font-medium">Direct</span>
                  </h3>
                  <p className="text-purple-50 mb-6 text-lg">
                    Parcourez notre carte et achetez directement sur le site
                  </p>
                  <ul className="space-y-2 mb-8 text-purple-50">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                      <span>Toute notre gamme disponible</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                      <span>Offres et promotions exclusives</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                      <span>Livraison à domicile possible</span>
                    </li>
                  </ul>
                  <Link to={createPageUrl('Menu')}>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-6 rounded-xl text-lg font-medium shadow-xl shadow-indigo-900/20 group-hover:shadow-2xl transition-all duration-300">
                      Voir la carte
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Divider */}
          <div className="max-w-7xl mx-auto px-4 mb-16">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-gradient-to-b from-rose-50 to-white px-6 text-gray-400 text-sm">ou</span>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="max-w-7xl mx-auto px-4 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl font-light text-gray-800" style={{ fontFamily: "'Playfair Display', serif" }}>
                Réserver une <span className="italic text-rose-500">table</span>
              </h2>
              <p className="text-gray-500 mt-2">Pour profiter sur place de notre ambiance</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-rose-100 text-center"
                  >
                    <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-rose-500" />
                    </div>
                    <h3 className="font-medium text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-gray-500 text-sm">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-5 gap-8">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-3"
              >
                <div className="bg-white rounded-3xl shadow-2xl shadow-rose-200/50 p-8 md:p-10">
                  <h2 className="text-2xl font-light text-gray-800 mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Détails de votre <span className="italic text-rose-500">réservation</span>
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Type de réservation */}
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-3 block">Type de réservation *</label>
                      <div className="grid grid-cols-1 gap-3">
                        {reservationTypes.map((type) => {
                          const Icon = type.icon;
                          return (
                            <motion.button
                              key={type.value}
                              type="button"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => handleChange('type', type.value)}
                              className={`p-4 rounded-xl border-2 transition-all duration-300 flex items-center gap-3 ${
                                formData.type === type.value
                                  ? 'border-rose-500 bg-rose-50 shadow-lg shadow-rose-500/10'
                                  : 'border-gray-200 hover:border-rose-300'
                              }`}
                            >
                              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                formData.type === type.value ? 'bg-rose-500' : 'bg-gray-100'
                              }`}>
                                <Icon className={`w-5 h-5 ${formData.type === type.value ? 'text-white' : 'text-gray-500'}`} />
                              </div>
                              <span className={`font-medium ${formData.type === type.value ? 'text-rose-600' : 'text-gray-700'}`}>
                                {type.label}
                              </span>
                            </motion.button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Date et heure */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-rose-500" />
                          Date *
                        </label>
                        <Input
                          type="date"
                          value={formData.date}
                          onChange={(e) => handleChange('date', e.target.value)}
                          required
                          min={new Date().toISOString().split('T')[0]}
                          className="rounded-xl border-gray-200 focus:border-rose-400 focus:ring-rose-400"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                          <Clock className="w-4 h-4 text-rose-500" />
                          Heure *
                        </label>
                        <Select value={formData.time} onValueChange={(value) => handleChange('time', value)} required>
                          <SelectTrigger className="rounded-xl border-gray-200 focus:border-rose-400 focus:ring-rose-400">
                            <SelectValue placeholder="Choisir l'heure" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>{time}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Nombre de personnes */}
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                        <Users className="w-4 h-4 text-rose-500" />
                        Nombre de personnes *
                      </label>
                      <Input
                        type="number"
                        min="1"
                        max="50"
                        value={formData.guests}
                        onChange={(e) => handleChange('guests', e.target.value)}
                        required
                        placeholder="Ex: 4"
                        className="rounded-xl border-gray-200 focus:border-rose-400 focus:ring-rose-400"
                      />
                    </div>

                    {/* Informations personnelles */}
                    <div className="pt-4 border-t border-gray-100">
                      <h3 className="text-lg font-medium text-gray-800 mb-4">Vos coordonnées</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                            <User className="w-4 h-4 text-rose-500" />
                            Nom complet *
                          </label>
                          <Input
                            value={formData.name}
                            onChange={(e) => handleChange('name', e.target.value)}
                            required
                            placeholder="Jean Dupont"
                            className="rounded-xl border-gray-200 focus:border-rose-400 focus:ring-rose-400"
                          />
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                              <Mail className="w-4 h-4 text-rose-500" />
                              Email *
                            </label>
                            <Input
                              type="email"
                              value={formData.email}
                              onChange={(e) => handleChange('email', e.target.value)}
                              required
                              placeholder="jean@exemple.fr"
                              className="rounded-xl border-gray-200 focus:border-rose-400 focus:ring-rose-400"
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                              <Phone className="w-4 h-4 text-rose-500" />
                              Téléphone *
                            </label>
                            <Input
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => handleChange('phone', e.target.value)}
                              required
                              placeholder="06 12 34 56 78"
                              className="rounded-xl border-gray-200 focus:border-rose-400 focus:ring-rose-400"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                            <MessageSquare className="w-4 h-4 text-rose-500" />
                            Message (optionnel)
                          </label>
                          <Textarea
                            value={formData.message}
                            onChange={(e) => handleChange('message', e.target.value)}
                            rows={4}
                            placeholder="Allergie, régime alimentaire, occasion spéciale..."
                            className="rounded-xl border-gray-200 focus:border-rose-400 focus:ring-rose-400 resize-none"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white py-6 rounded-xl text-lg transition-all duration-300 hover:scale-[1.02] shadow-xl shadow-rose-500/30"
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
                        'Confirmer ma réservation'
                      )}
                    </Button>
                  </form>
                </div>
              </motion.div>

              {/* Info Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-2 space-y-6"
              >
                {/* Info Card */}
                <div className="bg-gradient-to-br from-rose-500 to-pink-500 rounded-3xl p-8 text-white shadow-xl">
                  <h3 className="text-xl font-light mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Informations <span className="italic">pratiques</span>
                  </h3>
                  <div className="space-y-4 text-rose-50">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Clock className="w-3 h-3" />
                      </div>
                      <div>
                        <p className="font-medium text-white">Durée</p>
                        <p className="text-sm">Table réservée pour 1h30</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Calendar className="w-3 h-3" />
                      </div>
                      <div>
                        <p className="font-medium text-white">Annulation</p>
                        <p className="text-sm">Gratuite jusqu'à 24h avant</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Sparkles className="w-3 h-3" />
                      </div>
                      <div>
                        <p className="font-medium text-white">Événements privés</p>
                        <p className="text-sm">Capacité jusqu'à 40 personnes</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image Card */}
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=400&fit=crop"
                    alt="Intérieur"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-gray-800 mb-2">
                      Un cadre <span className="text-rose-500">élégant</span>
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Profitez de notre ambiance raffinée et chaleureuse, idéale pour tous vos moments gourmands.
                    </p>
                  </div>
                </div>

                {/* Contact Card */}
                <div className="bg-white rounded-3xl p-6 shadow-xl">
                  <h3 className="font-medium text-gray-800 mb-4">Besoin d'aide ?</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Phone className="w-4 h-4 text-rose-500" />
                      <span>+225 07 00 89 86 86</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Mail className="w-4 h-4 text-rose-500" />
                      <span>reservation@macaronroyal.fr</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
