import React from 'react'
import { Navbar } from '../../../topbar/topbar'
import './register.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';

export default function Register() {
  return (
    <div className="registerContainer">
     <Navbar/>
      <Container >
        <div className='rowContainer' >

          <colContainer className='loginLeftPart'>
            <div className="descLeftPart"style={{padding:'40px 0px 30px 0px',margin:'auto',width:'50%',textAlign:'center'}}>
                <h3  style={{marginBottom:'10px',color:'#ffad00'  }}>SE CONNECTER</h3>
                <p>Vous avez deja un compte ? <br />
                  Connectez -vous pour poursuivre votre navigation sur le site</p>
            </div>
            <div className="loginLeftPartImg">
              <img src="../../images/logo.png" alt="connection" style={{marginBottom:'2.10em',width:'100%'}} />
              
              <Button type="submit">
                Se connecter
              </Button>
          
            </div>
            
          </colContainer>

          <colContainer className="registerRightPart">
                <div className="descRightPart" style={{padding:'40px 0px 30px 0px',margin:'auto',width:'50%',textAlign:'center'}}>
                  <h3 style={{marginBottom:'10px',color:'#ffad00'}}>CREER UN COMPTE</h3>
                  <p>Creez un compte pour pouvoir vous connecter a tout moment</p>
                
                </div>

                <div className="registerForm">
                  <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  {/* <Form.Label>Email address</Form.Label> */}
                  <span><Form.Control type="email" placeholder="Identifiant/email" /></span>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  {/* <Form.Label>Password</Form.Label> */}
                  <Form.Control type="password" placeholder="Mot de passe" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  {/* <Form.Label>Password</Form.Label> */}
                  <Form.Control type="password" placeholder="Confirmer mot de passe" />
                </Form.Group>

                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}

                  </Form>
                <div className='submitBtn'>
                  <Button type="submit">
                    Creer compte
                  </Button>
                </div>
                </div>
              
           
          </colContainer>
        </div>

      </Container>
    </div>
  )
}
