import React from 'react'
import image1 from '../img/1.png';
import image2 from '../img/2.png';
import image3 from '../img/3.png';
import image4 from '../img/4.png';

function Menu() {
  return (
    <div className="p-3 max-w-xl">
        <div id="carouselExampleCaptions" class="carousel slide relative" data-bs-ride="carousel">
            <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
                ></button>
                <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
                ></button>
                <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
                ></button>
                <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="3"
                aria-label="Slide 4"
                ></button>
            </div>
            <div class="carousel-inner relative w-full overflow-hidden">
                <div class="carousel-item active relative float-left w-full">
                <img
                    src={image1}
                    class="block w-full"
                    alt="..."
                />
                </div>
                <div class="carousel-item relative float-left w-full">
                <img
                    src={image2}
                    class="block w-full"
                    alt="..."
                />
                </div>
                <div class="carousel-item relative float-left w-full">
                <img
                    src={image3}
                    class="block w-full"
                    alt="..."
                />
                <div class="carousel-caption hidden md:block absolute text-center">
                    <h5 class="text-xl"></h5>
                </div>
                </div>
                <div class="carousel-item relative float-left w-full">
                <img
                    src={image4}
                    class="block w-full"
                    alt="..."
                />
                </div>
            </div>
            <button
                class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
            >
                <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button
                class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
            >
                <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  )
}

export default Menu