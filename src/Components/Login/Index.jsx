import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Login() {
  const [inputValue, setInputValue] = useState('');
  const [inputPasValue, setInputPasValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputPasChange = (event) => {
    setInputPasValue(event.target.value);
  };

  const handleLoginClick = async () => {
    try {
      const response = await axios.post('http://localhost:5000/login', {
        email: inputValue,
        password: inputPasValue,
      });
      console.log(response.data); // Handle the response (e.g., store the token)
    } catch (error) {
      console.error(error.response.data.message); // Handle the error
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 w-full">
      <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md w-full">
        <img className="w-full h-48 object-cover rounded-t-lg" src="https://wallpapercave.com/wp/wp4323556.jpg" alt="Logo" />
        <div className="text-center mt-4">
          <h2 className="text-2xl font-semibold text-black">Login to Your Account</h2>
        </div>
        <div className="mt-6">
          <label className="block text-sm text-black">Enter Email</label>
          <input
            type="text"
            className="border-2 border-gray-300 p-2 rounded w-full mt-1"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Username"
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm text-black">Enter Password</label>
          <input
            type="password"
            className="border-2 border-gray-300 p-2 rounded w-full mt-1"
            value={inputPasValue}
            onChange={handleInputPasChange}
            placeholder="Password"
          />
        </div>
        <div className="mt-4 text-right">
          <a href="#" className="text-sm text-red-600">Forget Password?</a>
        </div>
        <div className="flex items-center justify-between mt-6">
          <button className="bg-red-600 hover:bg-red-500 text-white py-2 px-4 rounded" onClick={handleLoginClick}>
            Login
          </button>
          <div className="text-sm text-black">
            No account?
            <Link to="/signup" className="ml-1 hover:underline text-blue-700">Signup</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
