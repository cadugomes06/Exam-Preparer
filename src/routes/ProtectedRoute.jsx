import React, { useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

export const ProtectedRoute = () => {
   
   const { user } = useContext(UserContext)
   const navigate = useNavigate()
   const uidUser = window.localStorage.getItem("UserAccount")

   useEffect(() => {
    if (!user && !uidUser) {
      navigate('/login');
    } else {
      return;
    }
  }, [navigate, user, uidUser]);

   return (
       uidUser ? <Outlet /> : null
    )
}

export default ProtectedRoute