import React from 'react';
import './PostCard.css'

class PostCard extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            postData : this.props.data,
            index : this.props.position
        }
    }

    likePost(index){
        this.checkLogin();
    }

    checkLogin(){
        
    }

    render(){
        let likeimg = require('../../images/like.png')
        return(
            <div>
                <div className={'mycard'}>
                    <img src={this.state.postData.img} />
                    <div className={'iconOverlay'}>
                        <span>
                            <img variant="top" src={likeimg} style={{width:20, height:20}} onClick={this.likePost.bind(this, this.state.index)}/>
                            <i>{this.state.postData.likes}</i>
                        </span>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default PostCard;