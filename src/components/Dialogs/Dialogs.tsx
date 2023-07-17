import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

type DialogsType = {
    dialogsData: DialogsDataType[]
    messagesData: MessagesDataType[]
}

type DialogsDataType = {
    id: number
    name: string
}

type MessagesDataType = {
    id: number
    message: string
}

export const Dialogs = (props: DialogsType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem dialogsData={props.dialogsData}/>
            </div>
            <div className={s.messages}>
                <Message messagesData={props.messagesData}/>
            </div>
        </div>
    );
};
