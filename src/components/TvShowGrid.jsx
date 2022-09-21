import React, {useState, useEffect} from 'react'
import axiosClient from '../utils/axiosClient'
import TvShowCard from './TvShowCard'

export default function TvShowGrid(props) {
    const [tvShows, setTvShows] = useState([])

    useEffect(() => {
        const fetchTvShows = async() => {
            const response = await axiosClient.get(`/tv/popular`)
            setTvShows(response.data.results)
        }
        fetchTvShows()
    }, [])
    console.log(tvShows)
  return (
    <div className='px-20 py-10 relative'>
        <p className='px-5 mb-5 text-lg text-white font-serif'>{props.title}  </p>
        <div className='grid grid-flow-col  overflow-auto' >
            {
                tvShows.map((tvShow, index) => (
                    <TvShowCard key={index} item={tvShow}  />
                ))
            }
        </div>
    </div>
  )
}
