import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Blog/Containers/Home/Home'
import Post from './Blog/Containers/Posts/Post'
import ContactUs from './Blog/Containers/ContactUs/ContacUs'

// import { BrowserRouter as Router ,Switch, Route } from 'react-router-dom';
class App extends Component {
  render() {
    return (
     <Router>
       <Route path='/'  exact component={Home}/>
       <Route path='/contact-us' component={ContactUs}/>
       <Route path='/aboutUs' component={Home}/>
       <Route path="/Posts/:postId" component={Post}/>
       
     </Router> 
    );
  }
}

export default App;



