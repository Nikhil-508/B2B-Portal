import React from 'react'
import Logo from "../Assets/navlogo.png"
import fb from "../Assets/Facebook.png"
import insta from "../Assets/Instagram.png"
import twit from "../Assets/Twitter.png"
import lin from "../Assets/LinkedIn.png"
import ytb from "../Assets/YouTube.png"
import email from "../Assets/Email.png"
import call from "../Assets/call.png"
import loc from "../Assets/Mark.png"


const footer = () => {
  return (
    <div >
        <div className='flex items-center mx-10 font-[outfit] h-[200px]'>
          <div>
            <img src={Logo} alt="" />
            <p className='w-[12rem] py-5'>Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam</p>
            <div>
                <ul  className='flex gap-4'>
                    <li><img src={fb} alt="" /></li>
                    <li><img src={twit} alt="" /></li>
                    <li><img src={insta} alt="" /></li>
                    <li><img src={lin} alt="" /></li>
                    <li><img src={ytb} alt="" /></li>
                </ul>
            </div>
          </div>
            <div className='flex  items-center mx-80 gap-7'>
              <div>
                <h1 className='font-semibold pb-2'>Cities</h1>
                <ul>
                  <li>Banglore</li>
                  <li>Delhi</li>
                  <li>Noida</li>
                  <li>Hyderabad</li>
                </ul>
              </div>
              <div>
                <h1 className='font-semibold pb-2'>Support</h1>
                <ul>
                  <li>Getting Started</li>
                  <li>Help Center</li>
                  <li>Report a bug</li>
                  <li>Refund Policy</li>
                  <li>Call Support</li>
                </ul>
              </div>
              <div>
                <h1 className='font-semibold pb-2'>Contact Us</h1>
                <ul>
                  <span><img src={email} alt="" />info@accesddblabs.com</span>
                  <span><img src={call} alt="" />(+91)9288008801</span>
                  <span><img src={loc} alt="" />Door No.28/69/1,pattiraikal,Thrissur,Kerala 680008,India</span>
                </ul>
              </div>
            </div>
        </div>
      
    </div>
  )
}

export default footer
