import React from "react";
import s from './Header.module.css'

const Header = () => {
    return (
      <header className={s.header}>
        <img alt="logo" src="https://img.freepik.com/free-psd/engraved-black-logo-mockup_125540-223.jpg?w=740&t=st=1681816007~exp=1681816607~hmac=6dafa030cbd0c0a1c32679c0a32ef594ab3c3cee754eb9c191ddddf09e54111a" />
      </header>
    );
}

export default Header;
