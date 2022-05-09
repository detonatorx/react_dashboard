import React from 'react';
import { UpdatesData } from '../../mockupdata/Data';
import './Updates.css';

const Updates = () => {
  return (
    <div className="Updates">
      {UpdatesData.map(update => {
        const { img, name, noti, time } = update;

        return (
          <div className="update">
            <img src={img} alt="" />
            <div className="noti">
              <div style={{ marginBottom: '0.5rem' }}>
                <span>{name} </span>
                <span>{noti}</span>
              </div>
              <span style={{color: 'gray'}}>{time}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Updates;
