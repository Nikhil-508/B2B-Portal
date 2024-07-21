import React, { useEffect, useState } from 'react';
import { sampleData, doctorNames } from './sampleData';

import Logo from '../Assets/logo.png'
import Downarrow from '../Assets/download.png'
import Comments from '../Assets/Comments.png'
import Lens from '../Assets/lens.png'
import Whitelens from '../Assets/whiteLens.png'

const Dashboard = () => {

    const inititalFilterState = {
        patientName : '',
        date : '',
        eta : '',
        hospitalId : '',
        status: '',
        doctorName: '',
        orderNo: ''
    }
    const [showFilters, setShowFilters] = useState(false)
    const [filters , setFilters] = useState(inititalFilterState)
    const [data , setData] = useState(sampleData)

    useEffect(() => {
        console.log(filters)
    } , [filters])

    const handleFields = (e) => {
        const {name , value} = e.target
        
        // setFilters({...filters, [e.target.name] : e.target.value})
        setFilters(prev => {
            return {...prev, [name] : value}
        })
    }
    const filterMatchingObjects = (obj, arr) => {
        return arr.filter(arrayItem => {
            return Object.keys(obj).every(key => obj[key] === arrayItem[key]);
        })
    };

    const filterNonEmptyValues = (obj) => {
        const result = {};
        Object.keys(obj).forEach(key => {
            if (obj[key] !== '' && obj[key] !== null && obj[key] !== undefined) {
                result[key] = obj[key];
            }
        });
        return result;
    };
    const handleClick = () => {
        const nonEmptyFilters = filterNonEmptyValues(filters)
        const data = filterMatchingObjects(nonEmptyFilters , sampleData)
        console.log(nonEmptyFilters,data , 'dataaaa')
        setData(data)
    }
    const handleClear = () => {
        setFilters(inititalFilterState)
        setData(sampleData)
    }

    return (

        <div className="p-4 w-[100%] bg-[#E4FBFB]">
            <div className='flex flex-row justify-between w-[100%] px-2 py-4'>
                <div>
                    <h1>Patient Reports</h1>
                </div>
                <div className='w-auto flex justify-between'>
                    <button onClick={() => setShowFilters((prev) => !prev)} className='bg-[#1F6CAB] h-[30px] w-40 rounded-[5px] text-white' >Apply Filter</button>
                    <div className='flex justify-between relative'>
                        <input  className='bg-[#F4F4F4] ml-2 border-[#1F6CAB] border-2 rounded-sm w-[450px] h-[30px]' type="text" />
                        <img src={Lens} alt="" className='absolute right-3 top-[6px]' />
                    </div>
                </div>
            </div>
            {
                showFilters &&
                <>
                    <div className='grid grid-cols-3 gap-4 bg-white px-3 py-3'>
                        <div className='flex justify-between w-[249px] h-[32px]'>
                            <span>From Date</span>
                            <input name='date' onChange={(e) => handleFields(e)} className='border-[1px] border-black' type="date" />
                        </div>
                        <div className='flex justify-between w-[249px] h-[32px]'>
                            <span>To Date</span>
                            <input name='eta' className='border-[1px] border-black' type="date" />
                        </div>
                        <div className='flex justify-between w-[249px] h-[32px]'>
                            <span>Refer By</span>
                            {/* <input className='border-[1px] border-black' type="text" /> */}
                            <select onChange={(e) => handleFields(e)} name="doctorName" id="" className='border-[1px] border-black min-w-[100px]'>
                                {doctorNames && doctorNames.map((data, i) => {
                                    return (
                                        <option key={i} value={data}>{data}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className='flex justify-between w-[249px] h-[32px]'>
                            <span>Patient Name</span>
                            <input name='patientName'
                            onChange={(e) => handleFields(e)} 
                            className='border-[1px] border-black' type="text" />
                        </div>
                        <div className='flex justify-between w-[249px] h-[32px]'>
                            <span>Hospital ID</span>
                            <input name='hospitalId' 
                            onChange={(e) => handleFields(e)} className='border-[1px] border-black' type="text" />
                        </div>
                        <div className='flex justify-between w-[249px] h-[32px]'>
                            <span>Status</span>
                            {/* <input className='border-[1px] border-black' type="text" /> */}
                            <select onChange={(e) => handleFields(e)} name="status" id="" className='border-[1px] border-black min-w-[100px]'>
                                {sampleData && Array.from(new Set(sampleData.map(obj => obj.status)))
                                    .map((data , i) => {
                                        return (
                                            <option key={i} value={data}>{data}</option>
                                        )
                                    })}
                            </select>
                        </div>
                        <div className='flex justify-between w-[249px] h-[32px]'>
                            <span>Bill No</span>
                            <input onChange={(e) => handleFields(e)} name='orderNo' className='border-[1px] border-black' type="text" />
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <p>Please provide search criteira and press search button</p>
                        <div className='flex justify-between'>
                            <div className='relative'>
                                <img src={Whitelens} alt="" className='absolute left-0 top-2' />
                                <button className='bg-[#1F6CAB] w-[106px] h-[36px] text-white' onClick={handleClick} >Search</button>
                            </div>
                            <button onClick={handleClear} className='bg-[#F46C09] text-white ml-2'> X Clear</button>
                        </div>
                    </div>
                </>
            }


            <table className="table-auto w-full bg-[#FFFFFF]">
                <thead>
                    <tr className="bg-gray-100 text-gray-600 text-left uppercase font-medium">
                        <th className="py-3 px-6">Order No</th>
                        <th className="py-3 px-6">Date</th>
                        <th className="py-3 px-6">Patient Name</th>
                        <th className="py-3 px-6">Hospital ID</th>
                        <th className="py-3 px-6">Test Name</th>
                        <th className="py-3 px-6">Doctor Name</th>
                        <th className="py-3 px-6">ETA</th>
                        <th className="py-3 px-6">Status</th>
                        <th className="py-3 px-6">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((item , i) => (
                        <tr key={i} className="border-b border-gray-200 hover:bg-gray-100">
                            <td className="py-4 px-6">{item.orderNo}</td>
                            <td className="py-4 px-6">{item.date}</td>
                            <td className="py-4 px-6">{item.patientName}</td>
                            <td className="py-4 px-6">{item.hospitalId}</td>
                            <td className="py-4 px-6">{item.testName}</td>
                            <td className="py-4 px-6">{item.doctorName}</td>
                            <td className="py-4 px-6">{item.eta}</td>
                            <td className="py-4 px-6">{item.status}</td>
                            <td className="flex flex-row space-x-4"><img src={item.status == 'Ready' ? Downarrow : ""} alt="" /><img src={Comments} alt="" /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;
