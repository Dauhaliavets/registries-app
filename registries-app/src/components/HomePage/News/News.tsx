import React from 'react';
import './News.css';
import NewsItem from './NewsItem/NewsItem';

export default function News() {
  const dataNews = [
    {
      id: 1,
      title: 'Технические работы 30.05.2022',
      date: '30.05.2022',
      text: 'В связи с проведением технических работ 30.05.2022 с 15:00 могут наблюдаться пер...',
      imageSrc: 'news-engin-works',
    },
    {
      id: 2,
      title: 'Изменение справочника',
      date: '28.05.2022',
      text: 'Обращаем внимание, что с 28.05.2022 внесены изменения в справочник "Дей...',
      imageSrc: 'news-attention',
    },
    {
      id: 3,
      title: 'Технические работы 26.05.2022',
      date: '26.05.2022',
      text: 'В связи с проведением технических работ 26.05.2022 с 21:00 могут наблюдаться пер...',
      imageSrc: 'news-engin-works',
    },
    {
      id: 4,
      title: 'Лицензирование в Беларуси',
      date: '25.05.2022',
      text: 'Лицензирование затрагивает отдельные виды деятельности в Республике Беларус...',
      imageSrc: 'news-license',
    },
    {
      id: 5,
      title: 'Тестирование системы новостей Ед...',
      date: '20.05.2022',
      text: 'Тестирование системы новостей ЕРЛ.',
      imageSrc: 'news-test',
    },
    {
      id: 6,
      title: 'Обновление версии реестра ПО',
      date: '18.05.2022',
      text: 'В новой версии доступны новые функции, которые упрощают использование сервис...',
      imageSrc: 'news-upgrade',
    },
  ];

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
