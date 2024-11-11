import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {

  };

  return (
    <div className="bg-grey-lighter flex flex-col py-16">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2 font-Montserrat">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Login</h1>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-slate-800 text-white hover:bg-slate-950 focus:outline-none my-1"
            >
              SIGN IN
            </button>
          </form>
        </div>

        <div className="text-grey-dark mt-6">
          Don't have an account?{' '}
          <Link to="/register" className="no-underline border-b border-blue text-custom-red" href="/signup">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
