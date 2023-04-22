import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: '5'},
    {id: 2, message: "It's my first post", likesCount: 25},
]
let dialogs = [
    {id: 1, name: 'Ekaterina'},
    {id: 2, name: "Yuliya"},
    {id: 3, name: 'John'},
    {id: 4, name: 'Natalia'},
    {id: 5, name: 'Vova'},
]
let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your name?'},
    {id: 3, message: 'Yo'},
]

root.render(
  <React.StrictMode>
    <App arrPosts={posts} arrDialogs={dialogs} arrMessages={messages}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
