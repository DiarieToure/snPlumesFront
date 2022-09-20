import React from 'react'
import { Card } from 'react-bootstrap'
import './forum.css'


const forum=[
    {
    pathImg:"../../images/0-teaser-poussins.jpg",
    date:"05/07/2022",
    user:"Diarie Toure",
    title:'this is a title',
    post:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididun'

    },
    {
    pathImg:"../../images/0-teaser-poussins.jpg",
    date:"05/07/2022",
    user:"Diarie Toure",
    title:'this is a title',
    post:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididun',


    },
    {
    pathImg:"../../images/0-teaser-poussins.jpg",
    date:"05/07/2022",
    user:"Diarie Toure",
    title:'this is a title',
    post:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididun'
    },

]

export default function Forum() {
  return (




    <div>
        <h2>Forum de discussion</h2>

        <div className="cardForumContainer" style={{display:'flex', justifyContent:'space-between', flexWrap:'wrap',width:'90%',margin:'auto'}}>
            {forum.map(forum=>(

                <Card style={{ width: '19rem',boxShadow:'0px 4px 4px 2px rgba(0, 0, 0, 0.126)',border:'#ffad00 solid 1px',borderBottomLeftRadius:'30px',borderBottomRightRadius:'30px',marginTop:'0.5em', }}>
                <Card.Body style={{}}>
                    <img src={forum.pathImg} alt={forum.title} style={{width:'100%'}} />

                    <div className="datenUser" style={{display:'flex',padding:'1em',marginLeft:'1em'}}>
                        <div className="datePost">{forum.date}</div>
                        <div className="userPost"style={{paddingLeft:'1em'}}>{forum.user}</div>
                    </div>

                    <Card.Title className="mb-2" style={{fontWeight:'800',marginBottom:'1em',marginLeft:'2em'}} >{forum.title}</Card.Title>
                    
                    <p style={{marginLeft:'2em',width:'80%',paddingBottom:'1.5em'}} >{forum.post}</p>
                    <div><a href="index.html">En savoir plus</a></div>
                    
                </Card.Body>
                </Card>
            ))}

        </div>


    </div>
  )
}
