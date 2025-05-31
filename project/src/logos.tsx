import React from 'react';
import { Box, Boxes, Cpu, Zap, Laptop } from 'lucide-react';

export const Retool = () => (
  <div className="flex items-center justify-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
    <Box className="w-6 h-6" />
    <span>Retool</span>
  </div>
);

export const Vercel = () => (
  <div className="flex items-center justify-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
    <Boxes className="w-6 h-6" />
    <span>Vercel</span>
  </div>
);

export const Remote = () => (
  <div className="flex items-center justify-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
    <Laptop className="w-6 h-6" />
    <span>Remote</span>
  </div>
);

export const Arc = () => (
  <div className="flex items-center justify-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
    <Zap className="w-6 h-6" />
    <span>Arc</span>
  </div>
);

export const Raycast = () => (
  <div className="flex items-center justify-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
    <Cpu className="w-6 h-6" />
    <span>Raycast</span>
  </div>
);