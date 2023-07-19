import s from './DialogItem.module.css'
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
            <div>
                {props.dialogsData.map((el) => {
                    return (
                        <div className={s.dialog}>
                            <img className={s.img} src="https://i.pinimg.com/originals/d3/f7/6c/d3f76ce627781e576c6cdab4993817a2.jpg" alt=""/>
                            <NavLink to={'/dialogs/' + el.id} activeClassName={s.activeLink}>{el.name}</NavLink>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}