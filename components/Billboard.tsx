import useBilllboard from '@/hooks/useBillboard'
import React from 'react'

const Billboard = () => {
    const {data:movie} = useBilllboard();
  return (
    <div className='relative h-[56.25vw]'>
      <video
      autoPlay
      muted
      loop
       poster={movie?.thumbnailUrl} src={movie?.videoUrl} 
       className='w-full'></video>

       <div className='absolute top-[30%] ml-4' >
            <p className='text-white
             text-1xl
              md:text-5xl
               font-bold
               h-full w-[50%]
                drop-shadow-xl'>
                {movie?.title}
            </p>
            <p className='text-white w-[90%]
            text-[10px]
            mt-3
            '>{movie?.description}</p>
            <div className='flex items-center gap-3 mt-3'>
                <button
                className='
                bg-white
                text-white
                bg-opacity-60 hover:bg-opacity-20
                px-1
                py-1
                rounded-md
                text-xs
                '
                >More Info</button>
            </div>
       </div>
    </div>
  )
}

export default Billboard
