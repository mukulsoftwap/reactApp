import React from 'react';
// import { Link } from 'react-router-dom'
import './App.css'
import Constants from './config/Constants';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Container, Card, Button} from 'react-bootstrap'

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      feeds : []
    }
    this.getFeeds();
  }

  getFeeds(){
    let url = Constants.BASE_URL + "/feeds";
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({feeds : result});
        },
        (error) => {
        }
      )
  }

  likePost(index){
    console.log(index)
  }

  checkLogin(){
    
  }

  render() {
    let likeimg = require('./images/like.png')
    return (
      <Container style={{maxWidth:960}}>
        <Row>
          {
            this.state.feeds.map((feed, index)=>{
              return (
                <Col key={index} md="4">
                  <div className={'mycard'}>
                    <img src={feed.img} />
                    <div className={'iconOverlay'}>
                      <span>
                          <img variant="top" src={likeimg} style={{width:20, height:20}} onClick={this.likePost.bind(this, index)}/>
                          <i>{feed.likes}</i>
                      </span>
                      
                    </div>
                  </div>
                </Col>
              )
            })
          }
        </Row>
      </Container>
      // <div>

      //   <Link to="/login">Login</Link>
      // </div>
    );
  }
}

export default App