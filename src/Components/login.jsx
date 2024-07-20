import React from 'react'
import backgroundImage from "../Assets/Background Image.png"
import vector from "../Assets/Vector 5.png"
const login = () => {
  return (
    <div className='flex items-center justify-center'>
        <img className=' relative w-[100%] h-[729px]' src={backgroundImage} alt="bgImage" />
        <div className='absolute top-50 left-50 rounded-[45px] bg-slate-100 w-[485px] h-[600px] '>
            <img className='w-6 absolute left-10 top-10' src={vector} alt="" />
            <img className='w-13 absolute left-50 bottom-10' src={vector} alt="" />
            <img className='w-10 absolute right-10 top-20' src={vector} alt="" />
            <div className='flex flex-col items-center pt-8'>
              <h1>logo</h1>
              <h1 className='color-[#1e1b4b]'>Report Download portal</h1>
            </div>
            <div className='relative rounded-[20px] mx-20 my-20 h-[282px] bg-[#00D3EB]'>
                <h1 className='pl-[20px] text-lg font-bold font-outfit px-'>Login</h1>
                <form  action="" className='flex flex-col justify-center px-8 py-3  '>
                    <label className='pt-[18px]' htmlFor="">Username</label>
                    <input type="text" placeholder='Enter email Id' name="username" id="username" />
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder='Password' name='password' id='password' />
                    <button className='bg-[#1F6CAB] text-white mt-5'>SUBMIT</button>
                </form>
                <a className='text-sm font-semibold pl-[102px] mt-[10px]' href="#">Reset password</a>
            </div>
        </div>
    </div>

  )
}

export default login