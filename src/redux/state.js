import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: '5'},
            {id: 2, message: "It's my first post", likesCount: 25},
        ],
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
        ]
    },
    sidebar: {
        friends: [
            {id: 1, name: 'Ekaterina', url: 'https://html5css.ru/w3css/img_avatar3.png' },
            {id: 2, name: 'Yuliya', url: 'https://html5css.ru/w3css/img_avatar3.png' },
            {id: 3, name: 'John', url: 'https://html5css.ru/w3css/img_avatar3.png' },
            {id: 4, name: 'Natalia', url: 'https://html5css.ru/w3css/img_avatar3.png' },
            {id: 5, name: 'Vova', url: 'https://html5css.ru/w3css/img_avatar3.png' },
            {id: 6, name: 'Sasha', url: 'https://html5css.ru/w3css/img_avatar3.png' }
        ]
    }
}

export let addPost = (newPostMassage) => {
    let newPost = {
        id: 5, message: newPostMassage, likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}
export let addMessage = (newMessage) => {
    let newMessagesItem = {
        id:4, message: newMessage
    }
    state.dialogsPage.messages.push(newMessagesItem);
    rerenderEntireTree(state);
}
export default state;