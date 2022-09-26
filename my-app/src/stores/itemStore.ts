import { makeAutoObservable, observable } from "mobx";
import ItemModel from "../types/itemModel";
import nike from "../content/market_items/1.png";
import nike_1 from "../content/market_items/2.png";

export class ItemStore {
  items: Array<ItemModel> = [
    {
      id: 1,
      brand: "NIKE",
      img: nike,
      title: "Nike Air Max 2021",
      title_type: "Мужская обувь",
      cost: 1000,
      item_type: "Shoes",
      gender: "Man",
    },
    {
      id: 2,
      brand: "NIKE",
      img: nike_1,
      title: "Nike Air Max 2021",
      title_type: "Мужская обувь",
      cost: 1000,
      item_type: "Shoes",
      gender: "Man",
    },
    {
      id: 3,
      brand: "NIKE",
      img: nike_1,
      title: "Nike Air Max 2021",
      title_type: "Axes",
      cost: 1000,
      item_type: "Axes",
      gender: "Woman",
    },
    {
      id: 4,
      brand: "NIKE",
      img: nike_1,
      title: "Nike Air Max 2021",
      title_type: "Wear",
      cost: 1000,
      item_type: "Wear",
      gender: "Woman",
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }
}

export default new ItemStore();
