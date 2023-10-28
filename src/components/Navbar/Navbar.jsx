import React from 'react';
import s from './Navbar.module.css';
import { NavLink} from "react-router-dom";

const Navbar = (props) => {

    // let urls = props.state.friends.map(f => {return<div><img src={f.url} /><div>{f.name}</div></div>});

    // let urls = props.state.map(item => item.url);
    // let names = props.state.map(item => item.name);

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
            <div className={s.item}>
                <NavLink to="/users" className={({isActive}) => isActive && s.active}>Find users</NavLink>
            </div>
            </div>
    );
};

export default Navbar;