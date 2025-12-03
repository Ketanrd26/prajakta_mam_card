import React, { useState } from "react";
import "./Card.scss";
import { SiOpenmediavault } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import brochure from "../assets/brochure.webp";
import social from "../assets/social-media.webp";
import website from "../assets/internet.webp";
import contact from "../assets/communicate.webp";
import { FaInstagram } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { TfiWorld } from "react-icons/tfi";
import { TfiFacebook } from "react-icons/tfi";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import image_collage from "../../src/assets/loog_collage.png"


// logo
import nvm_logo from "../../src/assets/nvm_logo.webp"
import pan_logo from "../../src/assets/pan_logo.png"
import onkar_logo from "../../src/assets/onkar_logo.webp"
import tij_logo from "../../src/assets/tij_logo.webp"
import akka_logo from "../../src/assets/akka_logo.webp"
import diwise_logo from "../../src/assets/diwise.webp"
import nvmAgro_logo from "../assets/nvm_agro_logo.png"
const Card = () => {
  const [data, setData] = useState({
    social: false,
    websites: false,
    contact: true,
    companies: false,
  });

  const openWithIndex = (key) => {
    setData((index) => ({
      ...index,
      social: false,
      websites: false,
      contact: false,
      companies: false,
      [key]: true,
    }));
  };

  const saveContact = () => {
    // vCard content
    const vCardData = `
BEGIN:VCARD
VERSION:3.0
FN:Prajakta Marwaha
ORG:Prajakta Marwaha
TITLE:Founder and CEO
TEL:+971508060418
EMAIL:prajakta.marwaha@gmail.com
URL:https://prajaktamarwaha.com/
URL:https://www.diwiseglobal.com/
URL:https://www.diwise.in/
URL:https://diwise.uk/
END:VCARD`;

    // Create a Blob for the vCard file
    const blob = new Blob([vCardData], { type: "text/vcard" });

    // Create a link element
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Prajakta_Marwaha.vcf"; // vCard file name
    document.body.appendChild(link);

    // Trigger the download
    link.click();

    // Cleanup
    document.body.removeChild(link);
  };

  const companies = [
    {
      icon: diwise_logo,
      website_url: "https://www.diwiseglobal.com/",
      website_text: "Diwise Global",
    },
    {
      icon: nvm_logo,
      website_url: "https://nvmagro.com/",
      website_text: "NVM Agro",
    },
    {
      icon: akka_logo,
      website_url: "https://akkafoundation.in/",
      website_text: "Akka Foundation",
    },
    {
      icon: pan_logo,
      website_url: "https://pandozasolutions.com/",
      website_text: "Pandoza Solutions",
    },
   
    {
      icon: nvm_logo,
      website_url: "https://nvminfratech.com/",
      website_text: "Nvm Infratech",
    },
    {
      icon: tij_logo,
      website_url: "https://www.theindianjourney.com/",
      website_text: "The Indian Journey",
    },
  ];

  return (
    <>
      <div class="card_parent">
        <div class="card">
          <div class="top_section">
            <div class="white_div"></div>
            <div class="profile">
              <div class="image"></div>
              <h4>Prajakta Marwaha</h4>
              <p>Founder and CEO</p>
                <img src={image_collage} alt=""/>
              <div class="btn" onClick={saveContact}>
                Save Contact
              </div>
            </div>
          </div>
          <div class="bottom_section">
            <div class="tabs">
              <div
                class={data.contact ? "active icon " : "icon"}
                onClick={() => openWithIndex("contact")}
              >
                <img src={contact} alt="" />
                <p>Contact</p>
              </div>

              <a
                href="https://prajaktamarwaha.com/"
                target="blank"
                class={data.websites ? "active icon " : "icon"}
                // onClick={() => openWithIndex("websites")}
              >
                <img src={website} alt="" />
                <p>Website</p>
              </a>
              <div
                class={data.companies ? "active icon " : "icon"}
                onClick={() => openWithIndex("companies")}
              >
                <img src={brochure} alt="" />
                <p>Companies</p>
              </div>
              <div
                class={data.social ? "active icon " : "icon"}
                onClick={() => openWithIndex("social")}
              >
                <img src={social} alt="" />
                <p>Social</p>
              </div>
            </div>

            <div class="content">
              {data.social && (
                <div class="social_medi">
                  <div class="insta cont">
                    <div class="icon">
                      <FaInstagram />
                    </div>
                    <a
                      href="https://www.instagram.com/prajakta.marwaha.official/"
                      target="blank"
                    >
                      prajakta.marwaha
                    </a>
                  </div>
                  <div class="insta cont">
                    <div class="icon">
                      <TfiFacebook />
                    </div>
                    <a
                      href="https://www.facebook.com/people/Prajakta-Marwaha/61556434721427/"
                      target="blank"
                    >
                      Prajakta-Marwaha
                    </a>
                  </div>
                  <div class="insta cont">
                    <div class="icon">
                      <FaLinkedinIn />
                    </div>
                    <a
                      href="https://www.linkedin.com/in/prajakta-marwaha-507b6410a"
                      target="blank"
                    >
                      prajakta-marwaha
                    </a>
                  </div>
                  <div class="insta cont">
                    <div class="icon">
                      <CiYoutube />
                    </div>
                    <a
                      href="https://www.youtube.com/@know1cares"
                      target="blank"
                    >
                      @know1cares
                    </a>
                  </div>
                  <div class="insta cont">
                    <div class="icon">
                      <FaXTwitter />
                    </div>
                    <a href="https://x.com/MarwahaPrajakta?mx=2" target="blank">
                      MarwahaPrajakta
                    </a>
                  </div>
                </div>
              )}
              {data.companies && (
                <div class="social_medi">
                  {companies.map((item, index) => (
                    <div class="insta cont" key={index} >
                      <div class="icon">
                        <img src={item.icon} alt=""/>
                      </div>
                      <a href={item.website_url} target="blank">
                        {item.website_text}
                      </a>
                    </div>
                  ))}
                </div>
              )}
              {data.contact && (
                <div class="social_medi">
                  <div class="insta cont">
                    <div class="icon">
                      <IoCall />
                    </div>
                    <a href="tel:+918007232222" target="blank">
                    +91 8007232222
                    </a>
                  </div>
                  <div class="insta cont">
                    <div class="icon">
                      <IoCall />
                    </div>
                    <a href="tel:+971508060418" target="blank">
                    +971 50 806 0418
                    </a>
                  </div>
                  <div class="insta cont">
                    <div class="icon">
                      <IoMailOutline />
                    </div>
                    <a href="mailto:prajakta.marwaha@gmail.com" target="blank">
                      prajakta.marwaha@gmail.com
                    </a>
                  </div>
                  <div class="insta cont">
                    <div class="icon">
                      <TfiWorld />
                    </div>
                    <a href="https://prajaktamarwaha.com/" target="blank">
                      prajaktamarwaha.com
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
