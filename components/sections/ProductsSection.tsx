"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingBasket } from "lucide-react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  popular?: boolean;
  organic?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "Farm Fresh Large Brown Eggs",
    description: "Our classic large brown eggs from free-range hens. Perfect for everyday cooking and baking.",
    price: "₹50.99 / dozen",
    image: "https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    popular: true
  },
  {
    id: 2,
    name: "Organic Small Eggs",
    description: "Smaller eggs with the same great taste. Ideal for lighter meals and perfect for children.",
    price: "₹90.00 / dozen",
    image: "https://images.pexels.com/photos/6937430/pexels-photo-6937430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    organic: true
  },
  {
    id: 3,
    name: "Fish",
    description: "Extra large eggs for those special recipes that need a bit more. Great value for hungry families.",
    price: "₹150 / kg",
    image: "https://www.asiafarming.com/wp-content/uploads/2024/04/Effective-Fish-Pond-Construction-Techniques-1-1024x640.jpg"
  },
  {
    id: 4,
    name: "Premium Duck Eggs",
    description: "Rich and flavorful duck eggs. Perfect for gourmet cooking and baking special treats.",
    price: "₹78.99 / half dozen",
    image: "https://images.pexels.com/photos/7511854/pexels-photo-7511854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

export default function ProductsSection() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <section id="products" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-800 dark:text-white mb-4">Our Farm Fresh Products</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our range of farm-fresh eggs, laid by free-range hens raised in natural, stress-free environments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <Card className="h-full overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className={`w-full h-full object-cover transition-all duration-500 ${hoveredProduct === product.id ? 'scale-110' : 'scale-100'}`}
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    {product.popular && (
                      <Badge className="bg-amber-500 hover:bg-amber-600">Popular</Badge>
                    )}
                    {product.organic && (
                      <Badge className="bg-green-500 hover:bg-green-600">Organic</Badge>
                    )}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{product.name}</CardTitle>
                  <CardDescription className="text-lg font-medium text-amber-600 dark:text-amber-400">
                    {product.price}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{product.description}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                    <ShoppingBasket className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}