import { useInfoModal } from '@/hooks/useInfoModal';
import useMovie from '@/hooks/useMovie';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useCallback } from 'react';


interface InfomodalProps{
    visible?: boolean,
    onClose: any
};


const InfoModal: React.FC<InfomodalProps> = ({visible, onClose}) => {
    const [isVisible, setIsVisible] = useState(!!visible);
    const {movieId} = useInfoModal();
    const {data = {}} = useMovie(movieId);

    useEffect(()=>{
        setIsVisible(!!visible);
    }, [ visible]);
    const handleClose = useCallback(()=>{
        setIsVisible(false);
        setTimeout(()=>{
            onClose()
        }, 300)
    }, [onClose]);

    if(!visible){
        return null;
    }
  return (
    <div
    className='z-50 fixed
    inset-0'>
      <div
      className={`${isVisible?'scale-100':'scale-0'}`}
      >
        <div className='
        '>
            <div className='
            relative h-96
            '>
                <video 
                className='
                w-full h-full
                brightness-[50%]'
                autoPlay muted loop 
                poster={data?.thumbnailUrl}
                src={data?.videoUrl}></video>
            </div>
        </div>
      </div>
    </div>
  )
}

export default InfoModal
