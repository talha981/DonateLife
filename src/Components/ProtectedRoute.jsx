import React from "react";
import { Navigate } from "react-router-dom";


const ProtectedRoute =({elemet})=>{
    const isAuthentcated = !!localStorage.getItem('token');
     isAuthentcated ? element : <Navigate to='/login' />
}

export default ProtectedRoute;