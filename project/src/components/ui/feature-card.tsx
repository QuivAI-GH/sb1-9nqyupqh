import { motion } from "framer-motion";
import { DivideIcon as LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { GlowingEffect } from "./glowing-effect";

interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
  delay?: number;
}

export function FeatureCard({ image, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="group relative rounded-xl overflow-hidden"
    >
      <div className="relative p-2">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={2}
        />
        <div className="relative bg-white/[0.03] hover:bg-white/[0.05] transition-all duration-300 rounded-lg overflow-hidden">
          <div className="mb-4 aspect-video overflow-hidden">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            <p className="text-gray-400">{description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}