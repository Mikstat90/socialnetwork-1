import React from 'react';
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'

export const MyPosts = () => {

    let postData = [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'It is my first post', likesCount: 20},
        {id: 3, message: 'Where is the Kaer Morhen?', likesCount: 50}
    ]

    return (
        <div className={s.myPosts}>
            <h3>My Posts</h3>
            <div>
                <div><input type="text"/></div>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <Post postData={postData}/>
        </div>
    );
};
