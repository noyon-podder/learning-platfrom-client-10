import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../constext/UserContext';
import './LoginForm.css';
const LoginForm = () => {
  const {login} = useContext(AuthContext);
  const [error, setError] = useState('');

        const handleSubmitForm = event => {
            event.preventDefault();
            const form = event.target;
            const email = form.email.value;
            const password = form.password.value;
            
            
              login(email, password)
              .then(result => {
                form.reset();
              })
              .catch(error => {
                setError(error.message)
              })
            
           setError('')

        }
    
        return (
           <div className="w-50 mx-auto mt-5 login-form">
            <h3 className="login-title text-center">Login </h3>
             <Form onSubmit={handleSubmitForm}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email"/>
              </Form.Group>
        
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" />
              </Form.Group>
              <div className="mb-3">
              <span>If you are new to <Link to="/user/register">Create an account</Link> </span>
              </div>
              <div>
              <span className="text-danger fw-bold">{error}</span>
              </div>
              <Button variant="primary" type="submit">
                Login
              </Button>
              
            </Form>
           </div>
          );
};

export default LoginForm;