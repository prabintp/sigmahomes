import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Navbar, Nav } from "react-bootstrap"

const CustomNavbar = ({ pageInfo }) => {
  console.log(pageInfo)
  const data = useStaticQuery(graphql`
  query MyQuery {
    logoImage:file(relativePath: { eq: "sigmaHomesLogo.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allWordpressWpApiMenusMenusItems(filter: {name: {in: ["menus"]}}) {
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
`)
const menuItems = data.allWordpressWpApiMenusMenusItems.edges[0].node.items;
console.log(JSON.stringify(data) +'datra');
  return (
    <>
      <Navbar variant="light" expand="lg" id="site-navbar">
        {/* <Container> */}
        <Link to="/" className="link-no-style">
          <Navbar.Brand as="span" style={{ width: `200px` }}>
          <Img fluid={data.logoImage.childImageSharp.fluid}  />
        
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">


         

         
          <Nav className="ml-auto">
          {menuItems.map((node) => (
          <Nav className="mr-2" key={node.wordpress_id} activeKey={pageInfo && pageInfo.pageName}>
            <Link to={node.object_slug} className="link-no-style">
              <Nav.Link as="span" eventKey="{node.title}">
               {node.title}
              </Nav.Link>
            </Link>
          </Nav>
           
          ))}
          </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </>
  )
}


export default CustomNavbar
