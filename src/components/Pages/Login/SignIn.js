import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import './SignIn.css'


const SignIn = () => {
  const [error, setError] = useState('');
  const [userinfo, setUserinfo] = useState({
    email: '',
    password: ''
  });
  const { handleGoogleLogIn, loginUser, logOutHandle, handleGithubLogin } = useContext(AuthContext);

  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const navigate = useNavigate();



  const handleEmailChange = e => {
    setError('');
    setUserinfo({ ...userinfo, email: e.target.value });
  }
  const handlePasswordChange = e => {
    setError('');
    setUserinfo({ ...userinfo, password: e.target.value });
  }

  const handleSubmitLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then(result => {
        const user = result.user;
        form.reset();
        if (user.emailVerified) {
          // toast.success('Welcome to the Website');
          navigate(from, { replace: true })
        } else {
          setError('Your email is not Verified')
          logOutHandle();
          // toast.error('Your email is not verified. Please verify your email address.')
        }
      })
      .catch(e => {
        setError(e.message);
      })
  }




  const loginWithGoogle = () => {
    handleGoogleLogIn()
      .then(result => {
        // toast.success('success')
        navigate(from, { replace: true })
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
      <div className='flex justify-center mx-3 '>

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  ">
          <div className="card-body">
            <form onSubmit={handleSubmitLogin} >
              <div className="form-control">
                {
                  error && <p>{error}</p>
                }
                <label className="label">
                  <span className="label-text">Email</span>
                </label>

                <input
                  onChange={handleEmailChange}
                  value={userinfo.email}
                  type="text" name='email' placeholder="email"

                  className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  onChange={handlePasswordChange}
                  value={userinfo.password}
                  type="password" name='password' placeholder="password" className="input input-bordered" />
                <h2 className='pt-4'>New to Rexrox ? <Link to='/register' className='underline text-blue-600'>Create an Account..</Link></h2>
              </div>
              <label className="label">
                <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
              <div className="form-control mt-2">
                <button type='submit' className="btn bg-red-800 border-0 hover:bg-slate-200 hover:text-red-800 font-bold">Login</button>
              </div>
              <hr className='mt-2' />
            </form>

            <div className='text-center'>
              <h2>Login with</h2>
              <hr className='mt-2' />
              <div className="form-control mt-4">

                <button
                  onClick={loginWithGoogle}
                  className="btn bg-transparent border-white hover:bg-red-800 hover:border-0 text-white">Login with Google</button>
              </div>
              <div className="form-control mt-4">

                <button
                  onClick={loginWithGithub}
                  className="btn bg-transparent border-white hover:bg-red-800 hover:border-0 text-white">  Login with Github</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  );
};

export default SignIn;