import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.init';
import { useQuery } from 'react-query';
import ScaleLoader from "react-spinners/ScaleLoader";

const override = {
    width: "100px",
    display: "block",
    margin: "30px auto",
};

const Orders = () => {
    const [user, loading, error] = useAuthState(auth)
    const { isLoading, refetch, data: orders } = useQuery(['myorders'], () =>
        fetch('https://afternoon-eyrie-39455.herokuapp.com/orders').then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <ScaleLoader style={override} color={"#2b6ae3"} />
    }
    console.log(orders);
    return (
        <div>
            <h1 className='text-center md:text-xl lg:text-2xl text-rose-500'>Your Orders Summary</h1>
            <div>
            </div>
        </div>
    );
};

export default Orders;