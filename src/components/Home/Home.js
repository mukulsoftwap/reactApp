import React from 'react';
import { Link } from 'react-router-dom'
import './Home.css'
import Constants from '../../config/Constants';
import { Row, Col, Container, Nav, Navbar, Form, FormControl, Button} from 'react-bootstrap'
import PostCard from '../PostCard/PostCard';
import Header from '../Header/Header';


class Home extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      feeds : [],
      isLogedIn : false
    }
  }

  componentWillMount(){
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

  render() {
    return (
      <div>
        <Header page={Constants.PAGES.HOME}></Header>
        <Container style={{maxWidth:960, marginTop:80}}>
          <Row>
            {
              this.state.feeds.map((feed, index)=>{
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
    );
  }
}

export default Home