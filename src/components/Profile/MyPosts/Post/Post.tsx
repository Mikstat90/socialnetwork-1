import React from 'react';
import s from "./Post.module.css";

type PostType = {
    message: string
    likesCount: number
}

export const Post = (props: PostType) => {
    return (
            <div className={s.item}>
                <img src="https://pbs.twimg.com/profile_images/1394990756717268994/_MiZSgHL_400x400.jpg"
                     alt="witcher-3"/>
                {props.message}
                <div>
                    <span>like</span> {props.likesCount}
                </div>
            </div>
    );
};

