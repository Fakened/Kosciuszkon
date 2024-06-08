// src/components/CardSection.js
import React from 'react';
import Card from './Card';
import trainImage from '../assets/train.jpg';

const CardSection = () => {
  const cards = [
    {
      title: 'Szybkie Połaczenie',
      description: 'This is the description for card 1.',
      
    },
    {
      title: 'Zaplanuj Podróż',
      description: 'This is the description for card 2.',
     
    },
    {
      title: 'Sprawdź Rozkład',
      description: 'This is the description for card 3.',
      
    },
  ];

  return (
    <div
      className="w-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${trainImage})` }}
    >
      <div className="flex flex-wrap justify-center">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default CardSection;
