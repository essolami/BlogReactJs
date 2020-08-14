import React from 'react'
import './Post.css'
import Header from '../../Components/Header/Header'
import BlogPost from '../../Components/BlogPost/BlogPost'
import SideBar from '../../Components/SideBar/SideBar'
import './Post.css'
class Post extends React.Component {
    
    render(){
   
    return (
        <div>
            <Header/>
            <div className="containerPost" style={{backgroundColor:'rgb(233 234 237)'}}>

                <div className="PostContainer" style={{marginTop:10}}>
                <BlogPost {... this.props}/>
                </div >
                <div className="SlideContainer" style={{marginTop:15}}>
                <SideBar/>
                </div>
                
            </div>
            
        </div>
    )
}
}



export default Post

