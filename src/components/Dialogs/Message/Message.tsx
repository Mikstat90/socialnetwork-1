import React from 'react';
import s from './Message.module.css'
import {MessagesDataType} from "../../../redux/State";

type MessageType = {
    messagesData: MessagesDataType[]
}

export const Message = (props: MessageType) => {
    return (
        <div className={s.message}>
            {props.messagesData.map((el,index) => <div key={index}>{el.message}</div>)}
        </div>
    );
};

