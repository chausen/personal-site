import React, { Component } from 'react';

function Reply (props) {
    return (
        <div className="reply">
            <p>{props.content}</p>
        </div>
    );
}

export default Reply;