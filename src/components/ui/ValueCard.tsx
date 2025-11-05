import React from 'react';

interface ValueCardProps {
  title: string;
  description: string;
  image: string;
}

export const ValueCard: React.FC<ValueCardProps> = ({ title, description, image }) => {
  return (
    <div className="self-stretch flex justify-center my-auto">
      <img 
        src={image} 
        alt={title}
        className="w-full max-w-[262px] object-contain"
      />
    </div>
  );
};
