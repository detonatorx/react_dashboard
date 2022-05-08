import React, { useState } from 'react';
import './Card.css';
import { AnimateSharedLayout } from 'framer-motion';
import CompactCard from './CompactCard';

const Card = ({ card }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <AnimateSharedLayout>
      {expanded ? (
        expanded // <ExpandedCard />
      ) : (
        <CompactCard params={card} />
      )}
    </AnimateSharedLayout>
    // <div className="card">
    //   Card
    // </div>
  );
};

export default Card;
