import axios from 'axios';
import React, { useEffect, useReducer } from 'react'
import { Link, useParams } from 'react-router-dom';

const reducer = (state, action) => {
    switch (action.type) {
        case 'POST_REQUEST':
            return {...state, loading: true};
        case 'POST_SUCCESS':
            return {...state, loading: false, post: action.payload};
        case 'POST_FAIL':
            return {...state, loading: false, error: action.payload};
        default:
            return state;
    } 
};

function PostPage() {
    const { postId } = useParams();
    const [state, dispatch] = useReducer(reducer, 
        {
            loading: false,
            error: '',
            post: {user:{}},
        }
    );
    const { loading, error, post } = state;

    const loadPost = async () => {
        dispatch({type: 'POST_REQUEST'});
        try {
            const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
            const { data: userData } = await axios.get(`https://jsonplaceholder.typicode.com/users/${data.userId}`);
            dispatch({type: 'POST_SUCCESS', payload: {...data, user: userData} });
        } catch (err) { 
            dispatch({type: 'POST_FAIL', payload: err.message});
        }
    }

    useEffect(() => {
        loadPost();
    }, []);
  return (
    <div>
        <Link to="/">Back to Home</Link>
        {
        loading ? (<div>Loading post...</div>)
        : error ? (<div>Error: {error}</div>)
        : (
        <div className="blog">
            <div className="content">
                <div>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>   
            </div>
            <div className="sidebar">
                <h2>{post.user.name}</h2>
                <ul>
                    <li>Email: {post.user.email}</li>
                    <li>Phone: {post.user.phone}</li>
                    <li>Website: {post.user.website}</li>
                </ul>
            </div>
        </div>
        )}
    </div>
  )
}

export default PostPage