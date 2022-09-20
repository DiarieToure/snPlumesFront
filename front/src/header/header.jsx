import React from 'react'
// import { FaSearch } from 'react-icons/fa'
import "./header.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Card from 'react-bootstrap/Card';
// import required modules
import {Autoplay, Navigation, Pagination } from "swiper";



const imgSlider=[
  {
  title:"Couveuse",
  description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
  pathImg:"/images/0-teaser-poussins.jpg"
},
{
  title:"Cotcot",
  description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
  pathImg:"/images/cotcot-et-les-U.jpg"
},
{
  title:"Guide",
  description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
  pathImg:"/images/guide-élevage-poussins-naissance-incubation-nourriture.jpg"
},
{
  title:"Grippe aviaire",
  description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
  pathImg:"/images/poule3.jpg"
}


]

export default function Header() {
  return (
    <div id="header " >
        <div className="headerCaroussel">
        <>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >

        { imgSlider.map(imgSlider=>(
          <SwiperSlide>
            
            <Card >
              <Card.Img variant="top" src={imgSlider.pathImg} style={{width:'50%' }} />
              <Card.Body>
                <Card.Title><h2>{imgSlider.title}</h2></Card.Title>
                <Card.Text>
                  {imgSlider.description}
                </Card.Text>
              
              </Card.Body>
            </Card>

          </SwiperSlide>
        )
        )
        
        }
          
          </Swiper>
        </>

        </div>

        <div className="searchBar" style={{width:'30%'}}>
          <input className='sBarinput' type="text" name="searchBar" id="searchBar" placeholder='Rechercher' />
          <button><img src="../../images/search.png" alt="btn" style={{width:'20px',float:'right'}}/></button>
        </div>
    </div>
  )
}
