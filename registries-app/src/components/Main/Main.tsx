import React from 'react';
import './Main.css';
import image from '../../assets/office-work.png';

export default function Main() {
  return (
    <main className='main'>
      <div className='container'>
        <div className='main__container'>
          <div className='main__info'>
            <div className='main__description'>
              <h1 className='description__header'>РЕЕСТР ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ</h1>
              <p className='description__body'>
                Единый реестр программ для электронных вычислительных машин и баз данных
              </p>
              <p className='description__body'>
                Включено ПО в реестр: <span>13 438</span><br/>
                Правообладателей: <span>4 272</span>
              </p>
            </div>
            <form className='description__form'>
              <input className='description__form-input' type='text' name='' id='' placeholder='Искать реестр...' />
              <button className='description__form-button' type='submit'>
                Искать
              </button>
            </form>
          </div>
          <div className='main__image'>
            <img src={image} alt='3D-office-work' />
          </div>
        </div>
      </div>
    </main>
  );
}
