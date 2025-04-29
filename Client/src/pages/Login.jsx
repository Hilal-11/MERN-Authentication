import React from 'react';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
function Login() {
  const [state , setState] = useState('Sign Up')

  const [username , setUsername] = useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      username,
      email,
      password
    }
    console.log(user)

  }

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-white rounded-md shadow-lg p-8 w-full max-w-md">
        <h2 className="text-3xl  text-center text-gray-800 mb-0 poppins-bold">{state === 'Sign Up' ? (<span>Create Account</span>) : (<span>Login</span>)}</h2>
        <p className='poppins-light text-[13px] text-center text-violet-800 mb-8'>Create your Account</p>
        <form onSubmit={ handleSubmit }>
          {/* Username Field */}
          { state === 'Sign Up' && (
            <div className="mb-8">
              <div className="flex items-center border px-3 py-3 shadow-md shadow-gray-500 rounded-full">
                <span className="material-icons text-gray-500 mr-2">person</span>
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full outline-none text-gray-700"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                />
              </div>
            </div>
          )}

          {/* Email Field */}
          <div className="mb-8">
            <div className="flex items-center border px-3 py-3 shadow-md shadow-gray-500 rounded-full">
              <span className="material-icons text-gray-500 mr-2">email</span>
              <input
                type="email"
                placeholder="Email"
                className="w-full outline-none text-gray-700"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-8">
            <div className="flex items-center border px-3 py-3 shadow-md shadow-gray-500 rounded-full">
              <span className="material-icons text-gray-500 mr-2">lock</span>
              <input
                type="password"
                placeholder="Password"
                className="w-full outline-none text-gray-700"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            { state }
          </button>
        </form>

        { state === 'Sign Up' ? (
           <div>
             {/* Already have an account */}
              <p className="text-center text-gray-600 mt-4">
                Already have an account?{' '}
                <span className="text-blue-500 hover:underline cursor-pointer"
                onClick={() => setState('Login')}>
                  Login here
                </span>
              </p>
            </div>
        ) : (
          <div>
            <p className="text-center text-gray-600 mt-4">
                Don't have an account?{' '}
              <span className="text-blue-500 hover:underline cursor-pointer"
                  onClick={() => setState('Sign Up') }>
                Sign Up
              </span>
            </p>
          </div>
        )}
       


        




      </div>
    </div>
  );
}

export default Login;