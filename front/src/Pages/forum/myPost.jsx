import React from 'react'
import { Navbar } from '../../topbar/topbar'
import { Nav } from 'react-bootstrap'
import './forum.css'
import List from './List'
import Post from './Post'


export default function MyPost() {
  return (
    <>
    <Navbar/>
   
    <div className="forumContainer">

        <div className="navForum">
            <Nav fill variant="tabs" defaultActiveKey="/forum">
                <div>
                    <Nav.Item>
                    <Nav.Link eventKey="link-1" href="/forum">TOUTES LES PUBLICATIONS</Nav.Link>
                    </Nav.Item>
                </div>
                <div>
                    <Nav.Item>
                    <Nav.Link  href="/myPost" className='active'>MES PUBLICATIONS</Nav.Link>
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
