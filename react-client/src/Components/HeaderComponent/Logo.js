import React, { Component } from 'react';

function Logo(props) {
    return (
        <div className="logo-section">
            <h1 className="logo-title">{props.title}</h1>
            <h2 className="logo-subtitle">{props.subtitle}</h2>
            <img />
        </div>            
    );
}

export default Logo;