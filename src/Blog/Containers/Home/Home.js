import React, { Component , useState, useEffect} from 'react';
import Header from '../../Components/Header/Header'
import Header2 from '../../Components/Hero/Hero'
import blogData from '../../Components/Data/Posts.json'
import SideBar from '../../Components/SideBar/SideBar';
import HomePosts from '../../Components/HomePosts/HomePosts'
import Pagination from '../../Components/pagination/pagination'
import './Home.css'


const Home = () => {


  
   
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);
  
    useEffect(() => {
      const fetchPosts = async () => {
        setLoading(true);
        
        setPosts(blogData.data.reverse());
        setLoading(false);
      };
      fetchPosts();
    }, []);

    // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);


    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);






    

    

    return (
      <div>
        <Header/>
        <Header2/>
        <div className="HomeContainer">
          <div className="PostContainer">
               <HomePosts posts={currentPosts} loading={loading} />
               <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
          </div >
          <div className="SlideContainer">
          <SideBar/>
          </div>
        </div>
      </div>
    );
  }

export default Home