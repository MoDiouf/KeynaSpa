import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import image1 from './../assets/caroussel1.jpg';
import image2 from './../assets/caroussel2.jpg';
import image3 from './../assets/caroussel3.jpg';
import { useState, useEffect } from 'react';

export function Autoscroll() {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 997);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 997);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const splideOptions = {
    type: 'loop',
    drag: 'free',
    focus: 'center',
    perPage: isMobile? 3 : 5,
    autoScroll: {
      speed: 1,
    },
  };

  return (
    <>
      <Splide options={splideOptions}>
        <SplideSlide>
          <img src={image1} alt="Image 1" style={{ width: '150px', height: '150px' }} className={`slider-image ${isMobile? 'mobile-slide' : ''}`} />
        </SplideSlide>
        <SplideSlide>
          <img src={image2} alt="Image 2" style={{ width: '150px', height: '150px' }} className={`slider-image ${isMobile? 'mobile-slide' : ''}`} />
        </SplideSlide>
        <SplideSlide>
          <img src={image3} alt="Image 3" style={{ width: '150px', height: '150px' }} className={`slider-image ${isMobile? 'mobile-slide' : ''}`} />
        </SplideSlide>
        <SplideSlide>
          <img src={image2} alt="Image 2" style={{ width: '150px', height: '150px' }} className={`slider-image ${isMobile? 'mobile-slide' : ''}`} />
        </SplideSlide>
        {/* Ajoutez autant de SplideSlide que nécessaire */}
      </Splide>
    </>
  );
}
