import React, { Component } from 'react';
import Comment from './Comment';

class Post extends Component {    
    constructor(props) {
        super(props);
        this.state = {
            comments: [
                'Great post!',
                'Good work.'
                ]
        };
    }    

    render() {
        return (
        <div className="post">
            {this.props.children}
            <div className="comments-section">
                {this.state.comments.map((comment) => <Comment content={comment}/>)}
            </div>
        </div>
    )
  }
}

export default Post;