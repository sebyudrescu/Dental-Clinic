'use client';

interface ImagePlaceholderProps {
  icon: React.ReactNode;
  title: string;
  gradient?: string;
  className?: string;
}

export function ImagePlaceholder({ 
  icon, 
  title, 
  gradient = 'from-petrol-blue/20 to-luxury-gold/20',
  className = '' 
}: ImagePlaceholderProps) {
  return (
    <div className={`relative w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center ${className}`}>
      <div className="text-center space-y-4 p-8">
        <div className="w-20 h-20 mx-auto rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg">
          {icon}
        </div>
        <p className="text-gray-700 font-medium">{title}</p>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-16 h-16 border-2 border-white/30 rounded-full"></div>
      <div className="absolute bottom-4 left-4 w-12 h-12 border-2 border-white/30 rounded-full"></div>
    </div>
  );
}
