import React from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

function Signup() {
  const handleSignup = async (values) => {
    try {
      const response = await axios.post('http://localhost:5000/signup', {
        email: values.email,
        password: values.password,
      });
      console.log(response.data); // Handle the response (e.g., store the token)
    } catch (error) {
      console.error(error.response.data.message); // Handle the error
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    }),
    onSubmit: handleSignup,
  });

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 w-full">
      <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md mt-20 w-full">
        <img className="w-full h-48 object-cover rounded-t-lg" src="https://wallpapercave.com/wp/wp4323556.jpg" alt="Logo" />
        <div className="text-center mt-4">
          <h2 className="text-2xl font-semibold text-black">Create Your Account</h2>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="mt-6">
            <label className="block text-sm text-black">Enter Email</label>
            <input
              type="email"
              className={`border-2 p-2 rounded w-full mt-1 ${
                formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              {...formik.getFieldProps('email')}
              placeholder="Email"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="mt-4">
            <label className="block text-sm text-black">Enter Password</label>
            <input
              type="password"
              className={`border-2 p-2 rounded w-full mt-1 ${
                formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-gray-300'
              }`}
              {...formik.getFieldProps('password')}
              placeholder="Password"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>
            ) : null}
          </div>
          <div className="mt-4">
            <label className="block text-sm text-black">Confirm Password</label>
            <input
              type="password"
              className={`border-2 p-2 rounded w-full mt-1 ${
                formik.touched.confirmPassword && formik.errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
              }`}
              {...formik.getFieldProps('confirmPassword')}
              placeholder="Confirm Password"
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div className="text-red-500 text-sm mt-1">{formik.errors.confirmPassword}</div>
            ) : null}
          </div>
          <div className="flex items-center justify-between mt-6">
            <button type="submit" className="bg-red-600 hover:bg-red-500 text-white py-2 px-4 rounded">
              Signup
            </button>
            <div className="text-sm text-black">
              Already have an account?
              <Link to="/login" className="ml-1 hover:underline text-blue-700">Login</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
