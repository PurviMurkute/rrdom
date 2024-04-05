import React from 'react';
import './Home.css';
import Navbar from './../../components/Navbar/Navbar';
import { articles } from './../../config/blog';
import BlogCard from './../../components/BlogCard/BlogCard';

function Home() {
  return (
    <div>
        <Navbar/>
        {/* <h1>Home Page</h1> */}
        <hr/><hr/><hr/><hr/>
        <div className='blog-card-container'>
        {
            articles.map((article, index) => {
                const {title, thumbnail, price, description, author, data, content} = article;
                return(
                <BlogCard key={index} title={title} thumbnail={thumbnail} price={price} description={description} author={author} data={data} content={content}/> 
                )
            })
        }
    </div>
    </div>
  )
}

export default Home