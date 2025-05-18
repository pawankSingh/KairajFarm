"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Home Chef",
    comment: "The eggs from this farm are simply outstanding. The yolks are a beautiful orange color and the taste is incomparable to store-bought eggs. I'll never go back!",
    rating: 5,
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    name: "Michael Thompson",
    role: "Restaurant Owner",
    comment: "We've been sourcing all our eggs from this farm for our breakfast menu. Our customers consistently comment on how good our egg dishes taste. Quality makes all the difference.",
    rating: 5,
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    name: "Emma Williams",
    role: "Local Resident",
    comment: "I love knowing exactly where my food comes from, and these eggs are truly farm to table. The quality and freshness are evident in every egg. Plus, it feels good supporting local farms.",
    rating: 5,
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 4,
    name: "David Lopez",
    role: "Fitness Coach",
    comment: "I recommend these eggs to all my clients. The nutritional profile of pasture-raised eggs is so much better. You can literally see the difference in the deep orange yolks.",
    rating: 5,
    image: "https://images.pexels.com/photos/1816644/pexels-photo-1816644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

export default function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-amber-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-800 dark:text-white mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it - hear from the people who enjoy our eggs every day.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="absolute w-full"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: activeTestimonial === index ? 1 : 0,
                x: activeTestimonial === index ? 0 : activeTestimonial > index ? -100 : 100
              }}
              transition={{ duration: 0.5 }}
              style={{ 
                pointerEvents: activeTestimonial === index ? 'auto' : 'none',
                position: activeTestimonial === index ? 'relative' : 'absolute'
              }}
            >
              <Card className="border-0 shadow-lg bg-white dark:bg-gray-900">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 text-lg italic mb-4">"{testimonial.comment}"</p>
                      <div>
                        <h4 className="font-bold text-gray-800 dark:text-white">{testimonial.name}</h4>
                        <p className="text-amber-600 dark:text-amber-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
          
          {/* Testimonial Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeTestimonial === index 
                    ? 'bg-amber-600 w-6' 
                    : 'bg-amber-300 dark:bg-amber-700'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}