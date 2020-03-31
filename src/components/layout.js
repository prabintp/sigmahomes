/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FaPhoneVolume } from 'react-icons/fa';

import { Container, Row, Col } from "react-bootstrap"

// import Header from "./header"
import Navbar from "./navBar"

const Layout = ({ children, pageInfo }) => (
  <StaticQuery
    query={graphql`
      query {
        logoImage:file(relativePath: { eq: "sigmaHomesLogo.png" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fluid(maxWidth: 150) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        allWordpressWpApiMenusMenusItems(filter: {name: {in: ["company"]}}) {
          edges {
            node {
              items {
                title
                url
                order
                wordpress_id
                object_slug
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Container fluid className="px-0 main">
          <Navbar pageInfo={pageInfo} />
          <Row noGutters>
            <Col>
              <Container className="mt-5">
                <main>{children}</main>
              </Container>
            </Col>
          </Row>
        </Container>
        <Container fluid className="px-0">
          <Row noGutters>
            <Col className="footer-col">
              <footer className="py-4">

                <Col  className="px-4 mb-4">
                  <div className="logo">
                  <Link to="/" className="link-no-style">
                    <Img fluid={data.logoImage.childImageSharp.fluid} />
                  </Link>
                  </div>
                  <h5 class="contactnumber">
                  <FaPhoneVolume />+91 97 47012 377, 99 47012 377
                  </h5>
                  <h6 className="mb-2">
                    © {new Date().getFullYear()} Sigma Homes, 
                    All rights reserved.
                  </h6>
                 
                </Col>
                <Col className="mb-4" >
                
                 <h4>Company</h4> 
                 
                
                 
                </Col>

                <Col className="mb-4">
               <h4>Blog</h4>
                  
                
                 
                 </Col>


              </footer>
            </Col>
          </Row>
        </Container>
      </>
    )}
  />
)

export default Layout
