import React, { useState } from 'react';
import './Card.css';
import { AnimateSharedLayout } from 'framer-motion';
import CompactCard from './CompactCard';
import ExpandedCard from './ExpandedCard';

const Card = ({ card }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard params={card} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard params={card} setExpanded={() => setExpanded(true)} />
      )}
    </AnimateSharedLayout>
  );
};

export default Card;
