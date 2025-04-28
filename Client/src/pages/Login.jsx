import React from 'react';

function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-white rounded-md shadow-lg p-8 w-full max-w-md">
        <h2 className="text-3xl  text-center text-gray-800 mb-0 poppins-bold">Create Account</h2>
        <p className='poppins-light text-[13px] text-center text-violet-800 mb-8'>Create your Account</p>
        <form>
          {/* Username Field */}
          <div className="mb-8">
            <div className="flex items-center border px-3 py-3 shadow-md shadow-gray-500 rounded-full">
              <span className="material-icons text-gray-500 mr-2">person</span>
              <input
                type="text"
                placeholder="Username"
                className="w-full outline-none text-gray-700"
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="mb-8">
            <div className="flex items-center border px-3 py-3 shadow-md shadow-gray-500 rounded-full">
              <span className="material-icons text-gray-500 mr-2">email</span>
              <input
                type="email"
                placeholder="Email"
                className="w-full outline-none text-gray-700"
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
              />
            </div>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Sign Up
          </button>
        </form>

        {/* Already have an account */}
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{' '}
          <a href="/login" className="text-blue-500 hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;