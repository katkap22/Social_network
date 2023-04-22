import React from 'react';
import s from './Navbar.module.css';
import { NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={s.navbar}>
            <div className={s.item}>
                <NavLink to="/profile" className={({ isActive }) => isActive && s.active }>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" className={({ isActive }) => isActive && s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" className={({ isActive }) => isActive && s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" className={({ isActive }) => isActive && s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" className={({ isActive }) => isActive && s.active}>Settings</NavLink>
            </div>
        </div>
    );
};

export default Navbar;