import React from 'react';
import './News.css';
import NewsItem from './NewsItem/NewsItem';
import { dataNews } from '../../../db/dbNews';

export default function News() {

  return (
    <section className='news'>
      <div className='container'>
        <div className='news__container'>
          <div className='news__header'>
            <h2 className='news__title title'>Новости реестра</h2>
          </div>
          <div className='news__items'>
            {dataNews.map((item, ind) => (
              <NewsItem item={item} key={ind} />
            ))}
          </div>
          <a href='#' className='news__btn-show'>
            Показать все
          </a>
        </div>
      </div>
    </section>
  );
}
