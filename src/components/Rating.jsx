import React from 'react'

export default function Rating(props) {
    const stars = Array.from({length: props.count})
    
  return (
    <div className="flex items-center">
        {   stars.map((star, index) =>{
                let color = 'none'
            if(index < props.value) {
                color = 'white'
            }
                return (
                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 2.61352L7.95839 5.36519L8.1337 5.8685H8.66666H11.5206L9.31062 7.62805L8.91739 7.94114L9.0575 8.42385L9.86845 11.2179L7.41984 9.56369L7 9.28006L6.58015 9.56369L4.13154 11.2179L4.94249 8.42385L5.0826 7.94114L4.68937 7.62805L2.47941 5.8685H5.33333H5.8663L6.0416 5.36519L7 2.61352Z" fill={color} stroke="white" stroke-width="1.5"/>
                    </svg>
                )
            })
        }
        <span className='ml-3 text-sm text-white'>{props.value}</span>
    </div>
  )
}
