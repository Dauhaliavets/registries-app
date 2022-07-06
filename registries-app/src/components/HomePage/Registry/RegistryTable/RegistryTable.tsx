import React from 'react';
import './RegistryTable.css';

interface Registry {
  id: number;
  name: string;
  code: string;
  classSW: string;
  dataReg: string;
  link: string;
}

export default function RegistryTable(props: { data: Registry[] }) {
  const { data } = props;

  return (
    <table>
      <thead>
        <tr>
          <th>Регистрационный номер</th>
          <th>Наименование программного обеспечения</th>
          <th>Код класса</th>
          <th>Класс программного обеспечения</th>
          <th>Дата регистрации</th>
          <th>Адрес сайта</th>
        </tr>
      </thead>
      <tbody>      
        {data.map(item => (
          <tr key={item.id}>
            <td>{'#' + item.id}</td>
            <td>{item.name}</td>
            <td>{item.code}</td>
            <td>{item.classSW}</td>
            <td>{item.dataReg}</td>
            <td><a href='#'>{item.link}</a></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
