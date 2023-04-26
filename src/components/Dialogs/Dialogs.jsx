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
//     let messages = [
//         {id: 1, message: 'Hi'},
//         {id: 2, message: 'How is your name?'},
//         {id: 3, message: 'Yo'},
//     ]

    let dialogsElement = props.state.dialogs.map(d => <DialogItem f={d.url} name={d.name} id={d.id}/>)
    let messageElement = props.state.messages.map(m => <Message message={m.message} id={m.id} />)

    let newMessageElement = React.createRef();
    let addMessage = () => {
        let text = newMessageElement.current.value;
        props.addMessage(text);
        text = '';
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messageElement}
                <textarea ref={newMessageElement}
                          onChange={() => {}}
                          className={s.myMessageInput}
                          placeholder="your message"
                          required
                ></textarea>
                <button onClick={ addMessage }>Add message</button>

            </div>
        </div>
    );
};

export default Dialogs;