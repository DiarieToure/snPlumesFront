import React from 'react'
import Card from 'react-bootstrap/Card';

const products=[
    {
    name:"Couveuse",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    pathImg:"../../images/0-teaser-poussins.jpg",
    price:"5.000fr"
    },
    {name:"Couveuse",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    pathImg:"../../images/0-teaser-poussins.jpg",
    price:"5.000fr"
    },
    {name:"Couveuse",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    pathImg:"../../images/0-teaser-poussins.jpg",
    price:"5.000fr"
    }

]

export default function Boutique() {
  return (
    
    
    <div >
        <h2>Notre Boutique</h2>
        <div className="cardShopContainer" style={{alignItems:'center', width:'90%',margin:'auto', display:'flex',flexWrap:'wrap',justifyContent:'space-between'}}>
        {products.map(products=>(
        
            <Card style={{ width: '19rem',border:'#ffad00 solid 1px',display:'flex', justifyContent:'center',marginBottom:'10px' }}>
            <Card.Body>
                <img src={products.pathImg} alt={products.name} style={{width:'16em',marginTop:"1em"}} />
                <Card.Title className="mb-2 " style={{marginTop:'1em',marginInlineStart:'0px'}} >{products.name}</Card.Title>
                
                <p style={{fontWeight:'700'}}>{products.price}</p>
                <button style={{marginLeft:'4em',marginTop:'1em',marginBottom:'2em'}}> Ajouter au panier</button>
                
            </Card.Body>
            </Card>

       
        
        ))}
    </div>
    </div>

  )
}
