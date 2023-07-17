import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

export const Dialogs = () => {

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

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem dialogsData={dialogsData}/>
            </div>
            <div className={s.messages}>
                <Message messagesData={messagesData}/>
            </div>
        </div>
    );
};
