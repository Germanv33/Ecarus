import { observer } from "mobx-react-lite";
import React, { ChangeEventHandler, FC, FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import "./checkboxStyle.sass";

export interface ItemProps {
  name: string;
  id: string;
  onChanges: ChangeEventHandler<HTMLInputElement>;
  onCheck: boolean;
  label_title: string;
}

export const Checkbox: FunctionComponent<ItemProps> = ({
  name,
  id,
  onChanges,
  onCheck,
  label_title,
}) => {
  return (
    <>
      <div className="checkbox">
        <input
          type="checkbox"
          name={name}
          id={id}
          className="filter__checkbox"
          onChange={onChanges}
          checked={onCheck}
        />

        <label htmlFor={id}>{label_title}</label>
      </div>
    </>
  );
};
