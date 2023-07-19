import React from 'react';
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'

type MyPostsType = {
    postData: PostDataType[]
}

type PostDataType = {
    id: number
    message: string
    likesCount: number
}

export const MyPosts = (props: MyPostsType) => {

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div><input type="text"/></div>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                <Post postData={props.postData}/>
            </div>
        </div>
    );
};
