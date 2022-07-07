import React from 'react';
import { useSortableData } from '../../../../hooks/useSortableData';
import { Registry } from '../../../../types';
import './RegistryTable.css';

export default function RegistryTable(props: { data: Registry[] }) {
  const { data } = props;
  const { sortedItems, requestSort } = useSortableData(data);

  return (
    <table>
      <thead>
        <tr>
          <th>
            <button type='button' className='sort-button' onClick={() => requestSort('id')}>
              Регистрационный номер
            </button>
          </th>
          <th>
            <button type='button' className='sort-button' onClick={() => requestSort('name')}>
              Наименование программного обеспечения
            </button>
          </th>
          <th>Код класса</th>
          <th>Класс программного обеспечения</th>
          <th>Дата регистрации</th>
          <th>Адрес сайта</th>
        </tr>
      </thead>
      <tbody>
        {sortedItems.map((item) => (
          <tr key={item.id}>
            <td>{'#' + item.id}</td>
            <td>{item.name}</td>
            <td>{item.code}</td>
            <td>{item.classSW}</td>
            <td>{item.dataReg}</td>
            <td>
              <a href='#'>{item.link}</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
