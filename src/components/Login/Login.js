import React from 'react';
import { Redirect } from 'react-router-dom'
import { Row, Col, Container, Nav, Card, Form, FormControl, Button} from 'react-bootstrap'
import Constants from '../../config/Constants'
import './Login.css'
import cookie from 'react-cookies'

class Login extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            username : "",
            password : "",
            gotoProfile : false
        }
    }

    userLogin(){
        let url = Constants.BASE_URL + 'signin';
        let body = {
            username : this.state.username,
            password : this.state.password
        }
        fetch(url, {
            method: 'POST',
            headers: {
				"Content-type": "application/json; charset=UTF-8"
			},
            body: JSON.stringify(body)
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.data){
                cookie.save("token", result.data.token);
                this.setState({gotoProfile : true})

            }else{
                alert("something went wrong..")
            }
          },
          (error) => {
          }
        )
    }

    handleInputChange(type, e){
        switch(type){
            case 0:
                this.setState({username : e.target.value});
                break;
            case 1:
                this.setState({password : e.target.value});
        }
    }

    render(){
        return(
            <Container>
                {this.state.gotoProfile ? <Redirect to='/profile' /> : null}
                <Row>
                    <Col md="4"></Col>
                    <Col md="4">
                        <Form noValidate className={'formBox'}>
                            <h1 style={{marginBottom:40}}>My Instagram</h1>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" value={this.state.username} onChange={this.handleInputChange.bind(this, 0)}/>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.handleInputChange.bind(this, 1)}/>
                            </Form.Group>
                            <Button variant="primary" type="button" block onClick={this.userLogin.bind(this)}>
                                Login In
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Login;