import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaLocationDot } from "react-icons/fa6";

const dataHome = [
  {
    img: `Smartworld.webp`,
    place: `Smartworld One DXP`,
    sector: `Sector 113, Gurgaon`,
    price: `On Request`,
  },
  {
    img: `M3M.webp`,
    place: `M3M Alltitude`,
    sector: `Sector 65, Gurgaon`,
    price: `On Request`,
  },
  {
    img: `Mansion.webp`,
    place: `M3M Mansion`,
    sector: `Sector 103, Gurgaon`,
    price: `On Request`,
  },
  {
    img: `M3M.webp`,
    place: `M3M Alltitude`,
    sector: `Sector 65, Gurgaon`,
    price: `On Request`,
  },
 
  {
    img: `M3M.webp`,
    place: `M3M Alltitude`,
    sector: `Sector 65, Gurgaon`,
    price: `On Request`,
  },
];

const Card = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
   <div>
    <div>
      <h2 className=" text-8xl text-center text-[#e49847] py-14">Projects</h2>
    </div>
     <div className=" w-full px-10 md:w-2/3 flex flex-col mx-auto">
      <Slider {...settings}>
        {dataHome.map((d, index) => (
          <div key={index} className="relative px-2"> {/* Add padding here */}
            <div className="card h-[650px] flex flex-col gap-5 rounded-2xl w-[90%] mx-auto bg-white overflow-hidden">
              <div className="flex">
                <img
                  src={d.img}
                  className="rounded-t-xl h-[400px] w-full"
                  alt={d.place}
                />
              </div>
              <div className="flex gap-3 flex-col px-5">
                <p className="text-2xl font-semibold">{d.place}</p>
                <div className="flex gap-3 items-center">
                  <FaLocationDot className="text-2xl" />
                  <p>{d.sector}</p>
                </div>
                <p className="flex items-center">
                  <span className="text-2xl font-extrabold mx-2">&#8377;</span>
                  <span className="mx-2">{d.price}</span>
                </p>
                <button className="mt-2 mx-5 w-[120px] h-[35px] bg-black text-white rounded-xl">
                  View More
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
   </div>
  );
};

export default Card;
