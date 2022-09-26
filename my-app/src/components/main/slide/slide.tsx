import React, {
  ChangeEventHandler,
  FC,
  FunctionComponent,
  useEffect,
  useState,
} from "react";
import "./slide.sass";

export interface SlideProps {
  backgroundColor: string;
  title: string;
  subtitle: string;
  buttonTitle: string;
  buttonUrl: string;
  img: any;
}

export const Slide: FunctionComponent<SlideProps> = ({
  backgroundColor,
  title,
  subtitle,
  buttonTitle,
  buttonUrl,
  img,
}) => {
  return (
    <>
      <div
        className="slide_container"
        style={{ backgroundColor: backgroundColor }}
      >
        <div className="left_text_side">
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <a href={buttonUrl}>
            <button>{buttonTitle}</button>
          </a>
        </div>
        <div className="right_img_side">
          <img src={img} alt="main_slide img" />
        </div>
      </div>
    </>
  );
};
