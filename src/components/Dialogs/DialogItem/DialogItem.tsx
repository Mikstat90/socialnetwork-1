import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogItemType = {
    name: string
    id: number
}

export const DialogItem = (props: DialogItemType) => {

    let path = '/dialogs/' + props.id

    return (
        <div>
            <div className={s.dialog}><NavLink to={path} activeClassName={s.activeLink}>{props.name}</NavLink></div>
        </div>
    )
}