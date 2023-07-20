import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

type ProfileType = {
    postData: PostDataType[]
}

type PostDataType = {
    id: number
    message: string
    likesCount: number
}

export const Profile = (props: ProfileType) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts postData={props.postData}/>
        </div>
    );
};
