import { observer } from "mobx-react-lite";
import React, {
  ChangeEventHandler,
  FC,
  FunctionComponent,
  useEffect,
  useState,
} from "react";
import { NavLink } from "react-router-dom";
import "./slider.sass";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "./slider.sass";
import "swiper/css";
import "swiper/css/autoplay";
import arrow_svg from "../../../svg/main/swiper/arrow.svg";
import first_png from "../../../content/main/slides/first.png";
import second_png from "../../../content/main/slides/second.png";
import thirth_png from "../../../content/main/slides/thirth.png";
import { useSwiper } from "swiper/react";
import { Slide } from "../slide/slide";

export const Slider: FunctionComponent = () => {
  const swiper = useSwiper();
  return (
    <>
      <div className="swiper_conatainer">
        <Swiper
          autoplay={true}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
          navigation={{
            nextEl: ".swiper-button-nextt",
            prevEl: ".swiper-button-prevv",
            disabledClass: "disable", // When the navigation button is not available, the Class is added, that is, when the Swiper index is 0, the last Class class name without prevel will add a disable, which is .swiper-button-prev .disable
          }}
        >
          <div className="mySlider_Wrapper">
            <SwiperSlide>
              <Slide
                backgroundColor="#B3EDC8"
                title="Сделаем мир чище"
                subtitle="Сдай макулатуру или старую одежду и получи скидку на покупку товаров из переработанных материалов"
                buttonTitle="Условия сервиса"
                buttonUrl="/"
                img={first_png}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Slide
                backgroundColor="#FFE48F"
                title="А вы знали..."
                subtitle="что среднее время разложения пластмассовых изделий колеблется от 400 до 700 лет,  а полиэтиленовых пакетов — от 100 до 200 лет? "
                buttonTitle="Узнать больше"
                buttonUrl="/"
                img={second_png}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Slide
                backgroundColor="#BFF0DE"
                title="Что с масками?"
                subtitle="Медицинские маски не обязательно должны становиться отходами.Их тоже можно сдать на переработку. "
                buttonTitle="Пункты сбора масок"
                buttonUrl="/"
                img={thirth_png}
              />
            </SwiperSlide>
          </div>

          {/* <div className="swiper-button-prevv">
              <img src={arrow_svg} alt="arrow" />
            </div>
    
            <div className="swiper-button-nextt">
              <img src={arrow_svg} alt="arrow" />
            </div> */}
        </Swiper>

        <div className="swiper-button-prevv">
          <img onClick={() => swiper.slideNext} src={arrow_svg} alt="arrow" />
        </div>

        <div className="swiper-button-nextt">
          <img onClick={() => swiper.slidePrev} src={arrow_svg} alt="arrow" />
        </div>
      </div>
    </>
  );
};
