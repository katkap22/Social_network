import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}
                     className={({ isActive }) => isActive && s.active}>
                     <div className={s.dialogsItemLink}>
                         <img src={props.f} alt=''/>
                         <div>{props.name}</div>
                     </div>
            </NavLink>
        </div>
    )
}

export default DialogItem;