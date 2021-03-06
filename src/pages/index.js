import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Work from "../components/ourWork"
import About from "../components/AboutUs"
import Client from "../components/Client"
import Team from "../components/OurTeam"
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
