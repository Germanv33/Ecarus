import Map from "../../../components/Map/Map";
import styles from "./CollectionPoints.module.sass";
import cardInfo from "../../../svg/map/mapCard.svg";
import MapCard from "../../../components/Map/MapCard/MapCard";
import { useEffect, useState } from "react";
import filter_logo from "../../../svg/map/filter_logo.svg";
// import CustomSheet from "../../components/Map/BigMapCard/";
import BigMapCard from "../../../components/Map/BigMapCard/BigMapCard";

const CollectionPoints = () => {
  const [open, setOpen] = useState(false);
  const [openCards, setOpenCards] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  const card = (
    <div className={styles.card} onClick={() => setOpenCards(!openCards)}>
      <MapCard
        picture={cardInfo}
        address="ул.Кремлёвская, 88"
        description="Пластик, стекло, бумага, металл, старая одежда, батареи, аккумуляторы..."
      />
    </div>
  );

  const cardsInfo = (
    <div className={styles.card_ph}>
      <MapCard
        picture={cardInfo}
        address="ул.Кремлёвская, 88"
        description="Стекло, бумага, металл, старая одежда, батареи"
      />
    </div>
  );

  return (
    <div>
      <div className={styles.main_content}>
        <input placeholder="Поиск" className={styles.input} />
        <div className={styles.select_wrapper}>
          <select className={styles.select_shop}>
            <option value="" disabled selected>
              Выбрано 3 магазина
            </option>
            <option>Выбрать все</option>
            <option>H&M</option>
            <option>P&B</option>
            <option>Adidas</option>
            <option>Nike</option>
            <option>Reebok</option>
          </select>
          <select className={styles.select_material}>
            <option value="" disabled selected>
              Материалы
            </option>
            <option>Пункт 1</option>
          </select>
          <button
            className={styles.button_open_filters}
            onClick={() => setOpen(!open)}
          >
            <img src={filter_logo} />
          </button>
          {/* <CustomSheet open={open} setOpen={setOpen} /> */}
        </div>
        <button
          className={styles.button_open_cards}
          onClick={() => setMenuActive(!menuActive)}
        >
          Показать 12 пунктов сбора
        </button>
        <div className={styles.cards}>
          {openCards === true ? (
            <BigMapCard setOpenCards={setOpenCards} openCards={openCards} />
          ) : (
            <>
              {card}
              {card}
              {card}
              {card}
            </>
          )}
        </div>
        {menuActive ? (
          <div className={styles.cards_phone}>
            {cardsInfo}
            {cardsInfo}
            {cardsInfo}
            {cardsInfo}
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <Map></Map>
    </div>
  );
};

export default CollectionPoints;
