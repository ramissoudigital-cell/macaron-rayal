import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Smartphone, Shield, CheckCircle2, ArrowLeft, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import Layout from '@/components/macaron/Layout';

const paymentMethods = [
  {
    id: 'wave',
    name: 'Wave',
    description: 'Paiement mobile rapide et sécurisé',
    logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694ef47f82c344714b0eee90/2b6c1b49d_wave-logo.png',
    color: 'from-blue-400 to-cyan-400',
    icon: Smartphone
  },
  {
    id: 'orange',
    name: 'Orange Money',
    description: 'Paiement mobile avec Orange Money',
    logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694ef47f82c344714b0eee90/993e966d3_orange-money-logo.png',
    color: 'from-orange-400 to-orange-500',
    icon: Smartphone
  },
  {
    id: 'card',
    name: 'Carte Bancaire',
    description: 'Visa, Mastercard acceptées',
    logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694ef47f82c344714b0eee90/57579e187_credit-cards.jpg',
    color: 'from-indigo-400 to-purple-500',
    icon: CreditCard
  }
];

// Panier fallback si on arrive sur /macaron/payment sans panier
const fallbackCartItems = [
  { name: "Attiéké Poisson", quantity: 2, price: 12.00 },
  { name: "Poulet Braisé", quantity: 1, price: 16.00 },
  { name: "Alloco Complet", quantity: 1, price: 10.00 }
];

export default function MacaronPayment() {
  const location = useLocation();
  const stateCartItems = Array.isArray(location.state?.cartItems) ? location.state.cartItems : null;
  const cartItems = stateCartItems && stateCartItems.length ? stateCartItems : fallbackCartItems;

  const [selectedMethod, setSelectedMethod] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [formData, setFormData] = useState({
    // Pour Wave et Orange Money
    phoneNumber: '',
    // Pour carte bancaire
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  });

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const delivery = 3.00;
  const total = subtotal + delivery;

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulation du paiement
    await new Promise(resolve => setTimeout(resolve, 2500));

    setIsProcessing(false);
    setPaymentSuccess(true);
    toast.success('Paiement effectué avec succès !');
  };

  return (
    <Layout currentPageName="Reservation">
      {paymentSuccess ? (
        <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white pt-24 pb-16 flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl w-full"
          >
            <div className="bg-white rounded-3xl shadow-2xl shadow-green-200/50 p-12 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle2 className="w-12 h-12 text-white" />
              </motion.div>

              <h2 className="text-3xl font-light text-gray-800 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Paiement <span className="italic text-green-500">réussi</span> !
              </h2>

              <p className="text-gray-600 text-lg mb-8">
                Votre commande de <strong>{total.toFixed(2)}€</strong> a été confirmée.
                <br />
                Vous recevrez un email de confirmation sous peu.
              </p>

              <div className="bg-green-50 rounded-2xl p-6 mb-8">
                <p className="text-gray-700">
                  <strong>🎉 Merci de votre confiance !</strong><br />
                  Votre commande sera prête dans <span className="text-green-600 font-medium">15-20 minutes</span>
                </p>
              </div>

              <div className="flex gap-4 justify-center">
                <Link to={createPageUrl('Menu')}>
                  <Button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-6 rounded-full text-lg">
                    Commander à nouveau
                  </Button>
                </Link>
                <Link to={createPageUrl('Home')}>
                  <Button variant="outline" className="border-2 border-gray-200 px-8 py-6 rounded-full text-lg">
                    Retour à l'accueil
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      ) : (
        <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white pt-24 pb-16">
          {/* Header */}
          <div className="max-w-7xl mx-auto px-4 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link to={createPageUrl('Menu')} className="inline-flex items-center gap-2 text-rose-500 hover:text-rose-600 mb-6">
                <ArrowLeft className="w-5 h-5" />
                <span>Retour au menu</span>
              </Link>
              <div className="text-center">
                <span className="text-rose-400 text-sm tracking-widest uppercase">Paiement sécurisé</span>
                <h1 className="text-4xl md:text-6xl font-light text-gray-800 mt-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Finaliser votre <span className="italic text-rose-500">commande</span>
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-rose-300 to-rose-500 mx-auto mt-6 rounded-full" />
              </div>
            </motion.div>
          </div>

          {/* Security Badge */}
          <div className="max-w-5xl mx-auto px-4 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 flex items-center justify-center gap-3 border border-green-200"
            >
              <Shield className="w-5 h-5 text-green-600" />
              <span className="text-gray-700 text-sm">
                <strong>Paiement 100% sécurisé</strong> - Vos données sont cryptées et protégées
              </span>
              <Lock className="w-4 h-4 text-green-600" />
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Payment Form */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Payment Methods Selection */}
                  <div className="bg-white rounded-3xl shadow-xl shadow-rose-100 p-8 mb-6">
                    <h2 className="text-2xl font-light text-gray-800 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Choisissez votre <span className="italic text-rose-500">moyen de paiement</span>
                    </h2>

                    <div className="grid gap-4">
                      {paymentMethods.map((method, index) => {
                        return (
                          <motion.button
                            key={method.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setSelectedMethod(method.id)}
                            className={`relative overflow-hidden rounded-2xl border-2 transition-all duration-300 ${
                              selectedMethod === method.id
                                ? 'border-rose-500 shadow-lg shadow-rose-500/20'
                                : 'border-gray-200 hover:border-rose-300'
                            }`}
                          >
                            <div className="flex items-center gap-4 p-5">
                              <div className={`w-16 h-16 rounded-xl flex items-center justify-center overflow-hidden ${
                                selectedMethod === method.id ? 'ring-2 ring-rose-500 ring-offset-2' : 'bg-gray-50'
                              }`}>
                                <img
                                  src={method.logo}
                                  alt={method.name}
                                  className="w-full h-full object-contain p-2"
                                />
                              </div>
                              <div className="flex-1 text-left">
                                <h3 className="font-medium text-gray-800 text-lg">{method.name}</h3>
                                <p className="text-gray-500 text-sm">{method.description}</p>
                              </div>
                              {selectedMethod === method.id && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="w-8 h-8 bg-rose-500 rounded-full flex items-center justify-center"
                                >
                                  <CheckCircle2 className="w-5 h-5 text-white" />
                                </motion.div>
                              )}
                            </div>
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Payment Form */}
                  {selectedMethod && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white rounded-3xl shadow-xl shadow-rose-100 p-8"
                    >
                      <h3 className="text-xl font-medium text-gray-800 mb-6">
                        Informations de paiement
                      </h3>

                      <form onSubmit={handlePayment} className="space-y-6">
                        {(selectedMethod === 'wave' || selectedMethod === 'orange') && (
                          <div>
                            <label className="text-sm font-medium text-gray-700 mb-2 block">
                              Numéro de téléphone *
                            </label>
                            <Input
                              type="tel"
                              value={formData.phoneNumber}
                              onChange={(e) => handleChange('phoneNumber', e.target.value)}
                              placeholder="+225 XX XX XX XX XX"
                              required
                              className="rounded-xl border-gray-200 focus:border-rose-400 focus:ring-rose-400"
                            />
                            <p className="text-gray-500 text-xs mt-2">
                              Vous recevrez une notification pour valider le paiement
                            </p>
                          </div>
                        )}

                        {selectedMethod === 'card' && (
                          <>
                            <div>
                              <label className="text-sm font-medium text-gray-700 mb-2 block">
                                Numéro de carte *
                              </label>
                              <Input
                                type="text"
                                value={formData.cardNumber}
                                onChange={(e) => handleChange('cardNumber', e.target.value)}
                                placeholder="1234 5678 9012 3456"
                                maxLength="19"
                                required
                                className="rounded-xl border-gray-200 focus:border-rose-400 focus:ring-rose-400"
                              />
                            </div>

                            <div>
                              <label className="text-sm font-medium text-gray-700 mb-2 block">
                                Nom sur la carte *
                              </label>
                              <Input
                                type="text"
                                value={formData.cardName}
                                onChange={(e) => handleChange('cardName', e.target.value)}
                                placeholder="JEAN DUPONT"
                                required
                                className="rounded-xl border-gray-200 focus:border-rose-400 focus:ring-rose-400"
                              />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <label className="text-sm font-medium text-gray-700 mb-2 block">
                                  Date d'expiration *
                                </label>
                                <Input
                                  type="text"
                                  value={formData.expiryDate}
                                  onChange={(e) => handleChange('expiryDate', e.target.value)}
                                  placeholder="MM/AA"
                                  maxLength="5"
                                  required
                                  className="rounded-xl border-gray-200 focus:border-rose-400 focus:ring-rose-400"
                                />
                              </div>
                              <div>
                                <label className="text-sm font-medium text-gray-700 mb-2 block">
                                  CVV *
                                </label>
                                <Input
                                  type="text"
                                  value={formData.cvv}
                                  onChange={(e) => handleChange('cvv', e.target.value)}
                                  placeholder="123"
                                  maxLength="3"
                                  required
                                  className="rounded-xl border-gray-200 focus:border-rose-400 focus:ring-rose-400"
                                />
                              </div>
                            </div>
                          </>
                        )}

                        <Button
                          type="submit"
                          disabled={isProcessing}
                          className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white py-6 rounded-xl text-lg transition-all duration-300 hover:scale-[1.02] shadow-xl shadow-rose-500/30"
                        >
                          {isProcessing ? (
                            <span className="flex items-center justify-center gap-2">
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                              />
                              Traitement en cours...
                            </span>
                          ) : (
                            <span className="flex items-center justify-center gap-2">
                              <Lock className="w-5 h-5" />
                              Payer {total.toFixed(2)}€
                            </span>
                          )}
                        </Button>
                      </form>
                    </motion.div>
                  )}
                </motion.div>
              </div>

              {/* Order Summary */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-1"
              >
                <div className="bg-white rounded-3xl shadow-xl shadow-rose-100 p-8 sticky top-24">
                  <h3 className="text-xl font-medium text-gray-800 mb-6">Récapitulatif</h3>

                  <div className="space-y-4 mb-6 pb-6 border-b border-gray-100">
                    {cartItems.map((item, index) => (
                      <div key={index} className="flex justify-between items-start">
                        <div className="flex-1">
                          <p className="text-gray-800 font-medium">{item.name}</p>
                          <p className="text-gray-500 text-sm">Quantité: {item.quantity}</p>
                        </div>
                        <span className="text-gray-800 font-medium">
                          {(item.price * item.quantity).toFixed(2)}€
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-gray-600">
                      <span>Sous-total</span>
                      <span>{subtotal.toFixed(2)}€</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Livraison</span>
                      <span>{delivery.toFixed(2)}€</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t-2 border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-medium text-gray-800">Total</span>
                      <span className="text-2xl font-bold text-rose-500">
                        {total.toFixed(2)}€
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 bg-rose-50 rounded-xl p-4">
                    <p className="text-gray-700 text-sm text-center">
                      ⏱️ <strong>Prêt en 15-20 min</strong>
                      <br />
                      <span className="text-gray-500">après confirmation du paiement</span>
                    </p>
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
