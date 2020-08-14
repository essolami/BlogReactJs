import React from 'react'
import './BlogPost.css'
import ReadMoreAndLess from 'react-read-more-less';
import blogPost from '../Data/Posts.json'
class BlogPost extends React.Component {
    
    

    render(){
        console.log(this.props)
     //------------------------------------------------ Declaration ------------------------------- 
        var post ={}
        var blogtxt=''
        if(this.props.postId){
            const postId = this.props.postId;
            post = blogPost.data.find(post=>post.id == postId)
            blogtxt =  <ReadMoreAndLess ref={this.ReadMore} className="read-more-content" charLimit={230} readMoreText= " => Read More" readLessText=" => Read less">
            { post.blogText } 
            </ReadMoreAndLess> 
        }else{
            const postId = this.props.match.params.postId;
            post = blogPost.data.find(post=>post.id == postId)
            
    } 
        
    return (
        <div className="blogPost" key={post.id}>
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
<div className="postContent" style={{margin: 0,padding:0,backgroundColor:'#fff'}}>
    <p><i class="fas fa-quote-left"></i> {post.blogText}<i class="fas fa-quote-right"> </i></p>
    <div class="post-meta-2" style={{paddingBottom:10}}>
        <a href="#"><i class="fa fa-eye" aria-hidden="true"></i> {post.views}</a>
        <a href="#"><i class="fa fa-thumbs-up" aria-hidden="true"></i> 834</a>
        <a href="#"><i class="fa fa-comments" aria-hidden="true"></i> 234</a>
    </div>
    
</div>
<div class="post-author d-flex align-items-center">
                                <div class="post-author-thumb">
                                    <img src={require('../../Images/'+ post.blogImage)} alt=""/>
                                </div>
                                <div class="post-author-desc pl-4">
                                    <a href="#" class="author-name">{post.author}r</a>
                                    <p>Duis tincidunt turpis sodales, tincidunt nisi et, auctor nisi. Curabitur vulputate sapien eu metus ultricies fermentum nec vel augue. Maecenas eget lacinia est.</p>
                                </div>
                            </div>

                            <div class="like-dislike-share my-5">
                                <h4 class="share">240<span>Share</span></h4>
                                <a href="#" class="facebook"><i class="fab fa-facebook" aria-hidden="true"></i> Share on Facebook</a>
                                <a href="#" class="twitter"><i class="fab fa-twitter" aria-hidden="true"></i> Share on Twitter</a>
                            </div>

                            </div>
                
       













    )
}
}



export default BlogPost

