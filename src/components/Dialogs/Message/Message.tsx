import React from 'react';
import s from "../Dialogs.module.css";

type MessageType = {
    messagesData: DataType[]
}

type DataType = {
    id: number
    message: string
}


export const Message = (props: MessageType) => {
    return (
        <div>
            {props.messagesData.map(el => <div className={s.message}>{el.message}</div>)}
        </div>
    );
};

