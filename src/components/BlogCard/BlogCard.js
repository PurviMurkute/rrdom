import React from 'react'
import './BlogCard.css'

function BlogCard({title, thumbnail, price, description, author, data, content}) {
  return (
    <div className='blogcard'>
        <p>{thumbnail}</p>
        <h1 className='title'>{title}</h1>
        <h2 className='price'>{price}</h2>
        <p className='description'>{description}</p>
    </div>
  )
}

export default BlogCard