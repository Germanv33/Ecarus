import { observer } from "mobx-react-lite";
import React, { FC, FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import "./itemStyle.sass";

export interface ItemProps {
  brand: string;
  img: any;
  title: string;
  title_type: string;
  cost: number;
}

export const Item: FunctionComponent<ItemProps> = ({
  brand,
  img,
  title,
  title_type,
  cost,
}) => {
  return (
    <>
      <div className="card">
        <div className="card__background">
          <button className="item__logo">
            <span className="brand">{brand}</span>
          </button>

          <img src={img} alt="" className="item__img" />
        </div>
        <div className="item__desription">
          <span className="item__title">{title}</span>
          <span className="item__type">{title_type}</span>
          <div className="cost">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.333496"
                width="24"
                height="24"
                rx="12"
                fill="url(#paint0_linear_4104_408)"
              />
              <path
                d="M8.3335 18H16.3335V16.1777H10.5484V12.9023H15.8738V11.0801H10.5484V7.82227H16.2857V6H8.3335V18Z"
                fill="white"
              />
              <rect x="11.3335" y="4" width="2" height="2" fill="white" />
              <rect x="11.3335" y="18" width="2" height="2" fill="white" />
              <defs>
                <linearGradient
                  id="paint0_linear_4104_408"
                  x1="-0.0331467"
                  y1="-3.74999"
                  x2="17.6933"
                  y2="27.796"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#00D5C7" />
                  <stop offset="1" stop-color="#FFEE57" />
                </linearGradient>
              </defs>
            </svg>
            <span className="cost_span">{cost}</span>
          </div>
        </div>
      </div>
    </>
  );
};
