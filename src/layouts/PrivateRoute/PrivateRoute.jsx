import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase/firebase.init';
import ScaleLoader from "react-spinners/ScaleLoader";

const override = {
    width: "100px",
    display: "block",
    margin: "30px auto",
};

const PrivateRoute = ({ children }) => {
    let location = useLocation();
    const [user, loading, error] = useAuthState(auth);
    if (loading) {
        return <ScaleLoader style={override} color={"#2b6ae3"} />
    }
    if (!user) {
        return <Navigate to="/signin" state={{ from: location }} replace />;
    }
    return children;
};

export default PrivateRoute;