import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export const Profile = () => {

    let postData = [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'It is my first post', likesCount: 20},
        {id: 3, message: 'Where is the Kaer Morhen?', likesCount:50}
    ]

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts postData={postData}/>
        </div>
    );
};
