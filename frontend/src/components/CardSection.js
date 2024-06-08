// src/components/CardSection.js
import React from 'react';
import Card from './Card';

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
    <div className="w-full bg-cover bg-center flex items-center justify-center">
      <div className="flex flex-wrap justify-center">
        {cards.map((card, index) => (
          <div key={index} className="mx-12"> {/* Add margin here */}
            <Card
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
