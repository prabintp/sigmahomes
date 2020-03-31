import React from "react"
import { Carousel } from 'react-bootstrap'
import {useStaticQuery, graphql} from 'gatsby'


  

 const ImgCarousel =   ({items, isShowCaption}) => {

  const data = useStaticQuery(
    graphql`
    query MyQuery1 {
      allWordpressPost(filter: {categories: {eq: 3}}) {
        edges {
          node {
            content
            link
            path
            slug
            title
            featured_media {
              caption
              source_url
            }
            categories
          }
        }
      }
    }
    
    `
  )
  const carouselItems = items || data.allWordpressPost.edges;
  const _isShowCaption = isShowCaption || false;
  console.log(JSON.stringify(carouselItems) + 'dd');

        return (
<Carousel>
 {carouselItems.map(({node}) => (
     <Carousel.Item>
     <img
       className="d-block w-100"
       src={node.featured_media.source_url}
       alt={node.title}
     />
    { _isShowCaption && 
    <Carousel.Caption>
       <h3>{node.title}</h3>
       <p>{node.content}</p>
     </Carousel.Caption> 
     } 
   </Carousel.Item>
 ))}
</Carousel>
        )
    }


export default ImgCarousel;



