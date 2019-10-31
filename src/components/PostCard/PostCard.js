import React from 'react';
import './PostCard.css'
import cookie from 'react-cookies'
import { Redirect } from 'react-router-dom'

class PostCard extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            postData : this.props.data,
            index : this.props.position,
            redirectToLogin : false,
            liked : false
        }
    }

    likePost(index){
        this.checkLogin(index);
    }

    checkLogin(index){
        cookie.load('token') ? this.addToLikePost(index) : this.gotoLogin(); 
    }

    gotoLogin(){
        this.setState({redirectToLogin : true})
    }

    addToLikePost(index){
        this.setState({liked : !this.state.liked})
        this.state.liked ? this.state.postData.likes-=1 : this.state.postData.likes+=1
    }

    render(){
        let likeimg = require(this.state.liked ? '../../images/like.png' : '../../images/unlike.png')
        return(
            <div>
                {this.state.redirectToLogin ? <Redirect to='/login' /> : null}
                <div className={'mycard'}>
                    <img src={this.state.postData.img} className={'shimmer'}/>
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