import React from "react"
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa"
import logo from "../../assets/images/logo/logo.svg"

const SocialShare = [
  { Social: <FaFacebookF />, link: "https://www.facebook.com/profile.php?id=1470124669" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/in/carlindo-junior/" },
  { Social: <FaInstagram />, link: "https://www.instagram.com/junior_vilas/" },
  { Social: <FaTwitter />, link: "https://twitter.com/junior_vilas" },
  { Social: <FaGithub />, link: "https://github.com/juniorvilas" },
]

const Footer = () => {
  return (
    <div
      className="footer-style-2 ptb--30 bg_image bg_image--1"
      data-black-overlay="6"
    >
      <div className="wrapper plr--50 plr_sm--20">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="inner">
              <div className="logo text-center text-sm-left mb_sm--20">
                <a href="/home-one">
                  <img
                    style={{ height: "36px" }}
                    src={logo}
                    alt="Logo images"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="inner text-center">
              <ul className="social-share rn-lg-size d-flex justify-content-center liststyle">
                {SocialShare.map((val, i) => (
                  <li key={i}>
                    <a href={`${val.link}`}>{val.Social}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 col-12">
            <div className="inner text-lg-right text-center mt_md--20 mt_sm--20">
              <div className="text">
                <p>Copyright © 2022 Carlindo Jr. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer
