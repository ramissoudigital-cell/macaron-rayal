import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, IceCream } from 'lucide-react';

const navLinks = [
  { name: 'Accueil', page: 'Home' },
  { name: 'Notre Carte', page: 'Menu' },
  { name: 'Notre Histoire', page: 'About' },
  { name: 'Galerie', page: 'Gallery' },
  { name: 'Commander', page: 'Reservation' },
  { name: 'Contact', page: 'Contact' },
];

export default function Layout({ children, currentPageName }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = currentPageName === 'Home';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&display=swap');
        
        body {
          font-family: 'Inter', system-ui, sans-serif;
        }
        
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #FFF1F3;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #F9A8D4;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #EC4899;
        }
      `}</style>

      {/* Navigation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || !isHome
            ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-rose-100/50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex items-center gap-3 group">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                isScrolled || !isHome ? 'bg-rose-500' : 'bg-white/20 backdrop-blur-sm'
              }`}>
                <IceCream className={`w-5 h-5 transition-colors duration-300 ${
                  isScrolled || !isHome ? 'text-white' : 'text-white'
                }`} />
              </div>
              <span 
                className={`text-2xl font-light tracking-tight transition-colors duration-300 ${
                  isScrolled || !isHome ? 'text-gray-800' : 'text-white'
                }`}
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Macaron <span className="italic font-medium text-rose-500">Royal</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.page}
                  to={createPageUrl(link.page)}
                  className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-full ${
                    currentPageName === link.page
                      ? isScrolled || !isHome
                        ? 'bg-rose-500/10 backdrop-blur-md text-rose-500 shadow-lg shadow-rose-500/10'
                        : 'bg-white/20 backdrop-blur-md text-white shadow-lg shadow-white/20'
                      : isScrolled || !isHome 
                        ? 'text-gray-600 hover:text-rose-500 hover:bg-rose-50' 
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                isScrolled || !isHome 
                  ? 'bg-rose-100 text-rose-500' 
                  : 'bg-white/20 backdrop-blur-sm text-white'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-rose-100"
            >
              <div className="max-w-7xl mx-auto px-4 py-6">
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.page}
                      to={createPageUrl(link.page)}
                      className={`text-lg font-medium py-2 transition-colors duration-300 ${
                        currentPageName === link.page 
                          ? 'text-rose-500' 
                          : 'text-gray-600 hover:text-rose-500'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center">
                  <IceCream className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-light" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Macaron <span className="italic font-medium text-rose-400">Royal</span>
                </span>
              </div>
              <p className="text-gray-400 max-w-md leading-relaxed">
                Depuis 1987, nous perpétuons l'art de la glace artisanale française avec passion et savoir-faire. 
                Chaque création est une invitation au voyage des sens.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-medium mb-6">Navigation</h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.page}>
                    <Link
                      to={createPageUrl(link.page)}
                      className="text-gray-400 hover:text-rose-400 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-medium mb-6">Contact</h3>
              <ul className="space-y-3 text-gray-400">
                <li>Azito Palace</li>
                <li>Abidjan, Côte d'Ivoire</li>
                <li className="pt-2">+225 07 00 89 86 86</li>
                <li>contact@macaronroyal.fr</li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2024 Macaron Royal. Tous droits réservés.
            </p>
            <div className="flex gap-6 text-gray-500 text-sm">
              <a href="#" className="hover:text-rose-400 transition-colors">Mentions légales</a>
              <a href="#" className="hover:text-rose-400 transition-colors">Politique de confidentialité</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
