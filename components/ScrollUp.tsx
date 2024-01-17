import React, { useCallback, useEffect, useState } from 'react'
import { ARROW_UP } from './images'
import { FatButton } from '.'

const ScrollUp = () => {
    const [toScroll, setToScroll] = useState(false);

    function clickedScroll(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const handleScroll = useCallback(() => {
      setToScroll(window.pageYOffset < 600);
    }, []);
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        setToScroll(false)
        window.removeEventListener('scroll', handleScroll);
      };
    }, [handleScroll]);

  return (
        !toScroll &&
        <div className='fixed bottom-12 right-12 p-4 z-[1000] scale-[1] overflow-hidden'>
            <FatButton super={{ customStyle: "pl-2 pr-4 rounded-[50px]", clickFunction: clickedScroll}} outline image providedImage={ARROW_UP} />
        </div>
  )
}

export default ScrollUp