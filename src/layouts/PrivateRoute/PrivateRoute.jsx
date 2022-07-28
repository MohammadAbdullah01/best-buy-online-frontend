import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase/firebase.init';

const PrivateRoute = ({ children }) => {
    let location = useLocation();
    const [user, loading, error] = useAuthState(auth);
    if (!user) {
        return <Navigate to="/signin" state={{ from: location }} replace />;
    }
    return children;
};

export default PrivateRoute;