import React from 'react'
import Navbar from './navbar'
import BannerImage1 from "../Assets/BannerImage.png"
import Lens from "../Assets/lens.png"
import LocationIcon from "../Assets/location.png"
import cityImage from "../Assets/Frame 39525.png"
import Tests from "../Assets/tests.png"
import work from "../Assets/howwork.png"
import Card from './Card'
import offerimage from "../Assets/Offer.png"
import blogImage from "../Assets/learnImage.png"
import Blog from './blog'
import Footer from './footer'


const Home = () => {


  const cardsData = [
    {
      id: 1,
      hospital: "Garuda",
      location: "Okhla, Delhi",
      rating: 4.3,
      testName: "Thyroid profile Total",
      testDetails: "(T3, T4, TSH)",
      price: 399,
      originalPrice: 1299,
      discount: "70% OFF",
      reportTime: "Expected report in 1 Day"
    },
    {
      id: 2,
      hospital: "Apollo",
      location: "Noida, UP",
      rating: 4.5,
      testName: "Lipid Profile",
      testDetails: "(Total Cholesterol, HDL, LDL)",
      price: 499,
      originalPrice: 1499,
      discount: "67% OFF",
      reportTime: "Expected report in 2 Days"
    },
    {
      id: 3,
      hospital: "Fortis",
      location: "Gurgaon, Haryana",
      rating: 4.8,
      testName: "Complete Blood Count",
      testDetails: "(CBC)",
      price: 299,
      originalPrice: 999,
      discount: "70% OFF",
      reportTime: "Expected report in 1 Day"
    },
    {
      id: 4,
      hospital: "Max Healthcare",
      location: "Saket, Delhi",
      rating: 4.6,
      testName: "Diabetes Screening",
      testDetails: "(Fasting Blood Sugar, HBA1C)",
      price: 349,
      originalPrice: 1049,
      discount: "67% OFF",
      reportTime: "Expected report in 1 Day"
    },
    {
      id: 5,
      hospital: "Manipal Hospital",
      location: "Dwarka, Delhi",
      rating: 4.2,
      testName: "Kidney Function Test",
      testDetails: "(KFT)",
      price: 499,
      originalPrice: 1499,
      discount: "67% OFF",
      reportTime: "Expected report in 2 Days"
    },
    {
      id: 6,
      hospital: "BLK Hospital",
      location: "Rajendra Place, Delhi",
      rating: 4.4,
      testName: "Liver Function Test",
      testDetails: "(LFT)",
      price: 399,
      originalPrice: 1199,
      discount: "67% OFF",
      reportTime: "Expected report in 1 Day"
    },
    {
      id: 7,
      hospital: "Medanta",
      location: "Gurgaon, Haryana",
      rating: 4.9,
      testName: "Vitamin D Test",
      testDetails: "(25-Hydroxy Vitamin D)",
      price: 299,
      originalPrice: 899,
      discount: "67% OFF",
      reportTime: "Expected report in 1 Day"
    },
    {
      id: 8,
      hospital: "Artemis Hospital",
      location: "Gurgaon, Haryana",
      rating: 4.5,
      testName: "Thyroid Profile",
      testDetails: "(T3, T4, TSH)",
      price: 399,
      originalPrice: 1299,
      discount: "70% OFF",
      reportTime: "Expected report in 1 Day"
    },
    {
      id: 9,
      hospital: "Columbia Asia",
      location: "Ghaziabad, UP",
      rating: 4.7,
      testName: "Cardiac Risk Assessment",
      testDetails: "(CRP, Homocysteine)",
      price: 499,
      originalPrice: 1499,
      discount: "67% OFF",
      reportTime: "Expected report in 2 Days"
    },
  ];


  const blogData = [
    {
      title: 'Mountain Adventure',
      description: 'Explore the breathtaking views and scenic trails of the mountains. Perfect for outdoor enthusiasts looking for a thrilling adventure.',
    },
    {
      title: 'Urban Escape',
      description: 'Discover the vibrant life of the city with its bustling streets, amazing food, and exciting events. Ideal for those who love urban exploration.',
    },
    {
      title: 'Serene Beach',
      description: 'Relax on the sandy shores and enjoy the calm waves and peaceful sunsets. A perfect getaway for those seeking tranquility and relaxation.',
    }
  ];

  const firstSixCards = cardsData.slice(0, 6);
  const remainingCards = cardsData.slice(6);

  console.log(remainingCards,"baki cardssss");
  

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
      <div className="w-full max-w-md mx-auto">
        <img src={work} alt="" className="w-full h-auto object-cover" />
      </div>

      <div className='bg-[#F5F7F8]'>
        <p className='font-semibold pl-2 pt-4'>Pick where you left off</p>
      </div>
      <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-[#F5F7F8]'>
        {firstSixCards.map((data,i)=>(
          <Card
            key={i}
            labName={data.labName}
            location={data.location}
            rating={data.rating}
            testName={data.testName}
            price={data.price}
            originalPrice={data.originalPrice}
            discount={data.discount}
            reportTime={data.reportTime}
          />
        ))}
      </div>
      <div className='mx-6'>
        <img className='w-[100%]' src={offerimage} alt="" />
      </div>
      <div className='mx-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-[#F5F7F8]'> 
        {remainingCards.map((data,i)=>(
            <Card
              key={i}
              labName={data.labName}
              location={data.location}
              rating={data.rating}
              testName={data.testName}
              price={data.price}
              originalPrice={data.originalPrice}
              discount={data.discount}
              reportTime={data.reportTime}
            />
          ))}
      </div>
      <div>
        <h1 className='font-semibold pl-2 py-4 text-[#505050]'>Latest Blog</h1>
        <div className='mx-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-[#F5F7F8]'>
          {blogData.map((data,i)=>(
            <Blog key={i} title={data.title} description={data.description}
            />
          ))}
        </div>
      </div>
      <div>
        <Footer/>
      </div>

    </div>
  )
}

export default Home

