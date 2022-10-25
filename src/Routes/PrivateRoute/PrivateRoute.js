import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {

  const location = useLocation();
  const { user, loading } = useContext(AuthContext)
  console.log(user);

  if (loading) {
    return (
      <div className='flex justify-center mt-10'>
        <progress className="progress progress-warning bg-red-700 w-56"></progress>
      </div>
    )
  }

  if (!user) {
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
  }
  return children;
};

export default PrivateRoute;


