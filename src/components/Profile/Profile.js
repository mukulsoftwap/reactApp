import React from 'react';
import './Profile.css'
import cookie from 'react-cookies'
import { Link } from 'react-router-dom'
import { Row, Col, Container, Nav, Navbar, Form, FormControl, Button} from 'react-bootstrap'
import PostCard from '../PostCard/PostCard'
import Constants from '../../config/Constants';
import Header from '../Header/Header';
import { setAllPostList } from '../../actions'

class Profile extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            likedPosts : [],
            user : {
                "name": "Mukul Sharma",
                "email":"mukulsoftwap@gmail.com",
                "username":"mukulsoftwap",
                "mobile": "8860033237",
                "photo": "https://yt3.ggpht.com/a-/AAuE7mA_3tDmeDc_QWDqHbKNAmxItWr18iYKcXgbFQ=s900-mo-c-c0xffffffff-rj-k-no",
                "createdAt": "2019-03-09T10:11:38.690Z",
                "updatedAt": "2019-10-28T05:01:13.859Z",
                "posts" : "100",
                "followers" : "12k",
                "following" : "2.3k",
                "id": "5c83915aeb5b920954f6ed0f"
            }
        }
    }

    componentWillMount(){
        // this.getUserProfile();
        this.getLikedPosts();
    }

    getUserProfile(){

    }

    getLikedPosts(){
        let url = Constants.BASE_URL + "/likedPosts";
        fetch(url)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({likedPosts : result});
            },
            (error) => {
            }
        )
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
        console.log(index)
    }

    render(){
        return(
            <div>
            <Header page={Constants.PAGES.Profile}></Header>
            <Container style={{maxWidth:960, marginTop:80}}>
                <Row>
                    <Col md="3">
                        <img src={this.state.user.photo} className={"profilePic"}/>
                    </Col>
                    <Col md="7">
                        <h2>{this.state.user.username}</h2>
                        <Row>
                            <Col><b>{this.state.user.posts}</b> Posts</Col>
                            <Col><b>{this.state.user.followers}</b> Followers</Col>
                            <Col><b>{this.state.user.following}</b> Following</Col>
                        </Row>
                    </Col>
                </Row>
                <h3 className={'heading'}>Liked Posts</h3>
                <Row>
                    {
                    this.state.likedPosts.map((feed, index)=>{
                        return (
                        <Col key={index} md="4">
                            <PostCard data={feed} position={index}></PostCard>
                        </Col>
                        )
                    })
                    }
                </Row>
            </Container>
            </div>
        )
    }
}

export default Profile;