import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: '5'},
                {id: 2, message: "It's my first post", likesCount: 25},
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed');
    },

    subscribe(observer) {
        this._callSubscriber = observer; //паттерн observer (наблюдатель)
    },

    getState() {
        return this._state
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);

    }
}

window.store = store;

export default store;