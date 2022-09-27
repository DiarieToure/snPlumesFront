import React from 'react'
import { Navbar } from '../../topbar/topbar'
import './login.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import {useState} from 'react';
import {Navigate} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

export default function Login() {

    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");
    const [formValidate,setFormValidate]=useState(false)
    const navigate=useNavigate();
    
    const handleSubmit=(e)=>{
      e.preventDefault();
    ;
    }
    
    async function signIn() {
    
     let item={email,password}
      const response= await fetch(
        'http://localhost:8000/api/auth/login',
        {
          method:'POST',
          body:JSON.stringify(item),
          headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
          },
    
        }
      )
      const content= await response.json();
        console.log(content);
        console.log(content.message);
    
    
        if (content.message==='login successful') {
          return setFormValidate(true)
        }
        else{
          return setFormValidate(false)
      
        }
    
    
    }
    if (formValidate) {
      return <Navigate to='/'/>
      
    }
    
      return (
        <div className="loginContainer">
         <Navbar/>
          <Container >
            <div className='rowContainer' >
              
              <div className='registerLeftPart'>
                <div className="descLeftPart"style={{padding:'40px 0px 30px 0px',margin:'auto',width:'50%',textAlign:'center'}}>
                    <h3  style={{marginBottom:'10px',color:'#ffad00'  }}>S'inscrire'</h3>
                    <p>Vous avez deja un compte ? <br />
                      Connectez -vous pour poursuivre votre navigation sur le site</p>
                </div>
                <div className="registerLeftPartImg">
                  <img src="../../images/logo.png" alt="connection" style={{marginBottom:'2.10em',width:'100%'}} />
                  
                  <Button type="submit" onClick={()=>navigate("/Register")  }style={{cursor:'pointer'}} >
                    Creer un compte
                  </Button>
              
                </div>
                
              </div>
    
              <div className="loginRightPart">
                <div className="descRightPart" style={{padding:'40px 0px 30px 0px',margin:'auto',width:'50%',textAlign:'center'}}>
                  <h3 style={{marginBottom:'10px',color:'#ffad00'}}>SE CONNECTER</h3>
                  <p>Creez un compte pour pouvoir vous connecter a tout moment</p>
                
                </div>
    
                <div className="loginForm">
                  <Form encType='form enctype= multipart/form-data' method='Post' onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      {/* <Form.Label>Email address</Form.Label> */}
                      <span><Form.Control type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Identifiant/email" /></span>
                    </Form.Group>

        
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      {/* <Form.Label>Password</Form.Label> */}
                      <Form.Control type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Mot de passe" />
                    </Form.Group>

                
                  </Form>
                <div className='submitBtn'>
                  <Button type="submit" onClick={signIn} style={{cursor:'pointer'}}>
                    Se connecter
                  </Button>
                </div>
                </div>
                  
               
              </div>
            </div>
    
          </Container>
        </div>
      )
    }
