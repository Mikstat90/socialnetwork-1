import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';

let postData = [
    {id: 1, message: 'Hi, how are you?', likesCount: 15},
    {id: 2, message: 'It is my first post', likesCount: 20},
    {id: 3, message: 'Where is the Kaer Morhen?', likesCount: 50}
]

let dialogsData = [
    {id: 1, name: 'Geralt'},
    {id: 2, name: 'Vesemir'},
    {id: 3, name: 'Eskel'},
    {id: 4, name: 'Lambert'},
]

let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'What happened?'},
]

ReactDOM.render(<App
    postData={postData}
    dialogsData={dialogsData}
    messagesData={messagesData}
/>,document.getElementById('root'));