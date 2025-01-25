import { Link, Outlet, useLocation } from 'react-router-dom';

const Layout = () => (
  <>
    <h1 className='text-center text-semibold text-2xl'>React Learn</h1>
    {useLocation().pathname !== '/' && (
      <Link to='/' className='text-blue-700 underline ml-4'>
        Homeに戻る
      </Link>
    )}
    <div className='m-4'>
      <Outlet />
    </div>
  </>
);

export default Layout;
