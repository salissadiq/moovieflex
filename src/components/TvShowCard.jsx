import React, {useState, useEffect} from 'react'
import apiConfig from '../utils/apiConfig'
import axiosClient from '../utils/axiosClient'

import Rating from './Rating'

export default function MovieCard(props) {
    const {item} = props
    const background =  apiConfig.w500Image(item.poster_path || item.backdrop_path)
  return (
        <div style={{backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(${background})`}} className='bg-center bg-cover w-96 h-[700px] min-w-96 max-w-96 px-7 py-5 flex flex-col justify-end cursor-pointer hover:scale-105 '>
            <p className='text-white'>Fantasy</p>
            <Rating count={1} value={item?.vote_average} />
            <p className='  text-white'>{item?.name}</p>
        </div>
  )
}
