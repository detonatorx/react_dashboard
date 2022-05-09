import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import Logo from '../../imgs/logo.png';
import { SidebarData } from '../../mockupdata/Data';
import { UilSignOutAlt, UilBars } from '@iconscout/react-unicons';
import { motion } from 'framer-motion';

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(true);
  const sidebarVariants = {
    true: {
      left: '0',
    },
    false: {
      left: '-50%',
    },
  };

  return (
    <>
        <div className="bars" onClick={() => setExpanded(!expanded)}>
          <UilBars />
        </div>
      <motion.div
        className="Sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}`: ''}
      >
        {/* logo */}
        <div className="logo">
          <img src={Logo} alt="" />
          <span>
            Sh<span>o</span>ps
          </span>
        </div>

        {/* menu */}

        <div className="menu">
          {SidebarData.map((item, idx) => {
            return (
              <div
                className={`menuItem ${selected === idx ? 'active' : ''}`}
                key={idx}
                onClick={() => setSelected(idx)}
              >
                <item.icon />
                <span>{item.heading}</span>
              </div>
            );
          })}
          <div className="menuItem">
            <UilSignOutAlt />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
