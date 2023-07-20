import React from 'react';
import s from './Message.module.css'

type MessageType = {
    messagesData: MessagesDataType[]
}

type MessagesDataType = {
    id: number
    message: string
}

export const Message = (props: MessageType) => {
    return (
        <div className={s.message}>
            {props.messagesData.map((el,index) => <div key={index}>{el.message}</div>)}
        </div>
    );
};

