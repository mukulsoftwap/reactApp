import React from 'react';
import { Link } from 'react-router-dom'
import './App.css'
import Constants from './config/Constants';
import { Row, Col, Container, Nav, Navbar, Form, FormControl, Button} from 'react-bootstrap'
import PostCard from './pages/PostCard/PostCard';

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

  checkLogin(){
    
  }

  render() {
    return (
      <div>
        <Navbar bg="light" variant="dark" fixed="top" >
          <Container style={{maxWidth:960}}>
            <Navbar.Brand>My Instagram</Navbar.Brand>
            <Navbar.Toggle />
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            </Form>
            
            <Navbar.Collapse className="justify-content-end">
                <Link to="/login"><Button variant="primary">Login</Button></Link>
                <Button variant="link">Signup</Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
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

export default App