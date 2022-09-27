import React from 'react'
import { Navbar } from '../../topbar/topbar'
import './register.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import {useState} from 'react';
import {Navigate} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

export default function Register() {


const [password,setPassword]=useState("");
const [confirm_password,setConfirm_password]=useState("");
const [email,setEmail]=useState("");
const [name,setName]=useState("");
const [number,setNumber]=useState("");
const [adresse,setAdresse]=useState("");
const [formValidate,setFormValidate]=useState(false)
const navigate=useNavigate();

const handleSubmit=(e)=>{
  e.preventDefault();
;
}

async function signUp() {

 let item={email,name,adresse,number,password,confirm_password}
  const response= await fetch(
    'http://localhost:8000/api/auth/register',
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


    if (content.message==='Registration') {
      return setFormValidate(true)
    }
    else{
      return setFormValidate(false)
  
    }


}
if (formValidate) {
  return <Navigate to='/Login'/>
  
}

  return (
    <div className="registerContainer">
     <Navbar/>
      <Container >
        <div className='rowContainer' >
          
          <div className='loginLeftPart'>
            <div className="descLeftPart"style={{padding:'40px 0px 30px 0px',margin:'auto',width:'50%',textAlign:'center'}}>
                <h3  style={{marginBottom:'10px',color:'#ffad00'  }}>SE CONNECTER</h3>
                <p>Vous avez deja un compte ? <br />
                  Connectez -vous pour poursuivre votre navigation sur le site</p>
            </div>
            <div className="loginLeftPartImg">
              <img src="../../images/logo.png" alt="connection" style={{marginBottom:'2.10em',width:'100%'}} />
              
              <Button type="submit" onClick={()=>navigate("/Login")  }style={{cursor:'pointer'}} >
                Se connecter
              </Button>
          
            </div>
            
          </div>

          <div className="registerRightPart">
            <div className="descRightPart" style={{padding:'40px 0px 30px 0px',margin:'auto',width:'50%',textAlign:'center'}}>
              <h3 style={{marginBottom:'10px',color:'#ffad00'}}>CREER UN COMPTE</h3>
              <p>Creez un compte pour pouvoir vous connecter a tout moment</p>
            
            </div>

            <div className="registerForm">
              <Form encType='form enctype= multipart/form-data' method='Post' onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              {/* <Form.Label>Email address</Form.Label> */}
              <span><Form.Control type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Identifiant/email" /></span>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
             
              <Form.Control type="text" onChange={(e)=>setName(e.target.value)} placeholder="Nom et prenom" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAdresse">
          
              <Form.Control type="text" onChange={(e)=>setAdresse(e.target.value)} placeholder="adresse" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicNumber">
             
              <Form.Control type="tel" onChange={(e)=>setNumber(e.target.value)} placeholder="numero telephone" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              {/* <Form.Label>Password</Form.Label> */}
              <Form.Control type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Mot de passe" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
              {/* <Form.Label>Password</Form.Label> */}
              <Form.Control type="password" onChange={(e)=>setConfirm_password(e.target.value)} placeholder="Confirmer mot de passe" />
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}

            
              </Form>
            <div className='submitBtn'>
              <Button type="submit" onClick={signUp} style={{cursor:'pointer'}}>
                Creer compte
              </Button>
            </div>
            </div>
              
           
          </div>
        </div>

      </Container>
    </div>
  )
}
