import React from 'react';
import { UilTimes } from '@iconscout/react-unicons';
import Chart from 'react-apexcharts';
import { motion } from 'framer-motion';

const ExpandedCard = ({ params, setExpanded }) => {
  const { color, title, series } = params;
  const timeElapsed = Date.now();
  let today = new Date(timeElapsed);
  today = today.toISOString().slice(0, 10);

  const data = {
    options: {
      chart: {
        type: 'area',
        height: 'auto',
      },
      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: '#000',
        opacity: 0.35,
      },
      fill: {
        colors: ['#fff'],
        type: 'gradient',
      },
      dataLabels: {
        enable: false,
      },
      stroke: {
        curve: 'smooth',
        colors: ['white'],
      },
      tooltip: {
        x: {
          format: 'dd/MM/yyyy HH:mm',
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: 'datetime',
        categories: [
          `${today}T03:00:00:000Z`,
          `${today}T04:30:00:000Z`,
          `${today}T05:30:00:000Z`,
          `${today}T06:30:00:000Z`,
          `${today}T07:30:00:000Z`,
          `${today}T08:30:00:000Z`,
          `${today}T09:30:00:000Z`,
        ],
      },
    },
  };
  return (
    <motion.div
      className="ExpandedCard"
      style={{
        background: color.background,
        boxShadow: color.boxShadow,
      }}
      layoutId="expandableCard"
    >
      <div style={{ alignSelf: 'flex-end', cursor: 'pointer', color: 'white' }}>
        <UilTimes onClick={setExpanded} />
      </div>
      <span>{title}</span>
      <div className="chartContainer">
        <Chart series={series} type="area" options={data.options} />
      </div>
      <span>Last 24 hours</span>
    </motion.div>
  );
};

export default ExpandedCard;
