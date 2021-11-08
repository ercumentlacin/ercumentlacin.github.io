import { Fragment } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

import Table from '../Table';
import { useHistory } from 'react-router-dom';

const Modal = ({ setOpen, data: article }) => {
  const modalEl = document.getElementById('app-modal');
  const history = useHistory();

  const { content, title, pubDate: date, categories: tags, guid } = article;

  const close = () => setOpen(false);

  const tableData = [
    {
      id: 1,
      title: 'Created',
      icon: 'far fa-clock',
      content: date,
    },
    {
      id: 2,
      title: 'Tags',
      icon: 'fas fa-list-ul',
      content: tags,
    },
  ];

  const renderArticleInfo = () => (
    <div className='flex flex-col space-y-2 text-base'>
      <h1 className='text-4xl mb-4 font-bold'>{title}</h1>

      <Table tableData={tableData} />
    </div>
  );

  const articleId = guid.split('p/')[1];

  const handleOpenPage = () => history.push(`/articles?id=${articleId}`);

  const renderView = () => (
    <Fragment>
      <div className={styles.modalShadow} onClick={close} />

      <div className={styles.modal}>
        <div className={styles.modalBanner}>
          <div className='flex space-x-2 items-center'>
            <i className='fas fa-expand-alt'></i>
            <span onClick={handleOpenPage}>Open as page</span>
          </div>

          <div className='flex flex-1 justify-end'>
            <span>Share</span>
          </div>
        </div>

        <div className={styles.modalContent}>
          {renderArticleInfo()}
          <article dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </Fragment>
  );

  return createPortal(renderView(), modalEl);
};

export default Modal;
