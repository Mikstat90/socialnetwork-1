import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            My Posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <Post message={'Hi, how are you?'} likesCount={15}/>
            <Post message={'It is my first post'} likesCount={20}/>
        </div>
    );
};
