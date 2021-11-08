import { useHistory } from 'react-router-dom';

const Breadcrumb = ({ pageName }) => {
  const history = useHistory();

  const goNextPage = () => history.goForward();
  const goPrevPage = () => history.goBack();
  return (
    <div className='space-x-4 self-start pt-1 mb-10 select-none'>
      <span className='space-x-2'>
        <i
          onClick={goPrevPage}
          className='fas fa-arrow-left cursor-pointer'
        ></i>
        <i
          onClick={goNextPage}
          className='fas fa-arrow-right cursor-pointer'
        ></i>
      </span>

      <span className='space-x-2'>
        <i className='fas fa-blog cursor-pointer'></i>
        <span>{pageName}</span>
      </span>
    </div>
  );
};

export default Breadcrumb;
