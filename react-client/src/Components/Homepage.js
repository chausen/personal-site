import React, { Component } from 'react';
import Post from './BlogComponents/Post';

class HomePage extends Component {
  
  render() {
    return (
      <div>
        <Post>
          <div>Post1</div>
        </Post>
        <Post>
          <div>Post2</div>
        </Post>
        <Post>
          <div>Post3</div>
        </Post>
      </div>
    )
  }
}

export default HomePage;