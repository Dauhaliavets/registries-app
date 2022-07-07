import React from 'react';
import './DocsSection.css';
import { dbDocs } from '../../../db/dbDocs';
import DocsTable from './DocsTable/DocsTable';

export default function DocsSection() {
  return (
    <section className='docs'>
      <div className='container'>
        <div className='docs__container'>
          <div className='docs__header'>
            <h2 className='docs__title title'>Документы</h2>
            <p className='docs__subtitle'>
              Всего документов: <span className='subtitle__count'>{dbDocs ? dbDocs.length : '0'}</span>
            </p>
          </div>
          <DocsTable data={dbDocs} />
        </div>
      </div>
    </section>
  );
}
