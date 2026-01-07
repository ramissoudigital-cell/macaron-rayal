import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Layout from '@/components/macaron/Layout';

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=800&h=600&fit=crop",
    alt: "Glace artisanale",
    category: "creations"
  },
  {
    src: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&h=600&fit=crop",
    alt: "Notre boutique",
    category: "boutique"
  },
  {
    src: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&h=600&fit=crop",
    alt: "Coupe glacée",
    category: "creations"
  },
  {
    src: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=800&h=600&fit=crop",
    alt: "Glace vanille",
    category: "creations"
  },
  {
    src: "https://images.unsplash.com/photo-1559703248-dcaaec9fab78?w=800&h=600&fit=crop",
    alt: "Intérieur boutique",
    category: "boutique"
  },
  {
    src: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=800&h=600&fit=crop",
    alt: "Sorbet fruits",
    category: "creations"
  },
  {
    src: "https://images.unsplash.com/photo-1488900128323-21503983a07e?w=800&h=600&fit=crop",
    alt: "Glace fraise",
    category: "creations"
  },
  {
    src: "https://images.unsplash.com/photo-1464195244916-405fa0a82545?w=800&h=600&fit=crop",
    alt: "Service client",
    category: "boutique"
  },
  {
    src: "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?w=800&h=600&fit=crop",
    alt: "Dame Blanche",
    category: "creations"
  },
  {
    src: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=800&h=600&fit=crop",
    alt: "Macarons glacés",
    category: "creations"
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
    alt: "Terrasse",
    category: "boutique"
  },
  {
    src: "https://images.unsplash.com/photo-1560008581-09826d1de69e?w=800&h=600&fit=crop",
    alt: "Pistache",
    category: "creations"
  }
];

const categories = [
  { id: 'all', name: 'Tout' },
  { id: 'creations', name: 'Nos Créations' },
  { id: 'boutique', name: 'La Boutique' }
];

export default function MacaronGallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const newIndex = direction === 'next' 
      ? (selectedIndex + 1) % filteredImages.length 
      : (selectedIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <Layout currentPageName="Gallery">
      <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white pt-24 pb-16">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="text-rose-400 text-sm tracking-widest uppercase">Galerie Photo</span>
            <h1 className="text-4xl md:text-6xl font-light text-gray-800 mt-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Notre <span className="italic text-rose-500">Univers</span>
            </h1>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
              Plongez dans l'atmosphère unique de Macaron Royal à travers nos photos
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-300 to-rose-500 mx-auto mt-6 rounded-full" />
          </motion.div>
        </div>

        {/* Category Filter */}
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/30'
                    : 'bg-white text-gray-600 hover:bg-rose-100 shadow-md'
                }`}
              >
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </motion.div>
        </div>

        {/* Gallery Grid */}
        <div className="max-w-7xl mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => openLightbox(image, index)}
                  className="cursor-pointer group relative overflow-hidden rounded-2xl shadow-lg shadow-rose-100"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white font-medium">{image.alt}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation buttons */}
              <button
                onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
                className="absolute left-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
                className="absolute right-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image */}
              <motion.img
                key={selectedImage.src}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />

              {/* Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm">
                {selectedIndex + 1} / {filteredImages.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Layout>
  );
}
