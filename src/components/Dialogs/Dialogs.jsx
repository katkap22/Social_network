import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

//     let dialogs = [
//         {id: 1, name: 'Ekaterina'},
//         {id: 2, name: "Yuliya"},
//         {id: 3, name: 'John'},
//         {id: 4, name: 'Natalia'},
//         {id: 5, name: 'Vova'},
//     ]
//
//     let messages = [
//         {id: 1, message: 'Hi'},
//         {id: 2, message: 'How is your name?'},
//         {id: 3, message: 'Yo'},
//     ]

    let dialogsElement = props.arrDialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElement = props.arrMessages.map(m => <Message message={m.message} id={m.id}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messageElement}
            </div>
        </div>
    );
};

export default Dialogs;