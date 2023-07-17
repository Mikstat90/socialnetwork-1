import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={'Geralt'} id={1}/>
                <DialogItem name={'Vesemir'} id={2}/>
                <DialogItem name={'Eskel'} id={3}/>
                <DialogItem name={'Lambert'} id={4}/>
            </div>
            <div className={s.messages}>
                <Message message={'Hi'}/>
                <Message message={'How are you?'}/>
                <Message message={'What happened?'}/>
            </div>
        </div>
    );
};
