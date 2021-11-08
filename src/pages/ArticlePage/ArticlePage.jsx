import Table from '../../components/shared/Table';
import Breadcrumb from '../../components/shared/Breadcrumb';

import styles from './ArticalPage.module.css';

const ArticlePage = ({ article }) => {
  if (article === undefined || article.title === undefined) {
    return <div>bulunamadı</div>;
  }
  console.log(`article`, article);

  const { pubDate, categories, title, content } = article;

  const tableData = [
    {
      id: 1,
      title: 'Created',
      icon: 'far fa-clock',
      content: pubDate,
    },
    {
      id: 2,
      title: 'Tags',
      icon: 'fas fa-list-ul',
      content: categories,
    },
  ];

  const renderArticleInfo = () => (
    <div className='flex flex-col space-y-2 text-base'>
      <h1 className='text-4xl mb-4 font-bold'>{title}</h1>

      <Table tableData={tableData} />
    </div>
  );

  return (
    <div className={styles.articleDetailWrapper}>
      <Breadcrumb pageName={title} />

      {renderArticleInfo()}
      <article dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default ArticlePage;
