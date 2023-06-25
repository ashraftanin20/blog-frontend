import React from 'react'
import { useParams } from 'react-router-dom'

function PostPage() {
    const { postId } = useParams();
  return (
    <div>
        <h1>{postId}</h1>
    </div>
  )
}

export default PostPage