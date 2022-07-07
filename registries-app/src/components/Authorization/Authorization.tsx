import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Authorization.css';
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import { dbUsers } from '../../db/dbUsers';
import { useDispatch } from 'react-redux';
import { setLogIn } from '../../redux-store/authSlice';
import { FormValues } from '../../types';

export default function Authorization() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    formState: { errors, isValid },
    setError,
    handleSubmit,
    reset,
  } = useForm<FormValues>({ mode: 'onChange' });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const userIndex = dbUsers.findIndex((user) => user.firstName === data.firstName);
    if (userIndex < 0) {
      setError('firstName', { type: 'custom', message: 'Пользователь не найден' });
    } else if (dbUsers[userIndex].password !== data.password) {
      setError('password', { type: 'custom', message: 'Неправильный пароль' });
    } else {
      dispatch(setLogIn(dbUsers[userIndex]));
      navigate('/');
      reset();
    }
  };
  const onError: SubmitErrorHandler<FormValues> = () => console.log(errors);

  return (
    <section className='authorization'>
      <div className='container'>
        <div className='authorization__container'>
          <NavLink to={'/'} className='authorization__link-to-back'>
            Главная
          </NavLink>
          <div className='authorization__header'>
            <h2 className='authorization__title title'>Авторизация</h2>
          </div>
          <form className='authorization__form' onSubmit={(e) => handleSubmit(onSubmit, onError)(e)}>
            <div className='form__field'>
              <p className='form__field-error'>{errors?.firstName?.message}</p>
              {isValid && !errors?.firstName && <span className='form__field-success'></span>}
              <input
                className={
                  !isValid && errors?.firstName
                    ? 'form__field-input input-error'
                    : (isValid && !errors?.firstName) || errors?.firstName
                    ? 'form__field-input input-success'
                    : 'form__field-input'
                }
                type='text'
                autoComplete='off'
                placeholder='Введите имя'
                {...register('firstName', {
                  required: 'Поле не может быть пустым',
                  pattern: {
                    value: /[a-zA-Zа-яА-Я]/,
                    message: 'Неверное имя',
                  },
                })}
              />
              <label className={errors?.firstName ? 'form__field-label label-error' : 'form__field-label'}>Имя</label>
            </div>
            <div className='form__field'>
              <p className='form__field-error'>{errors?.password?.message}</p>
              {isValid && !errors?.password && <span className='form__field-success'></span>}
              <input
                className={
                  !isValid && errors?.password
                    ? 'form__field-input input-error'
                    : (isValid && !errors?.password) || errors?.password
                    ? 'form__field-input input-success'
                    : 'form__field-input'
                }
                type='password'
                placeholder='Введите пароль'
                {...register('password', {
                  required: 'Поле не может быть пустым',
                })}
              />
              <label className={errors?.firstName ? 'form__field-label label-error' : 'form__field-label'}>
                Пароль
              </label>
            </div>
            <div className='form__field field-checkbox'>
              <input
                className='form__field-checkbox'
                type='checkbox'
                {...register('remember', {
                  required: false,
                })}
              />
              <label className='form__field-label'>Запомнить меня на этом компьютере</label>
            </div>
            <input className='form__button' type='submit' disabled={!isValid} value='Вход' />
            <a className='authorization__form-repair'>Забыли свой пароль?</a>
          </form>
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
