import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, image }) => {
  return (
    <div className="self-stretch flex justify-center my-auto">
      <img 
        src={image} 
        alt={title}
        className="w-full max-w-[390px] object-contain"
      />
    </div>
  );
};
