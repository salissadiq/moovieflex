import React, {useState, useEffect} from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import axiosClient from '../utils/axiosClient'
import apiConfig from '../utils/apiConfig';
import Rating from './Rating';


import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Hero() {
    const [movieItems, setMovieItems] = useState([])

    useEffect(()=> {
        const getMovies = async() => {
           const response = await axiosClient.get(`/movie/popular`)
           setMovieItems(response.data.results.slice(1, 6))
        }
        getMovies()
    },[])
    console.log(movieItems)
  return (
    <div className=''>
        <Swiper
            slidesPerView={1}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {movieItems.map((item, index) => (
                <SwiperSlide key={index}>
                    <HeroSlideItem item={item} />
                </SwiperSlide>
            ))
            }
    </Swiper>
    </div>
  )
}
const HeroSlideItem = props => {
    const {item} = props
    
    const background = apiConfig.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path)
    console.log(background)
    return (
        <div style={{backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url(${background})`}} className='bg-center bg-no-repeat bg-cover h-[580px]'>
            <div className='flex h-full w-[600px] ml-64 relative  items-center'>
                <div>
                <Rating count={5} value={item.vote_average} />
                <p className='text-6xl font-semibold font-serif text-white leading-[64px] tracking-wide pt-3'>{item.title}</p>
                <p className='my-3 font-medium text-white'>{item.overview}</p>
                <button className='rounded-full py-3 px-10 border border-red-600 text-white'>Watch now</button>
                </div>
            </div>
        </div>
    )
  }