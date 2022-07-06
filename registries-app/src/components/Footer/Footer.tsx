import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.svg';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__container'>
          <div className='footer__top'>
            <div className='about'>
              <div className='about__us'>
                <div className='about__us-logo'>
                  <img src={logo} alt='logo' />
                </div>
                <p className='about__us-name'>
                  Открытое акционерное общество «Реестр ПО» начало практическую деятельность с 1 марта 2014 г
                </p>
              </div>
              <div className='about__developer'>
                <h5 className='about__developer-title'>Разработчик</h5>
                <div className='about__developer-info'>
                  <p className='about__developer-name'>ОАО «Агентство сервисизации и реинжиниринга»</p>
                  <p className='about__developer-address'>Минск, улица Клары Цеткин, 24</p>
                </div>
              </div>
            </div>
            <div className='information'>
              <h4 className='information__title subtitle'>Информация</h4>
              <ul className='information__list'>
                <li className='list__item'>
                  <a className='list__item-link' href='#'>
                    Реестры
                  </a>
                </li>
                <li className='list__item'>
                  <a className='list__item-link' href='#'>
                    Новости
                  </a>
                </li>
                <li className='list__item'>
                  <a className='list__item-link' href='#'>
                    Документы
                  </a>
                </li>
                <li className='list__item'>
                  <a className='list__item-link' href='#'>
                    Вопросы
                  </a>
                </li>
              </ul>
            </div>
            <div className='support'>
              <h4 className='support__title subtitle'>Техническая поддержка</h4>
              <div className='support__body'>
                <p className='support__about'>
                  Ежедневно с 8.00 до 19.00, за исключением выходных (суббота, воскресенье) и праздничных дней.
                </p>
                <div className='divide-line'></div>
                <a href='tel:+375 25 111 22 33' className='support__tel tel'>
                  +375 25 111 22 33
                </a>
                <a href='tel:+375 29 222 44 55' className='support__tel tel'>
                  +375 29 222 44 55
                </a>
                <a href='mailto:ReestrPOsupport@mail.ru' className='support__email email'>
                  ReestrPOsupport@mail.ru
                </a>
              </div>
            </div>
            <div className='contancts'>
              <h4 className='contancts__title subtitle'>Контакты</h4>
              <div className='contacts__body'>
                <a href='tel:+375 25 111 22 33' className='contancts__tel tel'>
                  +375 25 111 22 33
                </a>
                <a href='tel:+375 29 222 44 55' className='contancts__tel tel'>
                  +375 29 222 44 55
                </a>
                <a href='mailto:ReestrPOsupport@mail.ru' className='contancts__email email'>
                  ReestrPOsupport@mail.ru
                </a>
                <p className='contacts__address'>220004 г. Минск, ул. Карла Маркса, 38</p>
                <a href='#' className='contacts__link'>
                  Связаться с поддержкой
                </a>
              </div>
            </div>
          </div>
          <div className='divide-line'></div>
          <div className='footer__bottom'>
            <p className='copyright'>© Copyright 2022 — ОАО «РеестрПО». Все права защищены.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
