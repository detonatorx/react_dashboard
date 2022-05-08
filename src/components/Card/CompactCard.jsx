import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Card.css';
import { motion } from 'framer-motion';

const CompactCard = ({ params, setExpanded }) => {
  const Png = params.png;
  const { value, barValue, color, title } = params;

  return (
    <motion.div
      className="CompactCard"
      style={{
        background: color.background,
        boxShadow: color.boxShadow,
      }}
      onClick={setExpanded}
      layoutId='expandableCard'
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
    </motion.div>
  );
};

export default CompactCard;
