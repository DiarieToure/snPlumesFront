import React from 'react'
import { Navbar } from '../../topbar/topbar'
import { Nav } from 'react-bootstrap'
import './forum.css'
import List from './List'
import Post from './Post'




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
            <Post/>
            <Post/>
            <Post/>
          <List/>
        </div>
        
    </div>
   </>
  

  )
}
