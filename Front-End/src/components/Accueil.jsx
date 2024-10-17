import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import image from './../assets/download.jpeg';
import image2 from './../assets/spa1.jpg';
import image3 from './../assets/spa2.jpg';
import image4 from './../assets/spa3.jpg';
import image5 from './../assets/spa4.jpg';
import { FcPlanner } from "react-icons/fc";
import { PiGift } from "react-icons/pi";
import { Block } from './Block';



export function Accueil() {
    return (
        <>
            <main>
                <section >
                    <div className='introduction'>
                        <h1>Go Ahead</h1>
                        <span>Welcome to Keynaspa</span>
                    </div>
                    <div className='slider'>
                        <Splide
                            options={{
                                type: 'loop',
                                perPage: 1,
                                autoplay: true,
                                interval: 5000, 
                                pauseOnHover: true, 
                                resetProgress: false, // Pour que le progrès ne soit pas réinitialisé à chaque fois
                            }}
                        >
                            <SplideSlide>
                                <img src={image} loading='lazy' alt="Slide 1" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
                            </SplideSlide>
                            <SplideSlide>
                                <img src={image2} loading='lazy' alt="Slide 2" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
                            </SplideSlide>
                            <SplideSlide>
                                <img src={image3} loading='lazy' alt="Slide 2" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
                            </SplideSlide>
                            <SplideSlide>
                                <img src={image4} loading='lazy' alt="Slide 2" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
                            </SplideSlide>
                            <SplideSlide>
                                <img src={image5} loading='lazy' alt="Slide 2" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
                            </SplideSlide>
                        </Splide>
                    </div>
                </section>
                <section className='About'>
                    <div className='image' >
                        <span></span>
                    </div>
                    <div className='text'>
                        <h1>A propos de nous</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus voluptatum vitae earum accusamus, nihil itaque quas modi. Modi veniam cupiditate id rem deleniti consequuntur quibusdam dolore, pariatur quam voluptatibus exercitationem.</p>
                        <div className='evens'>
                            <span><FcPlanner /></span>
                            <p>Evenements et Promotions</p>
                        </div>
                        <div className='evens'>
                            <span><PiGift /></span>
                            <p>Cartes cadeaux</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='containerr'>
                        <div className='peace'>
                            <h1 className='title'>La relaxation Ultime</h1>
                            <div className='peaces'>
                                <div className='Apeace'>
                                    <div style={{gap:0}}>
                                        <span className='icone'></span>
                                        <span className='textpeace'>Mindful Moment</span>
                                    </div>
                                    <div style={{gap:0}}>
                                        <span className='icone'></span>
                                        <span className='textpeace'>Mindful Moment</span>
                                    </div>
                                    <div style={{gap:0}}>
                                        <span className='icone'></span>
                                        <span className='textpeace'>Mindful Moment</span>
                                    </div>
                                    
                                </div>
                                <div className='Apeace'>
                                    
                                    <div style={{gap:0}}>
                                        <span className='icone'></span>
                                        <span className='textpeace'>Mindful Moment</span>
                                    </div>
                                    <div style={{gap:0}}>
                                        <span className='icone'></span>
                                        <span className='textpeace'>Mindful Moment</span>
                                    </div>
                                    <div style={{gap:0}}>
                                        <span className='icone'></span>
                                        <span className='textpeace'>Mindful Moment</span>
                                    </div>
                                </div>



                            </div>

                        </div>
                        <div className='effect'>

                        </div>

                    </div>
                </section>
                
                    <Block/>
                
                
            </main>
            
        </>
    );
}
