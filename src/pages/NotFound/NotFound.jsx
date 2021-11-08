import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className='relative flex items-center justify-center h-screen w-screen'>
    <div className='absolute left-4 top-2/4 z-10 text-white space-y-3'>
      <h1 className='text-6xl font-bold '>404</h1>
      <h2 className='text-3xl'>Sayfa Bulunamadı</h2>
      <p>
        Lütfen anasayfa'ya dönüp tekrar deneyiniz.
        <br />
        veya
        <br />
        Bir hata olduğunu düşünüyorsanız bana bildirin.
      </p>

      <div className='space-x-4 flex'>
        <Link
          to='/'
          className='px-6 py-2 rounded-full flex items-center justify-center border-white border hover:bg-gray-100 hover:text-black hover:border-black transition duration-500'
        >
          ANASAYFA
        </Link>

        <a
          href='mailto:ercument.lacin@gmail.com'
          className='px-6 py-2 rounded-full flex items-center justify-center border-white border hover:bg-gray-100 hover:text-black hover:border-black transition duration-500'
        >
          HATA BİLDİR
        </a>
      </div>
    </div>

    <video
      className=' absolute left-0 top-0 object-cover w-screen h-screen'
      playsInline
      muted
      autoPlay
    >
      <source src='404.mp4' type='video/mp4' />
    </video>
  </div>
);

export default NotFound;
