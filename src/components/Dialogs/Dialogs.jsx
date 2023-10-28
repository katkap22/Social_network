import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import * as PropTypes from "prop-types";
import {Button} from "@mui/material";

Button.propTypes = {
    variant: PropTypes.string,
    children: PropTypes.node
};
const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElement = state.dialogs.map(d => <DialogItem key={d.id} f={d.url} name={d.name} id={d.id}/>)
    let messageElement = state.messages.map(m => <Message key={m.id} message={m.message} id={m.id} />)
    let newMessageText = state.newMessageText;

    let sendMessage = () => {
        props.sendMessage();
    }
    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{messageElement}</div>
                <div>
                    <textarea
                             value={newMessageText}
                             onChange={onMessageChange}
                             className={s.myMessageInput}
                             placeholder="your message"
                             required>
                    </textarea>
                </div>
                <div>
                    <Button
                        variant="contained"
                        onClick={sendMessage}>Send message
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;