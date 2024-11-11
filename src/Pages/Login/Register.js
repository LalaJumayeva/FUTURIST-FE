import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
      setImageFile(file);
    }
  };

  const register = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const formData = new FormData();
    formData.append('username', username);
    formData.append('email', email);
    formData.append('password', password);
    if (imageFile) {
      formData.append('avatar', imageFile);
    }
    const res = await fetch(`${process.env.REACT_APP_BE_URL}/api/auth/register`, {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      navigate('/login')
    } else {
      alert('User already exists');
    }
  };

  return (
    <div className="bg-grey-lighter flex flex-col py-16">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2 font-Montserrat">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          <form onSubmit={register}>
            <div className="mb-4 text-center">
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile Preview"
                  className="w-24 h-24 rounded-full object-cover  mx-auto mb-2"
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-2 flex items-center justify-center text-gray-400">
                  <span>No Image</span>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-slate-800 file:text-white hover:file:bg-slate-950"
              />
            </div>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
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
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="confirm_password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-slate-800 text-white hover:bg-slate-950 focus:outline-none my-1"
            >
              Create Account
            </button>
          </form>
        </div>

        <div className="text-grey-dark">
          Already have an account?{' '}
          <Link to="/login" className="no-underline border-b border-blue text-custom-red" href="/login">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
