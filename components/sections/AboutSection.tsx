"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const farmValues = [
  {
    title: "Free-Range",
    description: "Our hens enjoy open pastures with plenty of space to roam, forage, and express their natural behaviors."
  },
  {
    title: "All-Natural Feed",
    description: "We provide our hens with a balanced diet of organic grains, seeds, and natural supplements."
  },
  {
    title: "No Antibiotics",
    description: "Our hens are raised without the use of antibiotics or growth hormones for healthier eggs."
  },
  {
    title: "Sustainable Farming",
    description: "We practice sustainable farming methods that protect and enrich our land for future generations."
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-amber-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full bg-amber-200 dark:bg-amber-700 rounded-lg z-0"></div>
              <img 
                src="https://images.pexels.com/photos/235370/pexels-photo-235370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Free range chickens on our farm" 
                className="rounded-lg relative z-10 w-full h-auto object-cover shadow-lg"
              />
            </div>
          </motion.div>
          
          {/* Content Column */}
          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-800 dark:text-white mb-6">Our Farm Story</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Founded in 2025, our family farm sits on 20 acres of beautiful countryside. We started with just a few dozen chickens and a passion for producing the freshest, most nutritious eggs possible.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Today, we're proud to care for over 1,000 happy hens who produce eggs with brilliant orange yolks and exceptional flavor. Our mission remains the same: to provide families with eggs from hens raised with care, compassion, and respect for nature.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {farmValues.map((value, index) => (
                <motion.div 
                  key={index}
                  className="flex"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-800 dark:text-white">{value.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}