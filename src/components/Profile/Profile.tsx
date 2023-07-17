import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

type ProfileType = {
    postData: DataType[]
}

type DataType = {
    id: number
    message: string
    likesCount: number
}

export const Profile = (props: ProfileType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts postData={props.postData}/>
        </div>
    );
};
