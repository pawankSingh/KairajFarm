"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.pexels.com/photos/236889/pexels-photo-236889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Happy hens in the farm yard",
    width: "full" // full width image
  },
  {
    src: "https://images.pexels.com/photos/164507/pexels-photo-164507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Free-range chickens on grass",
  },
  {
    src: "https://images.pexels.com/photos/6248767/pexels-photo-6248767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Freshly collected eggs in basket",
  },
  {
    src: "https://images.pexels.com/photos/2255459/pexels-photo-2255459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Farm landscape",
  },
  {
    src: "https://images.pexels.com/photos/4813361/pexels-photo-4813361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Egg sorting and packaging",
  }
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-800 dark:text-white mb-4">Life on Our Farm</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Take a virtual tour of our farm and see how our happy hens live and where your delicious eggs come from.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className={`cursor-pointer overflow-hidden rounded-lg shadow-md ${
                image.width === "full" ? "md:col-span-2" : ""
              }`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-all duration-500 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center" onClick={() => setSelectedImage(null)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative max-w-4xl max-h-[90vh] w-[90vw]"
            >
              <button
                className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                <X className="h-6 w-6" />
              </button>
              <img
                src={selectedImage}
                alt="Enlarged view"
                className="max-h-[90vh] w-auto mx-auto object-contain"
              />
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}