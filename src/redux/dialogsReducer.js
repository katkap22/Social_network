const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: 'Ekaterina', url: 'https://html5css.ru/w3css/img_avatar3.png'},
        {id: 2, name: "Yuliya", url: 'https://html5css.ru/w3css/img_avatar3.png'},
        {id: 3, name: 'John', url: 'https://html5css.ru/w3css/img_avatar3.png'},
        {id: 4, name: 'Natalia', url: 'https://html5css.ru/w3css/img_avatar3.png'},
        {id: 5, name: 'Vova', url: 'https://html5css.ru/w3css/img_avatar3.png'},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your name?'},
        {id: 3, message: 'Yo'},
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, { id: 4, message: state.newMessageText}],
                newMessageText: ''
            }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            };
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageTextActionCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

export default dialogsReducer;