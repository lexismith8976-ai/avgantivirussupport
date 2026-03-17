import React from 'react';

interface CardProps {
  title: string;
  description: string;
  icon?: string;
  image?: string;
  children?: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ 
  title, 
  description, 
  icon, 
  image, 
  children, 
  className = '' 
}) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${className}`}>
      {image && <img src={image} alt={title} className="w-full h-48 object-cover" />}
      <div className="p-6">
        {icon && <div className="text-4xl mb-4">{icon}</div>}
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {children}
      </div>
    </div>
  );
};

export default Card;