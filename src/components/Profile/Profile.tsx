import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src='https://images.pushsquare.com/9a7b74d140a8c/the-witcher-3-ps5-1.large.jpg'
                     alt='witcher-2'/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    );
};
