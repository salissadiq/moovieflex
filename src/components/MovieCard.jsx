import React from 'react'
import apiConfig from '../utils/apiConfig'

import Rating from './Rating'

export default function MovieCard(props) {
    const {item} = props
    const background =  apiConfig.w500Image(item.poster_path || item.backdrop_path)
  return (
        <div style={{backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(${background})`}} className='bg-center bg-cover w-48 h-64 min-w-48 max-w-48 px-7 py-5 flex flex-col justify-end cursor-pointer hover:scale-105 '>
            <p className='text-white'>Fantasy</p>
            <Rating count={1} value={item?.vote_average} />
            <p className='  text-white'>{item?.title}</p>
        </div>
  )
}
