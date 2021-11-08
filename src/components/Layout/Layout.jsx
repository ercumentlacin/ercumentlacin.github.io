import { Fragment } from 'react';
import SideBar from '../SideBar';

const Layout = (Component) => (props) =>
  (
    <Fragment>
      <SideBar />
      <main className='flex-1 flex flex-col justify-center'>
        <Component {...props} />
      </main>
    </Fragment>
  );

export default Layout;
