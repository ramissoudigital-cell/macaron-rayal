import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IceCream, Cake, Coffee, Sparkles, UtensilsCrossed, Drumstick, Minus, Plus, ShoppingCart } from 'lucide-react';
import Layout from '@/components/macaron/Layout';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const categories = [
  { id: 'plats', name: 'Plats Africains', icon: UtensilsCrossed },
  { id: 'grillades', name: 'Grillades', icon: Drumstick },
  { id: 'glaces', name: 'Glaces', icon: IceCream },
  { id: 'sorbets', name: 'Sorbets', icon: Sparkles },
  { id: 'coupes', name: 'Coupes Glacées', icon: Cake },
  { id: 'boissons', name: 'Boissons', icon: Coffee },
];

const menuItems = {
  plats: [
    { name: "Attiéké Poisson", description: "Attiéké accompagné de poisson braisé et sauce tomate", price: "12.00€", image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=300&h=300&fit=crop", bestseller: true },
    { name: "Alloco Complet", description: "Bananes plantain frites avec œuf, poisson et piment", price: "10.00€", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=300&h=300&fit=crop", bestseller: true },
    { name: "Garba", description: "Attiéké avec thon frit, oignons et piment", price: "9.00€", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=300&fit=crop" },
    { name: "Riz Sauce Graine", description: "Riz blanc accompagné de sauce graine et viande", price: "13.00€", image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=300&h=300&fit=crop" },
    { name: "Foutou Sauce Arachide", description: "Foutou d'igname avec sauce arachide et viande", price: "14.00€", image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=300&h=300&fit=crop" },
    { name: "Placali Sauce Gluante", description: "Placali accompagné de sauce gluante aux épinards", price: "12.00€", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=300&fit=crop" },
    { name: "Kedjenou de Poulet", description: "Poulet mijoté avec légumes et épices", price: "15.00€", image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=300&h=300&fit=crop", new: true },
    { name: "Riz Djolof", description: "Riz cuisiné à la sauce tomate avec légumes", price: "11.00€", image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=300&h=300&fit=crop" },
  ],
  grillades: [
    { name: "Poulet Braisé Complet", description: "Poulet entier mariné et grillé", price: "16.00€", image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=300&h=300&fit=crop", bestseller: true },
    { name: "Demi Poulet Braisé", description: "Demi poulet grillé avec épices maison", price: "9.00€", image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=300&h=300&fit=crop" },
    { name: "Poisson Braisé", description: "Poisson frais grillé, mariné aux épices", price: "14.00€", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=300&h=300&fit=crop", bestseller: true },
    { name: "Brochettes de Bœuf", description: "Viande de bœuf marinée sur brochettes", price: "12.00€", image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=300&h=300&fit=crop" },
    { name: "Côtelettes d'Agneau", description: "Côtelettes grillées sauce barbecue maison", price: "18.00€", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300&h=300&fit=crop", new: true },
    { name: "Brochettes de Poulet", description: "Filets de poulet marinés et grillés", price: "10.00€", image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=300&h=300&fit=crop" },
  ],
  glaces: [
    { name: "Vanille de Madagascar", description: "Gousses de vanille bourbon infusées", price: "4.50€", image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=300&h=300&fit=crop", bestseller: true },
    { name: "Chocolat Intense", description: "Cacao grand cru d'Équateur 70%", price: "4.50€", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=300&h=300&fit=crop" },
    { name: "Pistache de Sicile", description: "Pistaches de Bronte torréfiées", price: "5.00€", image: "https://images.unsplash.com/photo-1560008581-09826d1de69e?w=300&h=300&fit=crop", bestseller: true },
    { name: "Caramel Beurre Salé", description: "Caramel maison au sel de Guérande", price: "4.50€", image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=300&h=300&fit=crop" },
    { name: "Noisette du Piémont", description: "Noisettes IGP torréfiées", price: "5.00€", image: "https://images.unsplash.com/photo-1633933358116-a27b902fad35?w=300&h=300&fit=crop" },
    { name: "Fraise Charlotte", description: "Fraises de Plougastel et biscuit rose", price: "4.50€", image: "https://images.unsplash.com/photo-1488900128323-21503983a07e?w=300&h=300&fit=crop" },
    { name: "Café Arabica", description: "Grains d'Éthiopie torréfiés maison", price: "4.50€", image: "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=300&h=300&fit=crop" },
    { name: "Rose & Litchi", description: "Eau de rose et litchis frais", price: "5.00€", image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=300&h=300&fit=crop", new: true },
  ],
  sorbets: [
    { name: "Framboise Intense", description: "Framboises du Val de Loire", price: "4.00€", image: "https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?w=300&h=300&fit=crop", bestseller: true },
    { name: "Citron de Menton", description: "Citrons IGP de Menton", price: "4.00€", image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300&h=300&fit=crop" },
    { name: "Mangue Alphonso", description: "Mangues d'Inde", price: "4.50€", image: "https://images.unsplash.com/photo-1546173159-315724a31696?w=300&h=300&fit=crop" },
    { name: "Passion Exotique", description: "Fruits de la passion et notes de coco", price: "4.50€", image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=300&h=300&fit=crop" },
    { name: "Poire Williams", description: "Poires du Valais", price: "4.00€", image: "https://images.unsplash.com/photo-1560008581-09826d1de69e?w=300&h=300&fit=crop" },
    { name: "Cassis de Bourgogne", description: "Cassis noir de Dijon", price: "4.50€", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=300&h=300&fit=crop", new: true },
  ],
  coupes: [
    { name: "Coupe Macaron Royal", description: "3 boules, macarons, chantilly, coulis fruits rouges", price: "12.90€", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=300&h=300&fit=crop", signature: true },
    { name: "Dame Blanche", description: "Vanille, chocolat chaud, chantilly, amandes effilées", price: "8.90€", image: "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?w=300&h=300&fit=crop" },
    { name: "Colonel", description: "Sorbet citron, vodka premium", price: "9.50€", image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300&h=300&fit=crop" },
    { name: "Banana Split", description: "Banane, 3 boules, chocolat, chantilly, fruits secs", price: "10.90€", image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=300&h=300&fit=crop" },
    { name: "Coupe Élégance", description: "3 boules au choix, fruits frais de saison, coulis", price: "9.90€", image: "https://images.unsplash.com/photo-1488900128323-21503983a07e?w=300&h=300&fit=crop" },
    { name: "Café Liégeois", description: "Café, glace vanille, chantilly, café espresso", price: "8.50€", image: "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=300&h=300&fit=crop" },
    { name: "Vacherin Glacé", description: "Meringue, glace vanille fraise, chantilly", price: "11.90€", image: "https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?w=300&h=300&fit=crop", new: true },
  ],
  boissons: [
    { name: "Milk-shake Classique", description: "Lait, glace au choix, chantilly", price: "6.50€", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300&h=300&fit=crop" },
    { name: "Smoothie Fruits Rouges", description: "Fraise, framboise, myrtille, yaourt", price: "7.00€", image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=300&h=300&fit=crop" },
    { name: "Chocolat Chaud Maison", description: "Chocolat grand cru, lait entier, chantilly", price: "5.50€", image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=300&h=300&fit=crop" },
    { name: "Thé Glacé Maison", description: "Thé earl grey, citron, menthe fraîche", price: "4.50€", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300&h=300&fit=crop" },
    { name: "Affogato", description: "Espresso, glace vanille, amaretti", price: "6.00€", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=300&fit=crop", bestseller: true },
  ],
};

const parsePrice = (price) => {
  if (typeof price === 'number') return price;
  if (typeof price !== 'string') return 0;
  return Number(price.replace('€', '').replace(',', '.').trim()) || 0;
};

const getItemKey = (categoryId, itemName) => `${categoryId}::${itemName}`;

export default function MacaronMenu() {
  const [activeCategory, setActiveCategory] = useState('glaces');
  const [cart, setCart] = useState({});
  const navigate = useNavigate();

  const cartItems = Object.values(cart).filter((i) => i.quantity > 0);
  const cartCount = cartItems.reduce((sum, i) => sum + i.quantity, 0);
  const cartTotal = cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const updateQuantity = (categoryId, item, delta) => {
    const key = getItemKey(categoryId, item.name);
    setCart((prev) => {
      const current = prev[key] || { name: item.name, quantity: 0, price: parsePrice(item.price) };
      const nextQty = Math.max(0, current.quantity + delta);
      return {
        ...prev,
        [key]: {
          ...current,
          quantity: nextQty,
        },
      };
    });
  };

  const handleCheckout = () => {
    navigate(createPageUrl('Payment'), {
      state: {
        cartItems,
      },
    });
  };

  return (
    <Layout currentPageName="Menu">
      <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white pt-24 pb-32">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="text-rose-400 text-sm tracking-widest uppercase">Notre Carte</span>
            <h1 className="text-4xl md:text-6xl font-light text-gray-800 mt-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Saveurs <span className="italic text-rose-500">Authentiques</span>
            </h1>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
              De la cuisine africaine traditionnelle aux délices glacés, découvrez notre carte variée
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-300 to-rose-500 mx-auto mt-6 rounded-full" />
          </motion.div>
        </div>

        {/* Category Navigation */}
        <div className="max-w-4xl mx-auto px-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/30'
                      : 'bg-white text-gray-600 hover:bg-rose-100 shadow-md'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{category.name}</span>
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Menu Items */}
        <div className="max-w-7xl mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {menuItems[activeCategory].map((item, index) => {
                const itemKey = getItemKey(activeCategory, item.name);
                const qty = cart[itemKey]?.quantity || 0;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group relative bg-white rounded-3xl shadow-lg shadow-rose-100/50 overflow-hidden"
                  >
                    {/* Badges */}
                    <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                      {item.bestseller && (
                        <span className="px-3 py-1 bg-amber-400 text-white text-xs font-medium rounded-full">
                          Best-seller
                        </span>
                      )}
                      {item.new && (
                        <span className="px-3 py-1 bg-rose-500 text-white text-xs font-medium rounded-full">
                          Nouveau
                        </span>
                      )}
                      {item.signature && (
                        <span className="px-3 py-1 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xs font-medium rounded-full">
                          Signature
                        </span>
                      )}
                    </div>

                    {/* Image */}
                    <div className="relative aspect-square overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-start justify-between">
                        <h3 className="text-lg font-medium text-gray-800 group-hover:text-rose-500 transition-colors">
                          {item.name}
                        </h3>
                        <span className="text-rose-500 font-semibold text-lg">{item.price}</span>
                      </div>
                      <p className="text-gray-500 text-sm mt-2">{item.description}</p>

                      <div className="mt-5 flex items-center justify-between gap-3">
                        <div className="inline-flex items-center gap-2 bg-rose-50 rounded-full px-3 py-2 border border-rose-100">
                          <button
                            type="button"
                            onClick={() => updateQuantity(activeCategory, item, -1)}
                            className="w-8 h-8 rounded-full bg-white border border-rose-100 text-rose-600 hover:bg-rose-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                            disabled={qty === 0}
                            aria-label={`Retirer ${item.name}`}
                          >
                            <Minus className="w-4 h-4 mx-auto" />
                          </button>
                          <span className="w-7 text-center text-sm font-semibold text-rose-700">{qty}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(activeCategory, item, 1)}
                            className="w-8 h-8 rounded-full bg-rose-500 text-white hover:bg-rose-600 transition-colors"
                            aria-label={`Ajouter ${item.name}`}
                          >
                            <Plus className="w-4 h-4 mx-auto" />
                          </button>
                        </div>

                        <div className="text-sm text-gray-600">
                          <span className="font-medium text-gray-800">
                            {(parsePrice(item.price) * qty).toFixed(2)}€
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto px-4 mt-16 text-center"
        >
          <p className="text-gray-400 text-sm italic">
            * Tous nos produits sont fabriqués sur place. Liste des allergènes disponible sur demande.
            Les prix sont indiqués en euros TTC.
          </p>
        </motion.div>

        {/* Cart Bar */}
        <div className="fixed bottom-4 left-4 right-4 z-40">
          <div className="max-w-3xl mx-auto bg-white/85 backdrop-blur-xl border border-rose-200 rounded-2xl shadow-2xl shadow-rose-200/40 p-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center">
                <ShoppingCart className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-gray-800">{cartCount}</span> article(s)
                </p>
                <p className="text-lg font-semibold text-rose-600">{cartTotal.toFixed(2)}€</p>
              </div>
            </div>

            <Button
              type="button"
              onClick={handleCheckout}
              disabled={cartCount === 0}
              className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-6 py-5 rounded-xl text-base shadow-xl shadow-rose-500/25 disabled:opacity-50 disabled:pointer-events-none"
            >
              Acheter
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
