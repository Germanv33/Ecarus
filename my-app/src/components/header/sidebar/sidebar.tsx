import React, { FC, useEffect, useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { string } from "yup";
import "./sidebar.sass";
import store from "../../../stores/mainStore";
import { observer } from "mobx-react";
import loc_svg from "../../../svg/header/loc.svg";
import { NavLink } from "react-router-dom";

interface SidebarProps {
  pageWrapId: string | undefined;
  outerContainerId: string;
}

export const Sidebar: FC<SidebarProps> = (pageWrapId, outerContainerId) => {
  const userStore = store.userStore;

  return (
    <Menu
      right
      customBurgerIcon={false}
      onOpen={userStore.openSideBar}
      isOpen={userStore.sidebarIsOpen}
      onClose={userStore.closeSideBar}
      //   pageWrapId={String(pageWrapId)}
      //   outerContainerId={String(outerContainerId)}
    >
      <NavLink onClick={userStore.closeSideBar} className="menu-item" to="/">
        Главная
      </NavLink>

      <NavLink onClick={userStore.closeSideBar} className="menu-item" to="/map">
        Пункты сбора
      </NavLink>

      <NavLink
        onClick={userStore.closeSideBar}
        className="menu-item"
        to="/market"
      >
        ЭкоМаркет
      </NavLink>

      <NavLink onClick={userStore.closeSideBar} className="menu-item" to="/">
        О сервисе
      </NavLink>

      <div className="city_button">
        <a className="">
          <img src={loc_svg} className="header_svg"></img>
          <span className="header_span">Казань</span>
        </a>
      </div>
    </Menu>
  );
};

export default observer(Sidebar);
