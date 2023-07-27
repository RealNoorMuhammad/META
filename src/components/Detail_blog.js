import React from 'react'
import {useParams,useLocation} from "react-router-dom"

import axios from "axios";    
import { useState, useEffect } from "react"



function Detail_blog(result) {
    const { slug } = useParams();
    const location=useLocation();
    console.log(location.state)

    const data = location.state
    
  return (
    <div id="cards_landscape_wrap-2">
    <h1 className='text-center'>Blog Detail Page</h1>
    <div className='mt-5 container'>
    <strong className=''>Title</strong>
    <p>{data.title}</p>
    
    
    <p>{data.brief}</p>

    <img
    width="1060"
    src={data.coverImage}
    alt=""
    />

    
    </div>
</div>
  )
}

export default Detail_blog
