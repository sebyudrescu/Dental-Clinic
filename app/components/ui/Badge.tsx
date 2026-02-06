'use client';

import { HTMLAttributes } from 'react';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'outline';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export function Badge({
  variant = 'primary',
  size = 'md',
  icon,
  children,
  className = '',
  ...props
}: BadgeProps) {
  const baseClasses =
    'inline-flex items-center gap-1.5 font-medium rounded-full transition-all duration-300';

  const variantClasses = {
    primary: 'bg-petrol-blue/10 text-petrol-blue border border-petrol-blue/20',
    secondary: 'bg-luxury-gold/10 text-luxury-gold border border-luxury-gold/20',
    success: 'bg-green-50 text-green-700 border border-green-200',
    outline: 'bg-transparent border-2 border-current',
  };

  const sizeClasses = {
    sm: 'text-xs px-2.5 py-1',
    md: 'text-sm px-3 py-1.5',
  };

  return (
    <span
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </span>
  );
}
