import React from 'react'
import './SideBar.css'
import blogPost from '../Data/Posts.json'
import AboutUsImg from '../../Images/aboutus.jpg'
import add2 from '../../Images/add2.png'

function SideBar() {


    function getMax(arr, prop) {
        var max;
        for (var i=0 ; i<arr.length ; i++) {
            if (max == null || parseInt(arr[i][prop]) > parseInt(max[prop]))
            max = arr[i];
        }
        return max;
    }
    var maxPpg = getMax(blogPost.data, "views");
     


    



     const posts = blogPost.data.map(post => {
         if(maxPpg.views==post.views){
            return(
                <p key={post.id} className="RecentPostLink">
                    <a href={'/Posts/'+post.id}> {post.blogTitle}  </a>
                    <div className="date">{post.postedOn}</div>
                     <span> <i className="far fa-eye"></i> {post.views} views  <i className="fas fa-star "></i> </span>
                </p>
            )
         }else{
            return(
                <p key={post.id} className="RecentPostLink">
                    <a href={'/Posts/'+post.id}> {post.blogTitle} </a>
                    <div className="date">{post.postedOn}</div>
                    <span> <i className="far fa-eye"></i> {post.views} views  </span>
                </p>
            )
         }
         
     }).reverse();





    return (
    <div className="SlideBarContainer">
        <div className="AboutUs">
            <h4>About us</h4>
            <img alt='AboutUsImg' src={AboutUsImg}/>
            <p>Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica.</p>
        </div>           
        <div className='widget'> 
            <h4 className='title'>SOCIAL NETWORK</h4>
            <div className='widget'>
                <div className="social">
                    <ul className="icon">
                        <li><a className="facebook" href="https://www.facebook.com/mitroumitsos/" target="_blank" rel="noopener noreferrer" title="Facebook"><i className="fab fa-facebook"></i></a></li>
                        <li><a className="pinterest" href="https://www.pinterest.com/mitroumitsos/" target="_blank" rel="noopener noreferrer" title="Pinterest"><i className="fab fa-pinterest"></i></a></li>
                        <li><a className="instagram" href="https://www.instagram.com/mitroumitsos/" target="_blank" rel="noopener noreferrer" title="instagram"><i className="fab fa-instagram"></i></a></li>
                        <li><a className="twitter" href="https://www.twitter.com/mitroumitsos/" target="_blank" rel="noopener noreferrer" title="twitter"><i className="fab fa-twitter"></i></a></li>
                    </ul>
                </div>
            </div>
        </div> 
        <div className="RecentsPostsContainer">
            <h4>Recents Posts</h4>
           <p>{posts}</p>
        </div>
        <div className="single-sidebar-widget">
                <a href="#" className="add-img"><img src={add2} alt=""/></a>
            </div>
    </div>
    )
}


export default SideBar

