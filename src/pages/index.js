import React from "react"
import Layout from "../Components/Layout"
import Hero from "../Components/Hero"
import Work from "../Components/ourWork"
import About from "../Components/AboutUs"
import Client from "../Components/Client"
import Team from "../Components/OurTeam"
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
