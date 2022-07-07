import React from 'react';
import './DocsTable.css'
import { ItemDoc } from '../../../../types';

export default function DocsTable(props: { data: ItemDoc[] }) {
  const { data } = props;

  return (
    <table className='table__docs'>
      <thead>
        <tr>
          <th>Категория</th>
          <th>Наименование</th>
          <th>Дата</th>
          <th>Номер</th>
          <th>Содержание</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item: ItemDoc) => (
          <tr key={item.id}>
            <td>{item.category}</td>
            <td>{item.name}</td>
            <td>{item.date}</td>
            <td>{item.id}</td>
            <td>
              <a href='#'>{item.content}</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
