import Breadcrumb from '@components/shared/Breadcrumb/';
import Dropdown from '@components/shared/Dropdown/';
import Layout from '@components/Layout';
import { useState } from 'react';
import Modal from '@components/shared/Modal';

import { acceptedTags } from '../../constants/tagsConstants';
import dayjs from 'dayjs';
import useFetch from '../../Hooks/useFetch';
import Spinner from '../../components/shared/Spinner';
import useQuery from '../../Hooks/useQuery';
import ArticlePage from '../ArticlePage/ArticlePage';

const Articles = () => {
  const [open, setOpen] = useState(false);
  const [data, setdata] = useState(null);

  const query = useQuery();
  const articleId = query.get('id');

  const { data: remoteData, loading, error } = useFetch();
  const articles = remoteData?.items;

  const handleModalOpen = (e, article) => {
    e.stopPropagation();
    setdata(article);
    setOpen(true);
  };

  if (articleId) {
    const article = remoteData?.items?.find(
      ({ guid }) => guid.split('p/')[1] === articleId
    );

    return <ArticlePage article={article} />;
  }

  const renderRows = (articlesData) => {
    if (loading) return <Spinner />;
    if (error) return <p>{error}</p>;

    return articlesData.map((article) => {
      const { guid: id, title, pubDate, categories } = article;

      const tags = categories
        .map((category) => category.toLowerCase())
        .filter((tag) => acceptedTags.includes(tag));

      return (
        <div
          key={id}
          onClick={(e) => handleModalOpen(e, article)}
          className='space-y-1 space-x-5 flex flex-1 items-center cursor-pointer hover:bg-gray-100 py-1 px-2 rounded'
        >
          <div className='title font-semibold text-md underline'>{title}</div>
          <div className='flex-1 whitespace-nowrap overflow-x-hidden space-x-2 text-right tags text-sm'>
            {tags.map((tag) => (
              <span key={tag} className={`tag-${tag} tag`}>
                {tag}
              </span>
            ))}
          </div>
          <span className='date ml-2 text-sm'>
            {dayjs(pubDate).format('DD MMMM YYYY')}
          </span>
        </div>
      );
    });
  };

  return (
    <section className='container max-w-4xl mx-auto flex flex-col px-4 min-h-screen self-start'>
      <Breadcrumb pageName='Articles' />
      <h1 className='text-3xl font-semibold mb-6'>Articles</h1>

      <div className='tableWrapper flex flex-col'>
        <div className='table__head flex'>
          <div className='left'>
            <Dropdown title='All Entries'>
              <li>
                <span>All Entries</span>
              </li>
              <li>
                <span>Daily Entries</span>
              </li>
            </Dropdown>
          </div>

          <div className='right flex-1 justify-end'>
            <ul className='flex justify-end space-x-2'>
              <li>proporties</li>
              <li>proporties</li>
              <li>proporties</li>
            </ul>
          </div>
        </div>

        <hr className='my-1' />

        <div className='flex flex-col'>{renderRows(articles)}</div>
      </div>
      {open && <Modal setOpen={setOpen} data={data} />}
    </section>
  );
};

export default Layout(Articles);

// const articlesData = [
//   {
//     id: 1,
//     title: 'Frontend Developer İpuçları',
//     categories: ['CSS', 'Typography'],
//     pubDate: '2020-05-01',
//     thumbnail: '',
//     content: (
//       <Fragment>
//         <Highlight language='css'>
//           {`
//         body {
//           font-size: 16px; /*aşağıdaki ölçüler 16px'e göre alınmıştır */
//           letter-spacing: 0.02em; /* 0.02em = 16px / 800 */
//           line-height: 1.5;  /* 1.5 = 16 /10.6666 */
//           -webkit-font-smoothing: antialiased; /* default değeri = subpixel-antialiased */
//           word-spacing: 0.02em;/* Kelimeler arasındaki boşluk değerini belirler. */
//           word-break: break-all; /* kelimelerin içinde satırlar kırmaya belirtmek için kullanılır. */
//         }
//         p {
//           max-width: 50ch; /* Bu değişmesin çünkü bunun sayesinde bir satırda maksimum 60-70 karakter olur */
//         }
//         `}
//         </Highlight>
//         <Highlight innerHTML>
//           {`<blockquote>
//               <p class="text-sm">
//                 <span class="font-bold">Not:</span> Sans-serif (Tırnaksız) - Serif (Tırnaklı)
//                 Genel bir yargı olarak tırnaksız fontlar başlıklarda ve kısa yazılarda, tırnaklı fontlar uzun yazılarda kullanılır. Çünkü tırnaksız fontlar bir müddet sonra gözü yorar, tırnaklı fontlar ise okuyucuyu yönlendirir ve yormadan uzun okuma sağlanabilir. Bu nedenle gazetelerde ansiklopedilerde ve günümüzdeki blog sitelerinde tırnaklı fontlar kullanılır.
//               </p>
//             </blockquote>`}
//         </Highlight>
//       </Fragment>
//     ),
//   },
// ];
