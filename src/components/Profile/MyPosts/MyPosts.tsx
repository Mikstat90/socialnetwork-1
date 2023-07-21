import React from 'react';
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'
import {PostDataType} from "../../../redux/State";

type MyPostsType = {
    postData: PostDataType[]
}

export const MyPosts = (props: MyPostsType) => {
    return (
        <div className={s.myPosts}>
            <h3>My Posts</h3>
            <div>
                <div><input type="text"/></div>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <Post postData={props.postData}/>
        </div>
    );
};