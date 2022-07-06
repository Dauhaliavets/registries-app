import React from 'react';
import './Registry.css';
import RegistryTable from './RegistryTable/RegistryTable';

interface Registry {
  id: number;
  name: string;
  code: string;
  classSW: string;
  dataReg: string;
  link: string;
}

export default function Registry() {
  const dataRegistry: Registry[] = [
    {
      id: 1,
      name: 'Система управления базами данных «Ред База Данных»',
      code: '02.09',
      classSW: 'Системы управления базами данных',
      dataReg: '29.01.2016',
      link: 'Ссылка',
    },
    {
      id: 2,
      name: '1С:Школа. Информатика, 11 класс',
      code: '04.11',
      classSW: 'Системы управления процессами организации',
      dataReg: '29.01.2016',
      link: 'Ссылка',
    },
    {
      id: 3,
      name: '1С:Школа. Информатика, 5-6 класс',
      code: '04.11',
      classSW: 'Информационные системы для решения специфических отраслевых задач',
      dataReg: '29.01.2016',
      link: 'Ссылка',
    },
    {
      id: 4,
      name: '1С:Комплексная автоматизация 8',
      code: '04.11',
      classSW: 'Системы управления процессами организации',
      dataReg: '20.02.2016',
      link: 'Ссылка',
    },
    {
      id: 5,
      name: "Электронный периодический справочник 'Система ГАРАНТ'",
      code: '04.15',
      classSW: 'Прикладное программное обеспечение общего назначения',
      dataReg: '20.02.2016',
      link: 'Ссылка',
    },
  ];

  return (
    <section className='registry'>
      <div className='container'>
        <div className='registry__container'>
          <div className='registry__header'>
            <h2 className='registry__title title'>Реестры</h2>
            <div className='registry__header-filters'>
              <div className='header__filters-filter item-filters'>
                <svg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M2.65332 8.63995C2.63999 7.39995 3.10668 6.22658 3.97335 5.34658C4.82668 4.47991 5.95999 4.01324 7.15999 4.01324H24.9733C26.1067 4.01324 27.16 4.43997 27.96 5.23997C28.8267 6.10664 29.32 7.35997 29.3067 8.6533C29.3067 9.9733 28.72 11.2266 27.7333 12.0932L20.8667 18.2C20.6 18.44 20.3067 19.1332 20.3067 19.7466V24.04C20.3067 24.9334 19.8267 25.7732 19.0533 26.2399L18.8534 26.3467L15.36 27.7199C14.9867 27.9199 14.5733 28.0267 14.16 28.0267C13.7333 28.0267 13.3067 27.92 12.9067 27.6933C12.0933 27.24 11.6 26.3733 11.6 25.4399V19.4933C11.6 19.1866 11.2933 18.5733 10.8133 18.1466L4.13334 11.9733C3.20001 11.1333 2.65335 9.91995 2.64001 8.63995H2.65332ZM17.68 23.9332L17.64 19.7332C17.64 18.5999 18.0933 17.0667 19.1066 16.1867L25.9733 10.08C26.4 9.70664 26.64 9.18661 26.64 8.62661C26.64 8.03994 26.4267 7.47992 26.0667 7.10659C25.8533 6.89325 25.5067 6.6533 24.9733 6.6533H7.17334C6.68001 6.66663 6.21333 6.86661 5.86666 7.21328C5.50666 7.58661 5.30665 8.06657 5.31999 8.58657V8.62661C5.31999 9.14661 5.55999 9.65331 5.94666 9.99998L12.6267 16.1733C13.3867 16.8667 14.2933 18.1466 14.2933 19.4933V25.4399' />
                </svg>
              </div>
              <div className='header__filters-other item-filters'>
                <svg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M16 13.8666C14.8267 13.8666 13.8667 14.8266 13.8667 16C13.8667 17.1733 14.8267 18.1333 16 18.1333C17.1734 18.1333 18.1334 17.1733 18.1334 16C18.1334 14.8266 17.1734 13.8666 16 13.8666Z' />
                  <path d='M16 22.4C14.8267 22.4 13.8667 23.36 13.8667 24.5333C13.8667 25.7066 14.8267 26.6666 16 26.6666C17.1734 26.6666 18.1334 25.7066 18.1334 24.5333C18.1334 23.36 17.1734 22.4 16 22.4Z' />
                  <path d='M16 9.59996C17.1734 9.59996 18.1334 8.63995 18.1334 7.46661C18.1334 6.29328 17.1734 5.33331 16 5.33331C14.8267 5.33331 13.8667 6.29328 13.8667 7.46661C13.8667 8.63995 14.8267 9.59996 16 9.59996Z' />
                </svg>
              </div>
            </div>
          </div>
          <RegistryTable data={dataRegistry} />
        </div>
      </div>
    </section>
  );
}
