import React from 'react'
import Header from '../../Components/Header/Header.js'
import blogPost from '../../Components/Data/Posts.json'

function ContacUs(props) {
    // document.write(JSON.stringify(blogPost.data))
    // document.write(blogPost.data.view)


    for (var i = 0; i < blogPost.data.length; i++) {
        if (blogPost.data[i].id === 3) {
            blogPost.data[i].blogTitle = "Thomas";
          break;
        }
      }

      console.log(blogPost.data[i].blogTitle);




    return (
        <div>
            <Header/>
        </div>
    )
}



export default ContacUs

