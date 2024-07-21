import React from 'react'

const Card = ({labName, location, rating, testName, price, originalPrice, discount, reportTime}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 border w-64">
      <div className="p-4">
        <div className="flex justify-between items-center">
          <div>
            <div className="font-bold text-lg">{labName}</div>
            <div className="text-gray-600">{location}</div>
          </div>
          <div className="flex items-center bg-green-500">
            <span className="text-white text-lg">{rating}</span>
            <span className="ml-1 text-white">★</span>
          </div>
        </div>
        <div className="mt-2 font-bold text-xl">{testName}</div>
        <div className="text-gray-600">(T3, T4, TSH)</div>
        <div className="mt-2 flex items-baseline">
          <span className="text-2xl font-bold text-black">{price}/-</span>
          <span className="text-gray-500 line-through ml-2">{originalPrice}/-</span>
        </div>
        <div className="text-green-500 font-semibold mt-2">{discount} OFF</div>
        <div className="mt-2 text-blue-500">{reportTime}</div>
        <button className="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          BOOK
        </button>
      </div>
    </div>
  )
}

export default Card
