import React from 'react';
import './Header.css';
import logo from '../../assets/logo.svg';
import userPhotoDefault from '../../assets/icon-user-default.png';
import userPhoto from '../../assets/icon-user.png';
import { useSelector } from 'react-redux';
import { authSelector } from '../../redux-store/authSlice';
import { NavLink } from 'react-router-dom';
import { User } from '../../types';

export default function Header() {
  const { isAuth, currentUser } = useSelector(authSelector);

  const createUserName = (user: User | null) => {
    if (user) {
      return user.lastName ? `${user.firstName} ${user.lastName}` : `${user.firstName}`;
    } else {
      return 'Вход в аккаунт';
    }
  };

  return (
    <header className='header'>
      <div className='container'>
        <div className='header__container'>
          <div className='header__logo'>
            <img src={logo} alt='logo' />
          </div>
          <div className='header__search'>
            <input className='input__search' type='text' name='' id='searh' placeholder='Поиск' />
          </div>
          <div className='header__menu'>
            <div className='menu__calendar item-menu'>
              <svg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
                <path d='M22.6667 5.33333V4C22.6667 3.26667 22.0667 2.66667 21.3333 2.66667C20.6 2.66667 20 3.26667 20 4V5.33333H12V4C12 3.26667 11.4 2.66667 10.6667 2.66667C9.93333 2.66667 9.33333 3.26667 9.33333 4V5.33333C6.38667 5.33333 4 7.72 4 10.6667V22.6667C4 25.6133 6.38667 28 9.33333 28H22.6667C25.6133 28 28 25.6133 28 22.6667V10.6667C28 7.72 25.6133 5.33333 22.6667 5.33333ZM25.3333 22.6667C25.3333 24.1333 24.1333 25.3333 22.6667 25.3333H9.33333C7.86667 25.3333 6.66667 24.1333 6.66667 22.6667V10.6667C6.66667 9.2 7.86667 8 9.33333 8V9.33333C9.33333 10.0667 9.93333 10.6667 10.6667 10.6667C11.4 10.6667 12 10.0667 12 9.33333V8H20V9.33333C20 10.0667 20.6 10.6667 21.3333 10.6667C22.0667 10.6667 22.6667 10.0667 22.6667 9.33333V8C24.1333 8 25.3333 9.2 25.3333 10.6667V22.6667Z' />
                <path d='M12.9467 15.0667C12.4533 14.5733 11.5467 14.5733 11.0533 15.0667C10.9333 15.1867 10.84 15.3333 10.7733 15.4933C10.7067 15.6667 10.6667 15.84 10.6667 16.0133C10.6667 16.1866 10.7067 16.36 10.7733 16.52C10.84 16.68 10.9333 16.8267 11.0533 16.9467C11.3067 17.2 11.6533 17.3466 12 17.3466C12.1733 17.3466 12.3467 17.3067 12.5067 17.24C12.6667 17.1733 12.8133 17.08 12.9467 16.9467C13.0667 16.8267 13.16 16.68 13.2267 16.52C13.3067 16.36 13.3333 16.1866 13.3333 16.0133C13.3333 15.84 13.3067 15.6667 13.2267 15.4933C13.16 15.3333 13.0667 15.1867 12.9467 15.0667Z' />
                <path d='M12.9467 19.0667C12.88 19 12.8133 18.9467 12.7467 18.9067C12.6667 18.8533 12.5867 18.8133 12.5067 18.7733C12.4267 18.7467 12.3467 18.72 12.2667 18.7067C12.0933 18.6667 11.9067 18.6667 11.7467 18.7067C11.6533 18.7067 11.5733 18.7467 11.4933 18.7733C11.4133 18.8133 11.3333 18.8533 11.2667 18.9067C11.1867 18.9467 11.12 19 11.0533 19.0667C10.9333 19.1867 10.84 19.3333 10.7733 19.4933C10.7067 19.6667 10.6667 19.8267 10.6667 20.0133C10.6667 20.3733 10.8133 20.7067 11.0533 20.9467C11.3067 21.2 11.6533 21.3466 12 21.3466C12.3467 21.3466 12.6933 21.2 12.9467 20.9467C13.2 20.7067 13.3333 20.3733 13.3333 20.0133C13.3333 19.8267 13.2933 19.6667 13.2267 19.4933C13.16 19.3333 13.0667 19.1867 12.9467 19.0667Z' />
                <path d='M16.9467 15.0667C16.88 15 16.8133 14.9466 16.7467 14.8933C16.6667 14.8533 16.5867 14.8133 16.5067 14.7733C16.4267 14.7467 16.3467 14.72 16.2667 14.7067C16 14.6533 15.7333 14.68 15.4933 14.7733C15.3333 14.84 15.1867 14.9467 15.0533 15.0667C14.9333 15.1867 14.84 15.3333 14.7733 15.4933C14.7067 15.6667 14.6667 15.84 14.6667 16.0133C14.6667 16.1866 14.7067 16.36 14.7733 16.52C14.84 16.68 14.9333 16.8267 15.0533 16.9467C15.1867 17.08 15.3333 17.1733 15.4933 17.24C15.6533 17.3067 15.8267 17.3466 16 17.3466C16.1733 17.3466 16.3467 17.3067 16.5067 17.24C16.6667 17.1733 16.8133 17.08 16.9467 16.9467C17.0667 16.8267 17.16 16.68 17.2267 16.52C17.3067 16.36 17.3333 16.1866 17.3333 16.0133C17.3333 15.84 17.3067 15.6667 17.2267 15.4933C17.16 15.3333 17.0667 15.1867 16.9467 15.0667Z' />
                <path d='M16.9467 19.0666C16.8267 18.9466 16.68 18.84 16.5067 18.7733C16.1867 18.64 15.8133 18.64 15.4933 18.7733C15.3333 18.84 15.1867 18.9466 15.0533 19.0666C14.9333 19.1866 14.84 19.3333 14.7733 19.4933C14.7067 19.6666 14.6667 19.8266 14.6667 20.0133C14.6667 20.1866 14.7067 20.36 14.7733 20.52C14.84 20.68 14.9333 20.8266 15.0533 20.9466C15.1867 21.08 15.3333 21.1733 15.4933 21.24C15.6533 21.3066 15.8267 21.3466 16 21.3466C16.36 21.3466 16.6933 21.2 16.9467 20.9466C17.0667 20.8266 17.16 20.68 17.24 20.52C17.3067 20.36 17.3333 20.1866 17.3333 20.0133C17.3333 19.84 17.3067 19.6666 17.2267 19.4933C17.16 19.3333 17.0667 19.1866 16.9467 19.0666Z' />
                <path d='M20.9467 15.0666C20.8267 14.9466 20.68 14.84 20.5067 14.7733C20.0133 14.5733 19.4267 14.6933 19.0533 15.0666C18.9333 15.1866 18.84 15.3333 18.7733 15.4933C18.7067 15.6666 18.6667 15.84 18.6667 16.0133C18.6667 16.1866 18.7067 16.36 18.7733 16.52C18.84 16.68 18.9333 16.8266 19.0533 16.9466C19.1867 17.08 19.3333 17.1733 19.4933 17.24C19.6533 17.3066 19.8267 17.3466 20 17.3466C20.1733 17.3466 20.3467 17.3066 20.5067 17.24C20.6667 17.1733 20.8133 17.08 20.9467 16.9466C21.0667 16.8266 21.16 16.68 21.2267 16.52C21.3067 16.36 21.3333 16.1866 21.3333 16.0133C21.3333 15.84 21.3067 15.6666 21.2267 15.4933C21.16 15.3333 21.0667 15.1866 20.9467 15.0666Z' />
                <path d='M20.9467 19.0667C20.88 19 20.8133 18.9467 20.7467 18.9067C20.6667 18.8533 20.5867 18.8133 20.5067 18.7733C20.4267 18.7467 20.3467 18.72 20.2667 18.7067C20.0933 18.6667 19.9067 18.6667 19.7467 18.7067C19.6533 18.7067 19.5733 18.7467 19.4933 18.7733C19.4133 18.8133 19.3333 18.8533 19.2667 18.9067C19.1867 18.9467 19.12 19 19.0533 19.0667C18.9333 19.1867 18.84 19.3333 18.7733 19.4933C18.7067 19.6667 18.6667 19.8267 18.6667 20.0133C18.6667 20.3733 18.8133 20.7067 19.0533 20.9467C19.3067 21.2 19.6533 21.3466 20 21.3466C20.3467 21.3466 20.6933 21.2 20.9467 20.9467C21.2 20.7067 21.3333 20.3733 21.3333 20.0133C21.3333 19.8267 21.2933 19.6667 21.2267 19.4933C21.16 19.3333 21.0667 19.1867 20.9467 19.0667Z' />
              </svg>
            </div>
            <div className='menu__notifications item-menu active'>
              <svg width='33' height='32' viewBox='0 0 33 32' xmlns='http://www.w3.org/2000/svg'>
                <path d='M27.1267 19.8133L26.3667 14.2666C25.74 9.63994 22.1667 6.05328 17.82 5.43994V4.01335C17.82 3.28001 17.22 2.68001 16.4867 2.68001C15.7534 2.68001 15.1534 3.28001 15.1534 4.01335V5.43994C10.8067 6.06661 7.26001 9.63994 6.62001 14.2666L5.86002 19.8133C5.66002 21.2533 6.08668 22.6933 7.03334 23.76C7.92668 24.7733 9.19336 25.3599 10.5267 25.3599H11.9267C12.22 27.5866 14.1134 29.32 16.42 29.32C18.7267 29.32 20.62 27.5866 20.9133 25.3599H22.42C23.7534 25.3599 25.02 24.7733 25.9133 23.76C26.86 22.68 27.2867 21.24 27.0867 19.8133H27.1267ZM16.4467 26.6667C15.6067 26.6667 14.9133 26.12 14.66 25.3733H18.2334C17.98 26.12 17.2867 26.6667 16.4467 26.6667ZM23.94 22.0133C23.5534 22.4533 23.02 22.7066 22.4467 22.7066H10.54C9.96668 22.7066 9.44669 22.4667 9.04669 22.0133C8.62002 21.52 8.42001 20.84 8.51334 20.1733L9.27335 14.6266C9.78002 10.8533 12.8867 8 16.5 8C20.1133 8 23.2067 10.8533 23.7267 14.6266L24.4867 20.1733C24.58 20.84 24.38 21.52 23.9533 22.0133H23.94Z' />
              </svg>
              <div className='notifications__count'>
                <span className='count'>4</span>
              </div>
            </div>
            <div className='menu__separator'></div>
            <NavLink to={isAuth ? 'profile' : 'auth'} className='menu__profile-link'>
              <div className='menu__profile'>
                <div className='profile__photo'>
                  <img
                    className='profile__photo-photo'
                    src={currentUser?.photo ? userPhoto : userPhotoDefault}
                    alt='photo'
                  />
                </div>
                <span className='profile__user-name'>{createUserName(currentUser)}</span>
                <div className='profile__icon'>
                  <svg width='15' height='8' viewBox='0 0 15 8' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M0.861636 2.19101L6.57213 7.62117C6.69588 7.74121 6.8431 7.83649 7.00531 7.9015C7.16752 7.96652 7.3415 8 7.51722 8C7.69295 8 7.86693 7.96652 8.02914 7.9015C8.19135 7.83649 8.33857 7.74121 8.46232 7.62117L14.1063 2.19101C14.231 2.07195 14.33 1.93031 14.3976 1.77424C14.4652 1.61818 14.5 1.45078 14.5 1.28171C14.5 1.11265 14.4652 0.945251 14.3976 0.789186C14.33 0.633121 14.231 0.491475 14.1063 0.372417C13.8569 0.133886 13.5195 -8.57196e-08 13.1678 -1.16463e-07C12.8162 -1.47206e-07 12.4788 0.133886 12.2294 0.372417L7.51722 4.90609L2.80507 0.372416C2.55713 0.135815 2.22249 0.00242841 1.87329 0.00101361C1.6981 3.89351e-05 1.52444 0.0323442 1.36226 0.0960777C1.20008 0.159811 1.05257 0.253719 0.928191 0.372416C0.798973 0.48719 0.694674 0.625461 0.62132 0.779242C0.547967 0.933023 0.507013 1.09926 0.500825 1.26836C0.494635 1.43746 0.523336 1.60606 0.585266 1.76442C0.647195 1.92279 0.741128 2.06777 0.861636 2.19101Z' />
                  </svg>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}
