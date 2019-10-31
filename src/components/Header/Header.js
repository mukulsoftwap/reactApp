import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import './Header.css'
import { Row, Col, Container, Nav, Navbar, Form, FormControl, Button} from 'react-bootstrap'
import cookie from 'react-cookies'
import Constants from '../../config/Constants'


class Header extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isLogedIn : false,
      gotoHome : false,
      page : this.props.page
    }
  }

  componentWillMount(){
    this.checkLogin();
  }

  checkLogin(){
    if(cookie.load('token')){
      this.setState({isLogedIn : true})
    }
  }

  logout(){
    cookie.remove('token')
    this.setState({isLogedIn : false, gotoHome: true})
  }

  render() {
    return (
        <Navbar bg="light" variant="dark" fixed="top" >
          {this.state.gotoHome ? <Redirect to='/' /> : null}
          <Container style={{maxWidth:960}}>
            <Link to="/"> <Navbar.Brand>My Instagram</Navbar.Brand></Link>
            <Navbar.Toggle />
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            </Form>
            
            <Navbar.Collapse className="justify-content-end">
                {this.state.isLogedIn 
                  ? <Button variant="primary" onClick={this.logout.bind(this)}>Logout</Button>
                  : <Link to="/login"><Button variant="primary">Login</Button></Link> 
                }
                {this.state.page==Constants.PAGES.HOME 
                  ? <Link to="/profile"><Button variant="link">Profile</Button></Link>
                  : <Link to="/"><Button variant="link">Home</Button></Link>
                }
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );
  }
}

export default Header