import React from 'react';

const Spinner = () => (
  <div className='bg-white absolute left-0 top-0 z-50 w-screen h-screen'>
    <i className='animate-spin absolute left-2/4 top-2/4   fas fa-circle-notch' />
  </div>
);

export default Spinner;
