import React, { FunctionComponent } from "react";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import store from "../../stores/mainStore";
import Modal from "./modal";
import "./LoginModalStyle.sass";
import * as Yup from "yup";
import { Formik, Form, useField } from "formik";

export const FirstLoginModal = () => {
  const [isOpen, setOpen] = useState(false);
  const userStore = store.userStore;
  //  which one modal are open
  const [isRegisterOpen, setRegisterOpen] = useState(false);
  const [isSmsOpen, setSmsOpen] = useState(false);

  const closeModal = () => {
    setOpen(false);
  };

  const openRegister = () => {
    setRegisterOpen(true);
  };

  //   const openSms = () => {
  //     setSmsOpen(true);
  //   };

  useEffect(() => {
    if (userStore.loginModalIsOpen == true) {
      setOpen(true);
      userStore.loginModalIsOpen = false;
    }
    if (isRegisterOpen == true && isOpen == false) {
      setRegisterOpen(false);
    }
  }, [userStore.loginModalIsOpen, isOpen, isRegisterOpen]);

  const Reg_validate = Yup.object({
    company_name: Yup.string()
      .min(3, "company_name must be at least 3 charaters")
      .required("company_name is required"),

    phone: Yup.string()
      .min(9, "Phone number must be at least 9 charaters")
      .required("Phone number is required"),

    password: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required"),

    // firstName: Yup.string()
    //   .max(15, "Must be 15 characters or less")
    //   .required("Required"),
    // lastName: Yup.string()
    //   .max(20, "Must be 20 characters or less")
    //   .required("Required"),
    // email: Yup.string().email("Email is invalid").required("Email is required"),

    // confirmPassword: Yup.string()
    //   .oneOf([Yup.ref("password"), null], "Password must match")
    //   .required("Confirm password is required"),
  });

  const login_body = (
    <div className="input__body">
      <input placeholder="Телефон" type="text" className="phone__input" />
      <input placeholder="Пароль" type="password" className="password__input" />
    </div>
  );

  const login_footer = (
    <div className="buttons_footer">
      <button className="button__signin">
        <span className="button__text__signin">Войти</span>
      </button>
      <div className="nets">
        <a href="" className="green_a">
          Войти с помощью смс
        </a>
        <button onClick={openRegister} className="green_a">
          Регистрация
        </button>
      </div>
      <button className="button__partner">
        <span className="button__text__partner">Вход для партнёров</span>
      </button>
    </div>
  );

  const register_body = (
    <Formik
      initialValues={{
        company_name: "",
        phone: "",
        password: "",
      }}
      validationSchema={Reg_validate}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          handleBlur,
          handleChange,
          isSubmitting,
          handleSubmit,
        } = props;
        return (
          <div className="input__body">
            <input
              placeholder="Наименование организации"
              type="text"
              name="company_name"
              className={`phone__input ${
                touched.company_name && errors.company_name && "is-invalid"
              }`}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.company_name}
            />
            {touched.company_name && errors.company_name && (
              <p className={"error"}> {errors.company_name}</p>
            )}

            <input
              placeholder="Телефон"
              type="text"
              name="phone"
              className={`phone__input ${
                touched.phone && errors.phone && "is-invalid"
              }`}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone}
            />
            {touched.phone && errors.phone && (
              <p className={"error"}> {errors.phone}</p>
            )}

            <input
              name="password"
              placeholder="Пароль"
              type="password"
              className={`password__input ${
                touched.password && errors.password && "is-invalid"
              }`}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {touched.password && errors.password && (
              <p className={"error"}> {errors.password}</p>
            )}
          </div>
        );
      }}
    </Formik>
  );

  const register_footer = (
    <div className="buttons_footer">
      <button type="submit" className="button__signin">
        <span className="button__text__signin">Получить код</span>
      </button>
      <div className="nets">
        <button
          onClick={() => {
            setRegisterOpen(false);
          }}
          className="green_a"
        >
          Я уже зарегистировался(-ась)
        </button>
      </div>
      <button className="button__partner">
        <span className="button__text__partner">Вход для партнёров</span>
      </button>
    </div>
  );
  if (isRegisterOpen) {
    return (
      <Modal
        window_style="RegistermodalWindow "
        title="Вход"
        isOpen={isOpen}
        onClose={closeModal}
        body={register_body}
        footer={register_footer}
      />
    );
  } else {
    return (
      <Modal
        window_style="modalWindow"
        title="Вход"
        isOpen={isOpen}
        onClose={closeModal}
        body={login_body}
        footer={login_footer}
      />
    );
  }
};

export default observer(FirstLoginModal);
