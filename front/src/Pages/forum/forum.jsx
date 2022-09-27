import React from 'react'
import { Navbar } from '../../topbar/topbar'
import { Nav } from 'react-bootstrap'
import './forum.css'
import BlogList from './BlogList'




export default function Forum() {
  return (
   <>
    <Navbar/>
   
    <div className="forumContainer">

        <div className="navForum">
            <Nav fill variant="tabs" defaultActiveKey="/forum">
                <div>
                    <Nav.Item>
                    <Nav.Link href="/forum">TOUTES LES PUBLICATIONS</Nav.Link>
                    </Nav.Item>
                </div>
                <div>
                    <Nav.Item>
                    <Nav.Link eventKey="link-1" href="/myPost">MES PUBLICATIONS</Nav.Link>
                    </Nav.Item>
                </div>
            </Nav>
        </div> 

        <div className="allPostContainer">
            <BlogList/>
        </div>
        
    </div>
   </>
  

  )
}
