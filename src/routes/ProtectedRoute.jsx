import React, { useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

export const ProtectedRoute = () => {
   
   const { user } = useContext(UserContext)
   const navigate = useNavigate()

   useEffect(() => {
    if (!user) {
      navigate('/login');
    } 
  }, [navigate, user]);

   return (
       user ? <Outlet /> : null
    )
}

export default ProtectedRoute