import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

export default () => (
  <div style={{ color: `purple`, margin: `3rem auto`, maxWidth: 600 }}>
    <Layout>
        <Header headerText="Hello Gatsby!" />
        <p>What a world.</p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
        <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
        <p>
            What do I like to do? Lots of course but definitely enjoy building
            websites.
        </p>
        <Link to="/contact/">Contact</Link>
    </Layout>
  </div>
)
