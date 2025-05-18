"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the email to your newsletter service
    toast.success("Thanks for subscribing to our newsletter!");
    setEmail("");
  };

  return (
    <section className="py-16 bg-amber-600 dark:bg-amber-800">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4">Join Our Newsletter</h2>
          <p className="text-lg text-white/90 mb-8">
            Subscribe to receive updates on seasonal offers, farm events, and new products. We'll send you egg-cellent tips and recipes too!
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-grow bg-white dark:bg-gray-900 border-0"
            />
            <Button 
              type="submit" 
              className="bg-amber-800 hover:bg-amber-900 text-white border-0"
            >
              Subscribe
            </Button>
          </form>
          
          <p className="text-sm text-white/80 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}