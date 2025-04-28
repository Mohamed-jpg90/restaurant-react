import React from 'react'
import NaveBare from './NaveBare'
import BannerBackground from "../Assestes/home-banner-background.png";
import BannerImage from "../Assestes/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";
export default function Home() {
  return (
    <div className="home-container">
      <NaveBare />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Favourite Food Delivered Hot & Fresh
          </h1>
          <p className="primary-text">
            Healthy switcher chefs do all the prep work, like peeding, chopping
            & marinating, so you can cook a fresh food.
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
        </div>

<div className='home-image-section'> 
  <img src={BannerImage} alt='' />

</div>


      </div>
    </div>
  )
}
