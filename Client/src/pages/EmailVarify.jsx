import React, { useState } from 'react';
import { useContext } from 'react';
import AppContext from '../Context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
function EmailVarify() {

  axios.defaults.withCredentials = true;

  const navigate = useNavigate('')
  const { VITE_BACKEND_URL , isLoggedin , userData , getUserData , isUserVarified , setIsUserVarified } = useContext(AppContext)
  const inputRef = React.useRef([])
  const [otp, setOtp] = useState(new Array(6).fill(""));

  

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Move to the next input box
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  // const handleKeyDown = (e, index) => {
  //   if(e.key === 'Backspace' && e.key === '' && index > 0) {
  //     inputRef.current[index-1].focus();
  //   }
  // }

  const handleSubmit = async (event) => {
    try{
      event.preventDefault();
      const convertString = otp.toString()
      const OTP = convertString.split(',').join('')
      
      const {data} = await axios.post(VITE_BACKEND_URL + 'api/auth/varify-account' , { OTP });
      if(data.success) {
        toast.success(data.message)
        getUserData();
        navigate('/')
      }else{
        toast.error(data.message)
      }
    }catch(error) {
      toast.error(error.message)
    }


    setOtp(new Array(6).fill(""))
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-white rounded-md shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Verify Email OTP</h2>
        <p className="text-center text-gray-600 mb-6">
          Enter the 6-digit OTP sent to your email to verify your account.
        </p>

        <div className="flex justify-center gap-2 mb-6 ">
          {otp.map((data, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={data}
              onChange={(e) => handleChange(e.target, index)}
              // onKeyDown={(e) => handleKeyDown(e , index)}
              className=" text-black shadow-md shadow-gray-800 w-12 h-12 text-center text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ))}
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Verify Email
        </button>
      </div>
    </div>
  );
}

export default EmailVarify;