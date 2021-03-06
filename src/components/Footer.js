import React from "react"
import styled from "styled-components"
import FooterLogo from "../Assets/Footer/VTL_Logo_white.png"
import StartUpIndia from "../Assets/Footer/Startup_India_Logo.png"
import MakeInIndia from "../Assets/Footer/Make_In_India_Logo.png"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/Fa"
import { AiFillTwitterCircle } from "react-icons/Ai"
import { FaPhoneAlt } from "react-icons/Fa"
import { FiMail } from "react-icons/Fi"

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer-center">
        <div className="first-container">
          <img src={FooterLogo} alt="footerLogo" />
          <div className="social-icons-container">
            <h4>Stay In Touch</h4>
            <div className="social-icons">
              <a href="/">
                <FaFacebook className="icon" />
              </a>
              <a href="/">
                <AiFillTwitterCircle className="icon" />
              </a>
              <a href="/">
                <FaInstagram className="icon" />
              </a>
              <a href="/">
                <FaLinkedin className="icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="third-container">
          <div className="contact">
            <FaPhoneAlt /> <span>+91 98712 19992</span>
          </div>
          <div className="email">
            <FiMail /> <span>info@varahworld.com</span>
          </div>
        </div>
        <div className="second-container">
          <img src={StartUpIndia} alt="startUpIndia" />
          <img src={MakeInIndia} alt="MakeInIndia" />
        </div>
      </div>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.footer`
  background: #212121;
  padding: 3rem 0;

  .footer-center {
    width: 90vw;
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    place-items: center;

    @media screen and (min-width: 768px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .footer-center img {
    width: 150px;
  }

  .first-container {
    display: grid;
    gap: 1rem;
    margin-bottom: 1.5rem;
    .social-icons-container {
      display: grid;
      place-items: center;

      .social-icons {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 0.5rem;

        .icon {
          font-size: 25px;
          color: #ffffff;
          transition: all 0.3s linear;

          &:hover {
            transform: scale(1.3);
          }
        }
      }
    }

    .social-icons-container h4 {
      color: #ffffff;
      font-size: 15px;
    }
  }

  .second-container {
    display: grid;
  }

  .third-container {
    display: grid;
    gap: 1rem;
    align-items: center;

    .contact,
    .email {
      color: #ffffff;

      span {
        margin-left: 0.5rem;
      }
    }
  }
`
