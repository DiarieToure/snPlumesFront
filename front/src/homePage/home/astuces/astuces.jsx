import React from 'react'
import './astuces.css'
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import  {Navigation, Pagination }  from "swiper";


const astuceSlider=[
  {
  title:"Couveuse",
  description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  pathImg:"../../images/0-teaser-poussins.jpg"
},
{
  title:"Cotcot",
  description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  pathImg:"../../images/cotcot-et-les-U.jpg"
},
{
  title:"Guide",
  description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  pathImg:"../../images/guide-élevage-poussins-naissance-incubation-nourriture.jpg"
},
{
  title:"Grippe aviaire",
  description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
   pathImg:"../../images/poule3.jpg"
}


]

export default function Astuces() {
  return (
    <section className="astucesContainer">

      <div className="astuces">
        <h2>Astuces et conseils</h2>
      </div>
    
      <div className="astuceSlider">
        <>
          <Swiper

          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
            modules={[Pagination,Navigation]}
            className="mySwiper">
            
            {astuceSlider.map(astuceSlider=>(
              <SwiperSlide>
                <Card style={{ width: '90%',height:'10em',background:'rgba(255, 173, 0, 0.15)',display:'flex', border:'solid #ffad00 1.5px',marginBlockStart:'10%', marginBlockEnd:'10%',margin:'auto',marginRight:'auto'}} >
                  <Card.Img src={astuceSlider.pathImg} alt={astuceSlider.title} style={{width:'50%'}}/>
                  <Card.Body style={{width:'50%',display:'block'}}>
                    <Card.Text style={{width:'90%',margin:'auto', paddingTop:'10%'}}>
                      {astuceSlider.description}
                      <button >En savoir plus</button>
                    </Card.Text>
                    
                  </Card.Body>
                </Card>
              </SwiperSlide>
            ))}

          </Swiper>
        </>              
      </div>


    </section>
  )
}
