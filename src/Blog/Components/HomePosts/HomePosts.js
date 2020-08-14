import React, { Component } from 'react'

const Posts = ({ posts, loading }) => {
    if (loading) {
      return <h2>Loading...</h2>;
    }

     
        return (
            <div>
                {posts.map(post => (
<div>
                  <div className="blogPostContainer" key={post.id}>
      

      <div className="postImageContainer">
          <img src={require('../../Images/'+ post.blogImage)} alt="Post Image" />
      </div>
      <div className="blogHeader">
        <span className="blogCategory">{post.blogCategory}</span>
        <h1><a href={"/Posts/"+post.id}>{post.blogTitle}</a></h1>
         <p className="postedBy">
           <span className="meta-date">posted on </span> 
           {post.postedOn}
           <span className="meta-author"> by {post.author} </span>
         </p>
      </div>
      <div className="postContent">
          <p >{post.blogText.substr(0,250)+'...'}<div><a href={"/Posts/"+post.id}>Read More</a></div></p>
      </div>
   </div>
            </div>
    ))}
            </div>
            
        )
    }

    export default Posts;
