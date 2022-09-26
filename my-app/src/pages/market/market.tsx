import React, { useContext, useEffect, useState } from "react";
import "./marketStyle.sass";
import TopHeader from "../../components/header/header";
import FirstLoginModal from "../../components/login/LoginModals";
import { Item } from "../../components/market_components/item/item";
import { observer } from "mobx-react-lite";
import store from "../../stores/mainStore";
import nike_1 from "../../content/market_items/1.png";
import nike_2 from "../../content/market_items/2.png";
import ItemModel from "../../types/itemModel";
import { Checkbox } from "../../components/market_components/checkbox/checkbox";

const MarketPage = () => {
  const itemStore = store.itemStore;

  const [currentTypes, setCurrentTypes] = useState<string[]>([]);
  const [currentBrands, setCurrentBrands] = useState<string[]>([]);
  const [currentGender, setCurrentGender] = useState<string[]>([]);

  // Filters
  const [isMan, setMan] = useState(false);
  const [isWoman, setWoman] = useState(false);
  const [isTypeAll, setTypeAll] = useState(false);
  const [isTypeWear, setTypeWear] = useState(false);
  const [isTypeShoes, setTypeShoes] = useState(false);
  const [isTypeAxes, setTypeAxes] = useState(false);
  const [isBrandAll, setBrandAll] = useState(false);
  //
  const reloadFilters = () => {
    setMan(false);
    setWoman(false);
    setTypeAll(false);
    setTypeWear(false);
    setTypeShoes(false);
    setTypeAxes(false);
    setBrandAll(false);
    setCurrentTypes([]);
    setCurrentBrands([]);
    setCurrentGender([]);
  };

  //   Gender change
  const manChange = () => {
    setMan(!isMan);
    if (isMan) {
      setCurrentGender((currentGender) =>
        currentGender.filter((item) => item !== "Man")
      );
    } else {
      setCurrentGender((currentGender) => [...currentGender, "Man"]);
    }
  };

  const womanChange = () => {
    setWoman(!isWoman);
    if (isWoman) {
      setCurrentGender((currentTypes) =>
        currentGender.filter((item) => item !== "Woman")
      );
    } else {
      setCurrentGender((currentGender) => [...currentGender, "Woman"]);
    }
  };
  //

  //   Type change
  const chooseAllTypeChange = () => {
    setTypeAll(!isTypeAll);
    if (!isTypeAll) {
      setTypeWear(true);
      setTypeShoes(true);
      setTypeAxes(true);
    }
    setCurrentTypes((currentTypes) => ["Shoes", "Wear", "Axes"]);
  };
  const typeWearChange = () => {
    setTypeWear(!isTypeWear);
    if (isTypeWear) {
      setCurrentTypes((currentTypes) =>
        currentTypes.filter((item) => item !== "Wear")
      );
    } else {
      setCurrentTypes((currentTypes) => [...currentTypes, "Wear"]);
    }
  };
  const typeShoesChange = () => {
    setTypeShoes(!isTypeShoes);
    if (isTypeShoes) {
      setCurrentTypes((currentTypes) =>
        currentTypes.filter((item) => item !== "Shoes")
      );
    } else {
      setCurrentTypes((currentTypes) => [...currentTypes, "Shoes"]);
    }
  };
  const typeAxesChange = () => {
    setTypeAxes(!isTypeAxes);
    if (isTypeAxes) {
      setCurrentTypes((currentTypes) =>
        currentTypes.filter((item) => item !== "Axes")
      );
    } else {
      setCurrentTypes((currentTypes) => [...currentTypes, "Axes"]);
    }
  };
  //

  //   Brand change
  const chooseAllBrandChange = () => {
    setBrandAll(!isBrandAll);
  };
  //

  useEffect(() => {
    console.log("current type wear is " + isTypeWear);

    console.log("types:");
    console.log(currentTypes);

    console.log("brands:");
    console.log(currentBrands);

    console.log("genders");
    console.log(currentGender);
  }, [isTypeWear, currentTypes, currentGender]);

  const filter_check = (item: ItemModel) => {
    // //   Nothing
    // if (
    //   currentGender.length == 0 &&
    //   currentBrands.length == 0 &&
    //   currentTypes.length == 0
    // ) {
    //   return true;
    //   //
    // } else {
    //   // only types
    //   if (
    //     currentBrands.length == 0 &&
    //     currentTypes.length !== 0 &&
    //     currentGender.length == 0
    //   ) {
    //     return currentTypes.includes(item.item_type);
    //   }
    //   // only gender
    //   if (
    //     currentBrands.length == 0 &&
    //     currentTypes.length == 0 &&
    //     currentGender.length !== 0
    //   ) {
    //     return currentGender.includes(item.gender);
    //   }
    //   // only brands
    //   if (
    //     currentBrands.length !== 0 &&
    //     currentTypes.length == 0 &&
    //     currentGender.length == 0
    //   ) {
    //     return currentBrands.includes(item.gender);
    //   }
    //   // types + gender
    //   if (
    //     currentBrands.length == 0 &&
    //     currentTypes.length !== 0 &&
    //     currentGender.length !== 0
    //   ) {
    //     return currentTypes.includes(item.item_type) && currentGender.includes(item.gender)
    //   }

    var gender_status = false;
    var type_status = false;
    var brand_status = false;
    if (currentBrands.length == 0) {
      brand_status = true;
    }
    if (currentGender.length == 0) {
      gender_status = true;
    }
    if (currentTypes.length == 0) {
      type_status = true;
    }

    return (
      (currentBrands.includes(item.brand) || brand_status) &&
      (currentTypes.includes(item.item_type) || type_status) &&
      (currentGender.includes(item.gender) || gender_status)
    );
    // }
  };

  return (
    <main className="full_container">
      <TopHeader />
      <FirstLoginModal />
      <div className="main_container">
        <div className="title__block">
          <span className="title">ЭкоМаркет</span>
          <div className="title__buttons">
            <button className="title__filters">По популярности</button>
            <button className="title__filters">По цене</button>
            <button className="title__filters">По новизне</button>
          </div>
        </div>
        <button className="mobile_filter_button">Фильтры</button>
        <div className="shop">
          <div className="filter">
            <div className="filter__window">
              <div className="gender">
                <span className="filter__span">Пол</span>

                <Checkbox
                  label_title="Мужской"
                  name="Мужской"
                  id="man"
                  onChanges={manChange}
                  onCheck={isMan}
                />

                <div className="checkbox">
                  <input
                    type="checkbox"
                    name="Женский"
                    id="woman"
                    className="filter__checkbox"
                    onChange={womanChange}
                    checked={isWoman}
                  />
                  <label htmlFor="woman">Женский</label>
                </div>
              </div>

              <div className="type__filter">
                <span className="filter__span">Тип товара</span>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    name="Выбрать все"
                    id="choose_all_types"
                    className="filter__checkbox"
                    onChange={chooseAllTypeChange}
                    checked={isTypeAll}
                  />
                  <label htmlFor="choose_all_types">Выбрать все</label>
                </div>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    name="Одежда"
                    id="wear"
                    className="filter__checkbox"
                    onChange={typeWearChange}
                    checked={isTypeWear}
                  />
                  <label htmlFor="wear">Одежда</label>
                </div>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    name="Обувь"
                    id="shoes"
                    className="filter__checkbox"
                    onChange={typeShoesChange}
                    checked={isTypeShoes}
                  />
                  <label htmlFor="shoes">Обувь</label>
                </div>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    name="Аксессуары"
                    id="axces"
                    className="filter__checkbox"
                    onChange={typeAxesChange}
                    checked={isTypeAxes}
                  />
                  <label htmlFor="axces">Аксессуары</label>
                </div>
              </div>

              <div className="brand__filter">
                <span className="filter__span">Брэнд</span>

                <Checkbox
                  label_title="Выбрать все"
                  name="Выбрать все"
                  id="choose_all_brands"
                  onChanges={chooseAllBrandChange}
                  onCheck={isBrandAll}
                />
              </div>
            </div>
            <button onClick={reloadFilters} className="filter_reload">
              Сбросить фильтры
            </button>
          </div>

          <div className="shop__list">
            {itemStore.items
              .filter((item) => filter_check(item))
              .map((item) => (
                <Item
                  key={item.id}
                  brand={item.brand}
                  img={item.img}
                  title={item.title}
                  cost={item.cost}
                  title_type={item.title_type}
                />
              ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default observer(MarketPage);
