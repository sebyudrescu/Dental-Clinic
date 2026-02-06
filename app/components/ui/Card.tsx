'use client';

import { HTMLAttributes, forwardRef } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  glass?: boolean;
  children: React.ReactNode;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ hover = false, glass = false, children, className = '', ...props }, ref) => {
    const baseClasses = 'rounded-xl transition-all duration-300';

    const glassClasses = glass
      ? 'bg-white/80 backdrop-blur-md border border-white/20 shadow-xl'
      : 'bg-white border border-gray-100 shadow-md';

    const hoverClasses = hover
      ? 'hover:shadow-2xl hover:-translate-y-1 hover:border-luxury-gold/30'
      : '';

    return (
      <div
        ref={ref}
        className={`${baseClasses} ${glassClasses} ${hoverClasses} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
