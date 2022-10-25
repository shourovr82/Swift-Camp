import React from 'react';
import { FaWindowClose } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MenuItem = ({ showMenu, menuActive }) => {
  return (
    <div>
      <div>

      </div>
      <ul className={menuActive ? 'flex-col flex items-center  justify-center left-1/4 uppercase bg-black/40 backdrop-blur-sm gap-4 fixed  inset-0 md:hidden' : 'hidden'}>
        <FaWindowClose onClick={showMenu} />
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>Courses</Link></li>
        <li><Link to='/'>Blog</Link></li>
        <li><Link to='/'>FAQ</Link></li>
        <li><Link to='/'>Login</Link></li>
      </ul>

    </div>
  );
};

export default MenuItem;