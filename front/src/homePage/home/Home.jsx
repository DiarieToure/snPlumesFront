import React from 'react'
// import { Navbar } from "../topbar/topbar";

import Header from '../../header/header'
import Astuces from './astuces/astuces'
import Boutique from './boutique'
import Contact from './contact/contact'
import Footer from '../../footer/footer'
import Forum from './forum/forum'
import "./home.css"
import { Navbar } from '../../topbar/topbar'

export default function Home() {
  return (
    <div className='home'>
      <Navbar/>
      <Header/>
      <Astuces/>
      <div>
        <h2>A propos de SNPlumes</h2>

        <div className="apropos" >
            <div className="imgapropos" >
                <img src="../../images/cotcot-et-les-U.jpg" alt="imgapropos"  />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor  Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor  Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor</p>
              
            </div>

           

        </div>


      </div>
      <Boutique/>
      <Forum/>
      <Contact/>
      <Footer/>

    </div>
  )
}
