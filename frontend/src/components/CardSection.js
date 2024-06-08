
import React from 'react';
import Card from './Card';

const CardSection = () => {
  const cards = [
    {
      title: 'Szybkie Połaczenie',
      description: 'Natychmiastowe Wyznaczanie Trasy',
    },
    {
      title: 'Zaplanuj Podróż',
      description: 'Spersonalizowane Planowanie',
    },
    {
      title: 'Sprawdź Rozkład',
      description: 'Pełen Rozkład Jazdy',
    },
  ];

  return (
    <div className="w-full bg-cover bg-center flex items-center justify-center">
      <div className="flex flex-wrap justify-center">
        {cards.map((card, index) => (
          <div key={index} className="mx-12">
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
