import React from 'react';
import {Post} from "./Post/Post";
import d from './MyPosts.module.css'

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
        <div className={d.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div><textarea></textarea></div>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={d.posts}>
                <Post postData={props.postData}/>
            </div>
        </div>
    );
};
