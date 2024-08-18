import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const validationSchema = Yup.object({
  email: Yup.string().required('Email is required').email('Invalid email format'),
  password: Yup.string().required('Password is required'),
});

function Login() {
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await axios.post('http://localhost:5000/login', {
        email: values.email,
        password: values.password,
      });

      localStorage.setItem('token', response.data.token); // Store the token
      setSubmitting(false);
      navigate('/dashboard');
    } catch (error) {
      setSubmitting(false);
      setErrors({ server: error.response?.data?.message || 'An error occurred' });
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 w-full">
      <div className="bg-white p-8 rounded-lg shadow-2xl mt-20 max-w-md w-full">
        <img className="w-full h-48 object-cover rounded-t-lg" src="https://wallpapercave.com/wp/wp4323556.jpg" alt="Logo" />
        <div className="text-center mt-4">
          <h2 className="text-2xl font-semibold text-black">Login to Your Account</h2>
        </div>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mt-6">
                <label htmlFor="email" className="block text-sm text-black">Enter Email</label>
                <Field
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Username"
                  className="border-2 border-gray-300 p-2 rounded w-full mt-1"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div className="mt-4">
                <label htmlFor="password" className="block text-sm text-black">Enter Password</label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="border-2 border-gray-300 p-2 rounded w-full mt-1"
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div className="mt-4 text-right">
                <a href="#" className="text-sm text-red-600">Forget Password?</a>
              </div>
              <div className="mt-4">
                <ErrorMessage name="server" component="div" className="text-red-500 text-sm text-center" />
              </div>
              <div className="flex items-center justify-between mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-red-600 hover:bg-red-500 text-white py-2 px-4 rounded"
                >
                  {isSubmitting ? 'Logging in...' : 'Login'}
                </button>
                <div className="text-sm text-black">
                  No account?
                  <Link to="/signup" className="ml-1 hover:underline text-blue-700">Signup</Link>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Login;
