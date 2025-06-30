import React,from 'react';

const PostList = ({ posts }) => (
    <div>
        <h2>Publicaciones del Blog</h2>
        <ul>
            {posts.map((post) => (
                <li key={post.id}>
                    <strong>{post.title}:</strong> {post.body}
                </li>
            ))}
        </ul>
    </div>
);

export default PostList;