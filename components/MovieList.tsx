import { isEmpty } from 'lodash';
import React from 'react'
import MovieCard from './MovieCard';
interface MovieListProps {
    data: Record<string, any>[];
    title: string
}

const MovieList: React.FC<MovieListProps> = ({data, title}) => {

    if(isEmpty(data)){
        return null;
    }

  return (
    <div className='px-3'>
      <div>
        <p className='text-white'>
            {title}
        </p>
        <div className='grid grid-cols-4'>
            {data.map((movie) => (
                <MovieCard key={movie.id} data={movie}/>
            ))}
        </div>
      </div>
    </div>
  )
}

export default MovieList
