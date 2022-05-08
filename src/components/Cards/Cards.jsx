import React from 'react';
import { CardData } from '../../mockupdata/Data';
import Card from '../Card/Card';
import './Cards.css';

const Cards = () => {
  return (
    <div className="Cards">
      {CardData.map((card, id) => {
        return (
          <div className="parentContainer">
            <Card card={card} />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
