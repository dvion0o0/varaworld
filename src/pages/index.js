import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Work from "../components/ourwork"
import About from "../components/aboutus"
import Client from "../components/client"
import Team from "../components/ourteam"
export default function Home() {
  return (
    <Layout>
      <Hero />
      <Work />
      <About />
      <Team />
      <Client />
    </Layout>
  )
}
