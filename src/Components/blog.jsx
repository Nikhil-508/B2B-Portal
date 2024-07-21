import React from 'react'
import blogImage from "../Assets/learnImage.png"

const Blog = ({title,description}) => {
  return (
    <div>
        <div className='max-w-sm rounded overflow-hidden shadow-lg m-4 border w-64'>
            <img src={blogImage} alt="" />
            <div>
            <h1 className='font-semibold font-outfit '>{title}</h1>
            <p>{description}</p>
            </div>
        </div>
        
      
    </div>
  )
}

export default Blog
