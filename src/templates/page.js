import React from 'react'
import Layout from '../components/layout'

export default ({pageContext}) => (
    <Layout>
    <div>
        <h2>{pageContext.title}</h2>
        <p className="fontBodyPrimary" dangerouslySetInnerHTML={{__html: pageContext.content}}></p>
    </div>
    </Layout>
)