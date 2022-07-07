import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { authSelector, setChangedUser } from '../../redux-store/authSlice';
import { FormValues } from '../../types';
import './Profile.css';
import userPhotoDefault from '../../assets/icon-user-default.png';
import userPhoto from '../../assets/icon-user.png';

export default function Profile() {
  const { currentUser } = useSelector(authSelector);
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm<FormValues>({ mode: 'onSubmit', defaultValues: { ...currentUser } });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    dispatch(setChangedUser(data));
  };

  return (
    <section className='profile'>
      <div className='container'>
        <div className='profile__container'>
          <div className='profile__header'>
            <h2 className='profile__title title'>Личный кабинет</h2>
          </div>
          <div className='profile__body'>
            <nav className='body__nav'>
              <ul className='nav__list'>
                <li className='nav__list-item nav__list-item item-active item-data'>Мои данные</li>
                <li className='nav__list-item item-notif'>Уведомления</li>
                <li className='nav__list-item item-registry'>Реестры</li>
                <li className='nav__list-item item-meta'>Метаданные</li>
                <li className='nav__list-item item-secur'>Безопасность</li>
                <li className='nav__list-item item-download'>Мои загрузки</li>
                <li className='nav__list-item item-exit'>Выход</li>
              </ul>
            </nav>
            <div className='body__content'>
              <div className='content__greeting'>
                <img className='greeting__photo' src={currentUser?.lastName ? userPhoto : userPhotoDefault} />
                <h4 className='greeting__text'>Здравствуй, {currentUser?.firstName}!</h4>
              </div>
              <div className='divide-line'></div>
              <form className='form__user-data' onSubmit={(e) => handleSubmit(onSubmit)(e)}>
                <div className='form__user-main'>
                  <h4 className='form__subtitle'>Основные данные</h4>
                  <div className='form__user-field'>
                    <input className='form__user-input' type='text' autoComplete='off' {...register('firstName')} />
                    <label className='form__user-label'>Имя</label>
                  </div>
                  <div className='form__user-field'>
                    <input className='form__user-input' type='text' autoComplete='off' {...register('lastName')} />
                    <label className='form__user-label'>Фамилия</label>
                  </div>
                  <div className='form__user-field'>
                    <input className='form__user-input' type='text' autoComplete='off' {...register('patronymic')} />
                    <label className='form__user-label'>Отчество</label>
                  </div>
                  <div className='form__user-field'>
                    <input className='form__user-input' type='text' autoComplete='off' {...register('country')} />
                    <label className='form__user-label'>Страна</label>
                  </div>
                  <div className='form__user-field'>
                    <input className='form__user-input' type='text' autoComplete='off' {...register('city')} />
                    <label className='form__user-label'>Город</label>
                  </div>
                  <div className='form__user-field'>
                    <input className='form__user-input' type='text' autoComplete='off' {...register('phone')} />
                    <label className='form__user-label'>Мобильный телефон</label>
                  </div>
                </div>
                <div className='divide-line'></div>
                <div className='form__user-addition'>
                  <h4 className='form__subtitle'>Пароль</h4>
                  <div className='form__user-field'>
                    <input className='form__user-input' type='password' autoComplete='off' {...register('password')} />
                    <label className='form__user-label'>Новый пароль</label>
                  </div>
                  <div className='form__user-field'>
                    <input
                      className='form__user-input'
                      type='password'
                      autoComplete='off'
                      {...register('repeatPassword')}
                    />
                    <label className='form__user-label'>Подтверждение пароля</label>
                  </div>
                </div>
                <div className='divide-line'></div>
                <input className='form__button form__user-button' type='submit' value='Сохранить' />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className='divide-line'></div>
    </section>
  );
}
