import React from 'react'
import Post from './post/Post'
import { useSelector } from 'react-redux'
import useStyles from "./style"


function Posts() {
    const classes=useStyles()

    const post=useSelector((state)=>state.posts);
    console.log(post);
  return (
    <>
    <div>Posts</div>
    <Post/>
    </>
  )
}

export default Posts