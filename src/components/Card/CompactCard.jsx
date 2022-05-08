import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Card.css';

const CompactCard = ({ params }) => {
  const Png = params.png;
  const { value, barValue, color, title } = params;

  return (
    <div
      className="compactCard"
      style={{
        background: color.background,
        boxShadow: color.boxShadow,
      }}
    >
      <div className="radialBar">
        <CircularProgressbar value={barValue} text={`${barValue}%`} />
        <span>{title}</span>
      </div>
      <div className="detail">
        <Png />
        <span>$ {value}</span>
        <span>Last 24 hours</span>
      </div>
    </div>
  );
};

export default CompactCard;
