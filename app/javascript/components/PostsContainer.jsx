import React, { useState } from 'react';
import PostList from './PostList';
import PostForm from './PostForm';

const PostsContainer = (props) => {
    const [posts, setPosts] = useState(props.posts);

    const handlePostCreated = (newPost) => {
        setPosts([...posts, newPost]);
    };

    return (
        <div>
            <PostForm onPostCreated={handlePostCreated} />
            <hr />
            <PostList posts={posts} />
        </div>
    );
};

export default PostsContainer;