import React, {useState, useEffect} from 'react'
import axiosClient from '../utils/axiosClient'
import MovieCard from './MovieCard'
export default function MovieGrid(props) {
    const [movies, setMovies] = useState([])

    useEffect(()=> {
        const fetchMovies = async () => {
           const response = await axiosClient.get(`/movie/${props.type}`)
           console.log(response.data)
           setMovies(response.data.results.slice(0, 19))
        }
        fetchMovies()
    }, [])
  return (
    <div className='px-20 py-10 relative'>
        <p className='px-5 mb-5 text-lg text-white font-serif'>{props.title}  </p>
        <div className='grid grid-flow-col  gap-10 overflow-auto' >
            {
                movies.map((movie, index) => (
                    <MovieCard key={index} item={movie}  />
                ))
            }
        </div>
    </div>
  )
}
