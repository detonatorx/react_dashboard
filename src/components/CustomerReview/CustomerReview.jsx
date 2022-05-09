import React from 'react';
import './CustomerReview.css';
import Chart from 'react-apexcharts';

const CustomerReview = () => {
  const timeElapsed = Date.now();
  let today = new Date(timeElapsed);
  today = today.toISOString().split('T')[0];

  const data = {
    series: [
      {
        name: 'Review',
        data: [10, 50, 30, 90, 40, 120, 100],
      },
    ],
    options: {
      chart: {
        type: 'area',
        height: 'auto',
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
        colors: ['#ff929f'],
      },
      tooltip: {
        x: {
          format: 'dd/MM/yyyy HH:mm',
        },
      },
      grid: {
        show: false,
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
    <div className="CustomerReview">
      <Chart series={data.series} options={data.options} type="area" />
    </div>
  );
};

export default CustomerReview;
