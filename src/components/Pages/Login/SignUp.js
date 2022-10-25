import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const SignUp = () => {
  const [error, setError] = useState('');
  const [userinfo, setUserinfo] = useState({
    email: '',
    password: ''
  });
  const { createUser, verifyEmail, logOutHandle, handleGoogleLogIn, handleGithubLogin } = useContext(AuthContext);

  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const navigate = useNavigate();
  const navigateToLogin = useNavigate();



  const handleEmailChange = e => {
    setError('');
    setUserinfo({ ...userinfo, email: e.target.value });
  }
  const handlePasswordChange = e => {
    setError('');
    setUserinfo({ ...userinfo, password: e.target.value });
  }



  const handleCreateUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        form.reset();
        verifyEmail();
        logOutHandle();
        // toast('Email Verfication  Link has been sent')
        navigate('/login');
      })
      .catch(e => console.log(e))

  }



  const loginWithGoogle = () => {
    handleGoogleLogIn()
      .then(result => {
        navigate(from, { replace: true })
        // toast.succces('Welcome to the Website')
      })
      .catch(e => {
        console.log(e);
      })
  }
  const loginWithGithub = () => {
    handleGithubLogin()
      .then(result => {
        navigate(from, { replace: true })
        // toast.succces('Welcome to the Website')
      })
      .catch(e => {
        console.log(e.message)
      })
  }



  return (

    <div className='login-banner'>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className='flex justify-center'>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl form-background">
          <div className="card-body">
            <form onSubmit={handleCreateUser}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" className="input input-bordered" />
              </div>

              {/*  email*/}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  onChange={handleEmailChange}
                  value={userinfo.email}
                  type="email" placeholder="email"
                  name='email'
                  className="input input-bordered"
                  required
                />
              </div>

              {/*  password*/}

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  onChange={handlePasswordChange}
                  value={userinfo.password}
                  type="password" placeholder="password"
                  name='password'
                  className="input input-bordered"
                />
                <h2 className='pt-4'>Already Have an Account? <Link to='/login' className='underline text-blue-600'>Login..</Link></h2>
              </div>

              <div className="form-control mt-2">
                <button className="btn bg-red-800 hover:bg-slate-200 hover:text-red-800 font-bold border-0">Register</button>
              </div>
            </form>
            <hr className='mt-2' />
            <div className='text-center'>
              <h2>Login with</h2>
              <hr className='mt-2' />
              <div className="form-control mt-4">
                <button
                  onClick={loginWithGoogle}
                  className="btn bg-transparent border-white hover:bg-red-800 hover:border-0 text-white">continue with Google</button>
              </div>
              <div className="form-control mt-4">
                <button
                  onClick={loginWithGithub}
                  className="btn py-0 bg-transparent border-white hover:bg-red-800 hover:border-0 text-white">  Login with Github</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>




  );
};

export default SignUp;