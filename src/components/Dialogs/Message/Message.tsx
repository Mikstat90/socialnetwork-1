import React from 'react';
import s from './Message.module.css'


type MessageType = {
    messagesData: DataType[]
}

type DataType = {
    id: number
    message: string
}


export const Message = (props: MessageType) => {
    return (
        <div className={s.message}>
            {props.messagesData.map(el => <div>{el.message}</div>)}
        </div>
    );
};

