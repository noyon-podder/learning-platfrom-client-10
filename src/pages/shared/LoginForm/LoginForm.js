import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import github from '../../../assets/icon/github.png';
import google from '../../../assets/icon/google.png';
import { AuthContext } from '../../../constext/UserContext';
import './LoginForm.css';
const LoginForm = () => {
  const {login, googleSignIn, setUser, githubSignIn} = useContext(AuthContext);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || '/'
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

        const handleSubmitForm = event => {
            event.preventDefault();
            const form = event.target;
            const email = form.email.value;
            const password = form.password.value;
            
            
              login(email, password)
              .then(result => {
                setUser(result.user)
                form.reset();
                navigate(from, { replace: true });
              })
              .catch(error => {
                setError(error.message)
              })
            
           setError('')

        }

        const handleLoginWithIcon = () => {
          googleSignIn(googleProvider)
          .then( (result) => {
            setUser(result.user)
            navigate('/');
            console.log(result.user);
          })
          .catch(error => {
            setError(error.message);
          })
        }

        const handleGithubLogin = () => {
          githubSignIn(githubProvider)
          .then(result => {
            setUser(result.user)
            console.log(result.user)
          })
          .catch(error => {
            setError(error.message)
          })
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
            <div className="direct-login d-flex align-items-center justify-content-center mt-4">
          <div className="login-icon me-4" onClick={handleLoginWithIcon}>
            <img src={google} alt="" className="img-fluid"/>
          </div>
          <div className="login-icon" onClick={handleGithubLogin}>
            <img src={github} alt="" className="img-fluid"/>
          </div>
        </div>
           </div>
          );
};

export default LoginForm;