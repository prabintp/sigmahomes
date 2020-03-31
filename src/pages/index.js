import React from "react"
import { Row, Col} from "react-bootstrap"
import { graphql, useStaticQuery } from 'gatsby'
import Layout from "../components/layout"
import ImgCarousel from "../components/imgCarousel"
import ImgBanner from "../components/imgBannerComponent"
import SEO from "../components/seo"
import HeroComponent from '../components/heroComponent'

const IndexPage = () => {

  const data = useStaticQuery(
    graphql`
    query homeQuery {
      allWordpressPage{
        edges {
          node {
            excerpt
            link
            path
            slug
            title
            content
          }
        }
      }
      
      allWordpressPost{
        edges {
          node {
            content
            link
            path
            slug
            title
            excerpt
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


  const mainCarouselItems = data.allWordpressPost.edges.filter(({ node }) => node.categories[0] === 3);
  const featureItems = data.allWordpressPost.edges.filter(({ node }) => node.categories[0] === 4);
  const about = data.allWordpressPage.edges.filter(({ node }) => node.slug === 'about_sigma_homes')[0];

  console.log(JSON.stringify(featureItems) + 'feature');
  console.log(JSON.stringify(about) + 'abt');
  return (
    <Layout pageInfo={{ pageName: "index" }}>
      <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
      <Row className="justify-content-center">
        <Col md="9" className="imgResponsive">
          <ImgCarousel items={mainCarouselItems} ></ImgCarousel>
        </Col>
      </Row>

      <Row className="justify-content-center" style={{ marginTop: "-60px" }}>
        <Col md="12" className="text-center">
          <HeroComponent node={about.node} ctaLabel="More about Sigma homes" buttonStyle="primary" ></HeroComponent>
        </Col>
      </Row>

      <Row className="my-4">

      </Row>

      <Row className="my-4">

      </Row>
      <Row className="my-4">

      </Row>

      <Row className="mb-3" className="justify-content-center">
        <Col md="6">
          <ImgBanner item={featureItems[0].node} ></ImgBanner>
        </Col>

        <Col  md="6">
          <HeroComponent node={featureItems[0].node} ctaLabel="Read More" buttonStyle="link"  ></HeroComponent>
        </Col>
      </Row>

      <Row className="my-4">

      </Row>
      <Row className="mb-3">


        <Col className="text-center">
          <HeroComponent node={featureItems[1].node} ctaLabel="Read More" buttonStyle="link" ></HeroComponent>
        </Col>
     
      </Row>

      <Row>
      <Col>
          <ImgBanner item={featureItems[1].node} ></ImgBanner>
        </Col>
      </Row>


    </Layout>
  )
}

export default IndexPage
