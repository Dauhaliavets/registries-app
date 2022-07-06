import React from 'react';
import { NavLink } from 'react-router-dom';
import './Authorization.css';

export default function Authorization() {
  return (
    <section className='authorization'>
      <div className='container'>
        <div className='authorization__container'>
          <NavLink to={"/"} className='authorization__link-to-back'>{'<- Главная'}</NavLink>
          <div className='authorization__header'>
            <h2 className='authorization__title title'>Авторизация</h2>
          </div>
          <div className='authorization__form'>
            <a className='authorization__form-repair'>Забыли свой пароль?</a>
          </div>
          <div className='authorization__additional'>
            <a className='additional__link'>Авторизация с использованием ЕС ИФЮЛ</a>
            <a className='additional__link'>Авторизация с использованием МСИ</a>
          </div>
          <div className='authorization__new-account'>
            <span className='question'>У вас нет аккаунта?</span>
            <a href='#' className='link-to-new-account'>
              Нажмите сюда чтобы создать
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
