import React from "react"
import styled from "styled-components"
import Hemkant from "../Assets/Our Team/Hemkant_Tripathi.png"
import Hitesh from "../Assets/Our Team/Hitesh_kumar.png"
import Divya from "../Assets/Our Team/Divya_Narain.png"
import Brijesh from "../Assets/Our Team/Brijesh_Mor.png"
import Aishwarya from "../Assets/Our Team/Aishwarya_Mhaske.png"
import Sayan from "../Assets/Our Team/Sayan_sinha.png"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
}

const items = [
  <div className="team">
    <img src={Hemkant} alt="hemkant" />
    <div className="team-content">
      <h2>Hemkant Tripathi</h2>
      <h4>Co-founder</h4>
    </div>
  </div>,
  <div className="team">
    <img src={Hitesh} alt="hitesh" />
    <div className="team-content">
      <h2>Hitesh Kumar</h2>
      <h4>Co-founder</h4>
    </div>
  </div>,
  <div className="team">
    <img src={Divya} alt="Divya" />
    <div className="team-content">
      <h2>Divya Narain</h2>
      <h4>Asst. Manager, Museum Projects</h4>
    </div>
  </div>,
  <div className="team">
    <img src={Brijesh} alt="brijesh" />
    <div className="team-content">
      <h2>Brijesh Mor</h2>
      <h4>Head, 3D Technology Solutions</h4>
    </div>
  </div>,
  <div className="team">
    <img src={Aishwarya} alt="aishwarya" />
    <div className="team-content">
      <h2>Aishwarya Mhaske</h2>
      <h4>Research Assistant</h4>
    </div>
  </div>,
  <div className="team">
    <img src={Sayan} alt="sayan" />
    <div className="team-content">
      <h2>Sayan Sinha</h2>
      <h4>Research Assistant</h4>
    </div>
  </div>,
]

const OurTeam = () => {
  return (
    <TeamContainer>
      <h1>Our Team</h1>
      <div className="team-center">
        <AliceCarousel
          responsive={responsive}
          autoPlay
          autoPlayStrategy="none"
          autoPlayInterval={1500}
          animationDuration={1500}
          animationType="fadein"
          infinite
          touchTracking={false}
          disableDotsControls
          disableButtonsControls
          items={items}
        />

        {/* <div className="team">
          <img src={Hemkant} alt="hemkant" />
          <div className="team-content">
            <h2>Hemkant Tripathi</h2>
            <h4>Co-founder</h4>
          </div>
        </div>
        <div className="team">
          <img src={Hitesh} alt="hitesh" />
          <div className="team-content">
            <h2>Hitesh Kumar</h2>
            <h4>Co-founder</h4>
          </div>
        </div>
        <div className="team">
          <img src={Divya} alt="Divya" />
          <div className="team-content">
            <h2>Divya Narain</h2>
            <h4>Asst. Manager, Museum Projects</h4>
          </div>
        </div>
        <div className="team">
          <img src={Brijesh} alt="brijesh" />
          <div className="team-content">
            <h2>Brijesh Mor</h2>
            <h4>Head, 3D Technology Solutions</h4>
          </div>
        </div>
        <div className="team">
          <img src={Aishwarya} alt="aishwarya" />
          <div className="team-content">
            <h2>Aishwarya Mhaske</h2>
            <h4>Research Assistant</h4>
          </div>
        </div>
        <div className="team">
          <img src={Sayan} alt="sayan" />
          <div className="team-content">
            <h2>Sayan Sinha</h2>
            <h4>Research Assistant</h4>
          </div>
        </div> */}
      </div>
    </TeamContainer>
  )
}

export default OurTeam

const TeamContainer = styled.div`
  background: #212121;
  margin-top: -1rem;
  padding: 4rem 0;

  h1 {
    text-align: center;
    font-weight: 500;
    color: #ffffff;
    font-size: 42px;
    margin-bottom: 2rem;
  }

  .team-center {
    width: 90vw;
    max-width: 1200px;
    margin: 0 auto;
    /* display: grid;
    place-items: center;
    gap: 2rem;
    grid-template-columns: repeat(3, 1fr); */
    /* overflow: hidden; */
    .team {
      width: 350px;

      @media screen and (min-width: 768px) {
        width: 300px;
      }

      img {
        width: 100%;
      }

      .team-content {
        display: grid;
        place-items: center;
        margin-top: 0.5rem;
        h2,
        h4 {
          color: #ffffff;
          text-align: center;
        }
      }
    }
  }
`
