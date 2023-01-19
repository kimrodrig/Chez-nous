import React from 'react'
import video from './img/video.mp4'
import { NavLink} from "react-router-dom";
import { SafeAreaProvider } from 'react-native-safe-area-context';



function Video() {

    // document.body.style.backgroundColor = "black";

    return (
        // <SafeAreaProvider>
            <div>
                <header
                class="flex items-center justify-center h-screen overflow-hidden"
                >
                    <div
                    class="relative z-30 p-5 text-2xl text-white bg-opacity-50 rounded-xl"
                    >
                        <div>
                            <div className="video-title mt-20 mb-6">
                                chez nous
                            </div> 
                            <div className="video-subtitle uppercase font-sans tracking-widest font-semibold mb-5">
                                modern dining experience
                            </div>
                        </div>
                        <div className="video-navlink">
                            <NavLink to="/signup" >
                                signup
                            </NavLink>
                        </div>
                        <div className="video-navlink">
                            <NavLink to="/about">
                                about
                            </NavLink>
                        </div>
                        <div className="video-navlink">
                            <NavLink to="/menu">
                                menus
                            </NavLink>
                        </div>
                        <div className="video-navlink">
                            <NavLink to="/reservations">
                                reservations
                            </NavLink>
                        </div>
                        <div className="video-navlink">
                            <NavLink to="/gallery">
                                gallery
                            </NavLink>
                        </div>                    
                    </div>
                    <div 
                    class="z-30 text-white fixed bottom-0 mb-8 space-x-5"
                    >
                        <a type="button" href="http://www.instagram.com/cheznousnyc">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-6 h-6">
                                <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                            </svg>
                        </a>
                        <a type="button" href="mailto:kim@cheznousnyc.com">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 88.86" class="w-6 h-6 invert">
                                <path d="M7.05,0H115.83a7.07,7.07,0,0,1,7,7.05V81.81a7,7,0,0,1-1.22,4,2.78,2.78,0,0,1-.66,1,2.62,2.62,0,0,1-.66.46,7,7,0,0,1-4.51,1.65H7.05a7.07,7.07,0,0,1-7-7V7.05A7.07,7.07,0,0,1,7.05,0Zm-.3,78.84L43.53,40.62,6.75,9.54v69.3ZM49.07,45.39,9.77,83.45h103L75.22,45.39l-11,9.21h0a2.7,2.7,0,0,1-3.45,0L49.07,45.39Zm31.6-4.84,35.46,38.6V9.2L80.67,40.55ZM10.21,5.41,62.39,47.7,112.27,5.41Z"/>
                            </svg>
                        </a>
                    </div>

                
                    <video
                        src={video}
                        muted
                        autoPlay={"autoplay"}
                        preLoad="auto"
                        playsInline={true}
                        loop
                        class="min-w-full min-h-[105%] max-w-screen absolute object-cover"
                        ></video>
                </header>
            </div>
        // </SafeAreaProvider>
    )
}

export default Video