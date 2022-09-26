import React, { useContext, useEffect, useState } from "react";
import "./MainPageStyle.sass";
import TopHeader from "../../components/header/header";
import { observer } from "mobx-react-lite";
import FirstLoginModal from "../../components/login/LoginModals";
import { Slider } from "../../components/main/slider/slider";
import arrow from "../../svg/main/right-arrow.svg";
import first_card_png from "../../content/main/first.png";
import second_card_png from "../../content/main/second.png";
import { NavLink } from "react-router-dom";

const MainPage = () => {
  return (
    <main id="full_container" className="full_container">
      <TopHeader />
      <FirstLoginModal />

      <div className="main_container">
        <Slider />

        <div className="hero_cards">
          <div className="left_card">
            <div className="left_side_card">
              <h1>Пункты сбора</h1>
              <h3>
                Посмотри, где в твоем городе можно сдать вторсырье на
                переработку
              </h3>

              <div className="arrow_button">
                <NavLink to="/map" className="logo">
                  <a href="/"></a>
                </NavLink>
              </div>
            </div>
            <div className="right_side_card">
              <img src={first_card_png} alt="svg img" />
            </div>
          </div>

          <div className="right_card">
            <div className="left_side_card">
              <h1>ЭкоМаркет</h1>
              <h3>
                Используй заработанные экокоины для покупки товаровиз
                переработанных материалов{" "}
              </h3>

              <div className="arrow_button">
                <NavLink to="/market" className="logo">
                  <a href="/"></a>
                </NavLink>
              </div>
            </div>
            <div className="right_side_card">
              <img src={second_card_png} alt="svg img" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default observer(MainPage);
