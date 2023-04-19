import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={s.navbar}>
      <div className={s.itemWrapper}><a className={`${s.item} ${s.active}`} href="#s">Profile</a>
      </div>
      <div className={s.itemWrapper}>
        <a className={s.item} href="#s">Messages</a>
      </div>
      <div className={s.itemWrapper}>
        <a className={s.item} href="#s">News</a>
      </div>
      <div className={s.itemWrapper}>
        <a className={s.item} href="#s">Music</a>
      </div>
      <div className={s.itemWrapper}>
        <a className={s.item} href="#s">Settings</a>
      </div>
    </div>
  );
};

export default Navbar;