import React, { Component } from 'react';

const imageStyle = {
    width: 300
};

class Post extends Component {
    render() {
        return (
            <div class="post">
               <img style={imageStyle} src={this.props.product.url} alt="" /> 
            </div>
        );
    }
}

export default Post;
