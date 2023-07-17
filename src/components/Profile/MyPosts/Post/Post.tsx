import React from 'react';
import s from "./Post.module.css";

type PostType = {
    postData: DataType[]
}

type DataType = {
    id: number
    message: string
    likesCount: number
}

export const Post = (props: PostType) => {
    return (
        <div className={s.item}>
            {props.postData.map((el) => {
                return (
                    <div>
                        <img src="https://pbs.twimg.com/profile_images/1394990756717268994/_MiZSgHL_400x400.jpg"
                             alt="witcher-3"/>
                        {el.message}
                        <div>
                            <span>like</span> {el.likesCount}
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

