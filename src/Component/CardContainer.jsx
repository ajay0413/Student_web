// CardContainer.js
import React from 'react';
import Card from './Card';
import './CardContainer.css';
import img1 from '../assets/chilImg/elementary.jpg'
import img2 from '../assets/chilImg/infant-toddler.jpg'
import img3 from '../assets/chilImg/primary.jpg'
import img4 from '../assets/chilImg/secondary.jpg'
import img5 from '../assets/chilImg/accelerate.jpg'
import img6 from '../assets/chilImg/olympiasports.jpg'

const CardContainer = () => {
  const cards = [
    { image: img1, title: 'Infant-Toddler (Ages 0-3):', description: 'Environment: Safe, nurturing, and prepared with age-appropriate materials.Focus: Sensory exploration, motor skills development, and fostering independence.Key Components: Self-care activities, language development, and basic motor coordination tasks.Outcome: Children develop basic motor coordination, language skills, and a sense of order.' },
    { image: img2, title: 'Infant-Toddler (Ages 0-3):', description: 'Environment: Safe, nurturing, and prepared with age-appropriate materials.Focus: Sensory exploration, motor skills development, and fostering independence.Key Components: Self-care activities, language development, and basic motor coordination tasks.Outcome: Children develop basic motor coordination, language skills, and a sense of order.' },
    { image: img3, title: 'Infant-Toddler (Ages 0-3):', description: 'Environment: Safe, nurturing, and prepared with age-appropriate materials.Focus: Sensory exploration, motor skills development, and fostering independence.Key Components: Self-care activities, language development, and basic motor coordination tasks.Outcome: Children develop basic motor coordination, language skills, and a sense of order.' },
    { image: img4, title: 'Infant-Toddler (Ages 0-3):', description: 'Environment: Safe, nurturing, and prepared with age-appropriate materials.Focus: Sensory exploration, motor skills development, and fostering independence.Key Components: Self-care activities, language development, and basic motor coordination tasks.Outcome: Children develop basic motor coordination, language skills, and a sense of order.' },
    { image: img5, title: 'Infant-Toddler (Ages 0-3):', description: 'Environment: Safe, nurturing, and prepared with age-appropriate materials.Focus: Sensory exploration, motor skills development, and fostering independence.Key Components: Self-care activities, language development, and basic motor coordination tasks.Outcome: Children develop basic motor coordination, language skills, and a sense of order.' },
    { image: img6, title: 'Infant-Toddler (Ages 0-3):', description: 'Environment: Safe, nurturing, and prepared with age-appropriate materials.Focus: Sensory exploration, motor skills development, and fostering independence.Key Components: Self-care activities, language development, and basic motor coordination tasks.Outcome: Children develop basic motor coordination, language skills, and a sense of order.' }]

  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default CardContainer;