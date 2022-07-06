import React from 'react';
import './NewsItem.css';
import imageWorks from '../../../assets/news/news-engin-works.png';
import imageAttent from '../../../assets/news/news-attention.png';
import imageLicens from '../../../assets/news/news-license.png';
import imageTest from '../../../assets/news/news-test.png';
import imageUpgr from '../../../assets/news/news-upgrade.png';

interface ItemNews {
  id: number;
  title: string;
  date: string;
  text: string;
  imageSrc: string;
}

export default function NewsItem(props: { item: ItemNews }) {
  const { item } = props;

  let src = '';
  switch (item.id) {
    case 1:
    case 3:
      src = imageWorks;
      break;
    case 2:
      src = imageAttent;
      break;
    case 4:
      src = imageLicens;
      break;
    case 5:
      src = imageTest;
      break;
    case 6:
      src = imageUpgr;
      break;
    default:
      break;
  }

  return (
    <div className='news__item'>
      <div className='news__item-image'>
        <img className='item__image' src={src} alt={item.imageSrc} />
      </div>
      <div className='news__item-body'>
        <h4 className='item__body-title'>{item.title}</h4>
        <p className='item__body-date'>{item.date}</p>
        <p className='item__body-content'>{item.text}</p>
      </div>
    </div>
  );
}
