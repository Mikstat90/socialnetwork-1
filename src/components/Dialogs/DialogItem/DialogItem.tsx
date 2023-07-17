import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogItemType = {
    dialogsData: DialogType[]
}

type DialogType = {
    id: number
    name: string
}

export const DialogItem = (props: DialogItemType) => {
    return (
        <div>
            {props.dialogsData.map((el) => {
                return (
                    <div className={s.dialog}><NavLink to={'/dialogs/' + el.id} activeClassName={s.activeLink}>{el.name}</NavLink></div>
                )
            })}
        </div>
    )
}