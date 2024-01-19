import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import "./News.css"
export default function News() {
    const [data,setData] = useState([]);
       
    useEffect(()=>{
        const fetchData = async()=>{
            const data =await fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=459cc0da51964312a4de166a80b43f72")
            const response = await data.json();
            setData(response.articles)
           }
        fetchData();
    },[])
  return (
    <>
    <div className='main'>
    
        <ul className='container'>
            {data.map((item,index)=>(
                <Newsitem key={index} title={item.title} description={item.description}
                img ={item.urlToImage} url = {item.url}/>
            ))}
        </ul>
    </div>
    
    </>
    
  )
}
