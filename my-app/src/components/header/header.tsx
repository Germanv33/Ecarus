import "./header.sass";
import logo from "../../svg/header/logo.svg";
import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "./sidebar/sidebar";

import login_svg from "../../svg/header/login.svg";
import loc_svg from "../../svg/header/loc.svg";
import burger_svg from "../../svg/header/phone_menu.svg";
import money_svg from "../../svg/header/money.svg";
import ava_svg from "../../svg/header/ava.svg";

import store from "../../stores/mainStore";
import { observer } from "mobx-react";

export const TopHeader: FC = () => {
  const userStore = store.userStore;

  const openModal = () => {
    userStore.loginModalIsOpen = true;
  };

  return (
    <>
      <Sidebar pageWrapId={"full_header_container"} outerContainerId={"root"} />
      <section id="full_header_container" className="full_header_container">
        <div className="container">
          <div className="header">
            <NavLink to="/" className="logo">
              <img src={logo} className="header_logo_svg"></img>
            </NavLink>

            <div className="header__menu">
              <div className="menu">
                <NavLink to="/" className="menu_link first">
                  <span className="menu_item">Главная</span>
                </NavLink>

                <NavLink to="/map" className="menu_link">
                  <span className="menu_item">Пункты сбора</span>
                </NavLink>

                <NavLink to="/market" className="menu_link">
                  <span className="menu_item">ЭкоМаркет</span>
                </NavLink>

                <NavLink to="/service" className="menu_link">
                  <span className="menu_item">О сервисе</span>
                </NavLink>
              </div>

              {true ? (
                <div className="right_side">
                  <button className="header_button city">
                    <img src={loc_svg} className="header_svg"></img>
                    <span className="header_span">Казань</span>
                  </button>

                  <button onClick={openModal} className="header_button">
                    <img src={login_svg} className="header_svg"></img>
                    <span className="header_span">Войти</span>
                  </button>

                  <button
                    onClick={userStore.openSideBar}
                    className="header_button header_phone_button"
                  >
                    <img
                      src={burger_svg}
                      className="header_svg burger_svg"
                    ></img>
                  </button>
                </div>
              ) : (
                <div className="right_side">
                  <div className="header_button city">
                    <a className="">
                      <img src={loc_svg} className="header_svg"></img>
                      <span className="header_span">Казань</span>
                    </a>
                  </div>

                  <div className="header_money">
                    <button className="header_button">
                      <img src={money_svg} className="header_svg"></img>
                      <span className="money_span">1000</span>
                    </button>
                  </div>

                  <div className="header_login">
                    <button className="header_button">
                      <img src={ava_svg} className="header_svg"></img>
                      <span className="header_span">Alexey</span>
                    </button>
                  </div>

                  <div className="header_phone_button">
                    <button
                      onClick={userStore.openSideBar}
                      className="header_button phone_menu"
                    >
                      <img
                        src={burger_svg}
                        className="header_svg burger_svg"
                      ></img>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default observer(TopHeader);
