import React from "react"
import Layout from "../Components/layout"
import Hero from "../Components/hero"
import Work from "../Components/ourwork"
import About from "../Components/aboutus"
import Client from "../Components/client"
import Team from "../Components/ourteam"
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
