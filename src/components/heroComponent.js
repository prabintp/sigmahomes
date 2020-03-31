import React, { Fragment } from 'react'
import { Button } from "react-bootstrap"
import { Link } from 'gatsby'


const HeroComponent = ({node, ctaLabel, buttonStyle }) => {
    return (
        <Fragment>
        <h1>{node.title}</h1>
        <p className="fontBodyPrimary" dangerouslySetInnerHTML={{__html: node.excerpt}}></p>
        { ctaLabel && <Link to={node.slug} className="link-no-style">
        <Button variant={buttonStyle}>{ctaLabel} ↗</Button>
        </Link>}
        
        </Fragment>
        
        )
} ;

export default HeroComponent;