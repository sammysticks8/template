import React from 'react'
import './Hero.css'
import profile_img from '../../assets/pic.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" className='pixel' />
      <h1><span>I'm Sam Nwajei,</span> frontend developer based in Nigeria</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Alias laborum, a provident excepturi qui ipsum asperiores 
        voluptas voluptatem.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero
