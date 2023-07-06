import React, { useState } from 'react';
import './AppDrawer.css';
import barsIcon from './bars.png';

export default function AppDrawer({ items, title }) {
  const [open, setOpen] = useState(false);
  const [header, setHeader] = useState(0);

  function handleClick(index) {
    setOpen(!open);
    setHeader(index);
  }

  const appDrawerOpen = open ? 'container' : 'hidden';
  const openEffect = open ? 'drawer' : '';
  const appDrawerBtn = open ? 'hidden' : 'bars-icon';

  return (
    <>
      <button className={appDrawerBtn} onClick={() => setOpen(!open)}>
        <img className="icon" src={barsIcon} alt="icon" />
      </button>
      <h1>{items[header]}</h1>
      <div className={appDrawerOpen}>
        <div className={openEffect}>
          <h3>{title}</h3>
          <MenuItems items={items} onClick={handleClick} />
        </div>
        <div className="shade" onClick={() => setOpen(!open)}></div>
      </div>
    </>
  );
}

const MenuItems = ({ items, onClick }) => {
  const menu = items.map((item, index) => (
    <button className="menu-button" key={index} onClick={() => onClick(index)}>
      {item}
    </button>
  ));
  return <div className="menu-drawer">{menu}</div>;
};
