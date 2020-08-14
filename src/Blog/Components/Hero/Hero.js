import React from 'react'
import blogData from '../Data/Posts.json'
import './Hero.css'

function Hero() {
    //------------------------------------------------ Declaration ------------------------------- 
    var postId;
    var fourPosts=0,numberPosts=0;
        for(var key in blogData.data){
            if(blogData.data.hasOwnProperty(key)){
            postId = key;
            }
        }
    //------------------------------------ FOUR CONTAINERS LAST POSTS ---------------------------------------------
    numberPosts = parseInt(postId) + 1;
    const posts = blogData.data.map(() => {
        numberPosts--;
        fourPosts++;
        const fourPostsInverse = blogData.data.find(post => numberPosts == post.id)   
        if(fourPostsInverse){
    // ------------------------------------------- Declaration backgroung Img The small Posts --------------------
                                        var bg=require('../../Images/'+fourPostsInverse.blogImage);
    // ------------------------------------------- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! --------------------
            if(fourPosts<=4) {
                return(
                    <div className="SmallItem" key={fourPostsInverse.id} style={{backgroundImage: "url("+bg+")"}}>
                        <div className="back"></div>
                        <div className="pack2">
                            <span className="postTag">{fourPostsInverse.blogCategory}</span>
                            <h2 className="postTitle">
                                <a href={"/Posts/"+fourPostsInverse.id}>{fourPostsInverse.blogTitle}</a>
                            </h2>
                        </div>
                    </div>
    
                )
            }
        }
    })
    //---------------------------------------------------------------------------------------------------------------
    //--------------------------------------BIG POSTS CONTAINER ------------------------------------------- 
    function getMax(arr, prop) {
        var max;
        for (var i=0 ; i<arr.length ; i++) {
            if (max == null || parseInt(arr[i][prop]) > parseInt(max[prop]))
            max = arr[i];
        }
        return max;
    }
    var maxPpg = getMax(blogData.data, "views");
    const heroPost = blogData.data.find(post => maxPpg.views == post.views) 
// ------------------------------------------- Declaration backgroung Img The Big Posts --------------------
                                var bigbg=require('../../Images/'+heroPost.blogImage);
// ------------------------------------------- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! --------------------
    return (
        <div className="HeroContainer" >
      {/* --------------------------------------BIG POSTS CONTAINER -------------------------------------------   */}
                <div className="BigHero" style={{backgroundImage: "url("+bigbg+")"}}>  
                    <div className="back"></div>
                    <div className="pack">
                        <span className="postTag">{heroPost.blogCategory}</span>
                        <h2 className="postTitle"><a href={"/Posts/"+heroPost.id}><i className="fas fa-star "></i>{heroPost.blogTitle} </a></h2>
                    </div>
                </div>
        {/* ------------------------------------ FOUR CONTAINERS LAST POSTS --------------------------------------------- */}
        <div className="SmallContainer">
        {posts}
        </div>
        </div>
    )
}
export default Hero




