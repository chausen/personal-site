import React, { Component } from 'react';
import Reply from './Reply';

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            replies: ['I agree!']
        };    
    }   

    render() {
        return (
            <div className={'comment'}>
                <p>{this.props.content}</p>
                <div className={'replies-section'} >
                    {this.state.replies.map((reply) => 
                        <Reply content={reply} />
                    )}
                </div>
            </div>
        );
    }
}

export default Comment;