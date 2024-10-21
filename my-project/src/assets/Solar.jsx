import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  {
    src: "https://img.staticmb.com/mbcontent/images/crop/uploads/2024/1/solar-panels-for-home_0_1200.jpg",
    alt: "Solar Panel 1",
  },
  {
    src: "https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202006/MIT-PPA-1-Press_solar_array_3.jpg?itok=42Lhjby-",
    alt: "Solar Panel 2",
  },
  {
    src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29sYXIlMjBwYW5lfGVufDB8fDB8fHww%3D%3D",
    alt: "Solar Panel 3",
  },
];

const Solar = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    appendDots: (dots) => (
      <div style={{ bottom: "40px" }} className="slick-dots">
        <ul className="space-x-1"> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-1.5 h-1.5 bg-white rounded-full transition-all duration-300"></div>
    ),
  };

  return (
    <>
      <style>
        {`
          .slick-dots li.slick-active div {
            background-color: black !important;
          }
        `}
      </style>
      <div className="relative lg:bg-zinc-900">
        <Slider {...settings} className="lg:mx-auto max-w-[1520px]">
          {images.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover w-full h-[600px]"
              />
            </div>
          ))}
        </Slider>
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white bg-black bg-opacity-50">
          <h1 className="text-3xl font-bold">
            GREEN<span className="font-light">TECH SOLAR PANELS</span>
          </h1>
          <h5 className="mt-2 text-lg">
            Affordable energy solution for your home or office
          </h5>
          <div className="flex justify-center mt-4">
            <button className="px-4 py-2 text-white bg-green-500 rounded btn hover:bg-green-600">
              FIND OUT MORE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Solar;
