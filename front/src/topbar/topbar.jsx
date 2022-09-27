import { Component } from 'react'
import './topbar.css';
import { Nav,NavDropdown } from 'react-bootstrap';


  
  class Navbar extends Component{
    state={clicked:false};
    handleClick=()=>{
      this.setState({clicked:!this.state.clicked})
    }

    render(){
      return (
      <>
      <div id='topbar' className={this.state.clicked ? "#topbar active" : "#topbar "}>

        <div className='navigation'>
          <a href="/" style={{textDecoration:'none',display:'flex'}}>
            <div>
            <img src="../../images/logo.png" alt="logo snlumes" width={70} />
            <span style={{fontSize:'26px',fontWeight:'bolder',textDecoration:'none',color:'black',marginBottom:'5px'}}>SNPlumes</span>
            </div>
      
          </a>
    
          <div className='navLink'>
            <Nav id='navbar' className={this.state.clicked ? "#navbar active" : "#navbar"}>
              <Nav.Link href="/home" className='active'>Accueil</Nav.Link>
              <Nav.Link href="/astuces">Astuces</Nav.Link>
              <Nav.Link href="/apropos">A propos</Nav.Link>
              <Nav.Link href="/boutique">Boutique</Nav.Link>
              <Nav.Link href="/forum">Forum</Nav.Link>

              <NavDropdown title="Profil"  id="basic-nav-dropdown"  background='grey'>
                <div style={{display:'block',background:'grey', marginTop:'2em',marginBottom:'10em',height:'15vh',zIndex:'500000'}} data-popper-reference-hidden="true">
                  <div>
                  <NavDropdown.Item href="/login">Insription</NavDropdown.Item>
                  
                  </div>
                  <div>
                    <NavDropdown.Item href="/register">
                      Se connecter
                    </NavDropdown.Item>
                  </div>

                  <div>
                <NavDropdown.Item href="/logout">Se deconnecter</NavDropdown.Item> 

                </div>
                </div>
               

               
                
              </NavDropdown>
              
            </Nav>
          </div>
          <div id="mobile" onClick={this.handleClick}>
            <i id='bar' className={this.state.clicked ? "fas fa-times": "fas fa-bars"  }></i> 
    
          </div>
        </div>
      </div>
      </>
      )
    }



  // return (

  //     //     <div className="toplogo">   <img src="../../images/logo.png" alt="logo" /></div>
  //     //     <div><h2>SNPlumes</h2></div>
  //   <>
  //   <nav>
  //     <a href="index.html">
  //       <img src="../../images/logo.png" alt="logo snlumes" width={40} />
  //     </a>

  //     <div>
  //       <ul id='navbar'>
  //         <li><a href="index.html" className='active'>Accueil</a></li>
  //         <li><a href="index.html">Astuces</a></li>
  //         <li><a href="index.html">A propos</a></li>
  //         <li><a href="index.html">Boutique</a></li>
  //         <li><a href="index.html">Forum</a></li>
  //         <li><a href="index.html">Profil</a></li>
          
  //       </ul>
  //     </div>
  //     <div id="mobile" >
  //       {/* <i id='bar' className={this.state.clicked ? "fas fa-bars" : "fas fa-times"}></i> */}
 
  //     </div>
  //   </nav>
  //   </>
    
   
  

//   )
// }
}
export {Navbar}