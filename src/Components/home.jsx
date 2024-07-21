import React from 'react'
import Navbar from './navbar'
import BannerImage1 from "../Assets/BannerImage.png"
import BannerImage2 from "../Assets/8975422.jpg"
import BannerImage3 from "../Assets/thirdbanner.jpg"
import Lens from "../Assets/lens.png"
import LocationIcon from "../Assets/location.png"
import cityImage from "../Assets/Frame 39525.png"
import Tests from "../Assets/tests.png"
import work from "../Assets/howwork.png"


const Home = () => {

  return (
    <div>
      <Navbar/>
      <div className='font-[outfit]'>
        <div className='flex relative'>
        <img className='w-[100%] h-[611px] opcaity-' src={BannerImage1} alt="" />
        <div className='absolute top-[110px] left-[80px]'>
          <h1 className='text-[#FFFFFF] text-[30px] w-[20rem] font-bold pb-5'>We have served more than 7000+ cutomers</h1>
          <p className='text-[#FFFFFF] font-[600] w-[20rem]'>Lorem ipsum dolor sit amet consectetur adipiscing elit mollis quisque senectus massa lobortis, scelerisque maecenas sagittis faucibus integer</p>
        </div>
        <div className='absolute top-[28rem] mx-8'>
          <div className='mx-8'> 
          <input className='flex relative w-[1280px] h-[80px] border rounded-2xl' type="text" />
          <img className='absolute top-5 left-12 size-10' src={LocationIcon} alt="" />
          <h1 className='text-[#1F6CAB] absolute top-7 left-28 size-14 font-semibold w-[20px]'>Banglore</h1>
          <img className='absolute top-7 right-16 size-6' src={Lens} alt="" />
          <p className='absolute top-24 left-10 text-sm text-[#FFFF]'>We are associated with more than 25+ lab</p>
          </div>
        </div>
        </div>
      </div>
      <div>
        <h1 className='font-[900] py-9 pl-[38rem] text-xl  text-[#505050]'>Popular Lab in your City</h1>
        <div className='pt-2'>
          <img className='w-[100%]' src={cityImage} alt="" />
        </div>
      </div>
      <div>
        <h1 className='font-[900] py-9 pl-[38rem] text-xl  text-[#505050]'>Popular Test in your city</h1>
      </div>
      <div className='pt-2'>
        <img className='w-[100%]' src={Tests} alt="" />
      </div>
      <div className='px-12 mt-8'>
        <img src={work} alt="" />
      </div>
      <div>
        <p>Pick where you left off</p>
      </div>
    </div>
  )
}

export default Home

