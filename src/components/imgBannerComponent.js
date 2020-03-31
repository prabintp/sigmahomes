import React from "react"
import { Carousel } from 'react-bootstrap'

const ImgBanner =   ({item, isShowCaption}) => {

  const _isShowCaption = isShowCaption || false;
 // console.log(JSON.stringify(carouselItems) + 'dd');

        return (
<Carousel>
 
     <Carousel.Item>
     <img
       className="d-block w-100"
       src={item.featured_media.source_url}
       alt={item.title}
     />
    { _isShowCaption && 
    <Carousel.Caption>
       <h3>{item.title}</h3>
       <p>{item.content}</p>
     </Carousel.Caption> 
     } 
   </Carousel.Item>

</Carousel>
        )
    }


export default ImgBanner;



