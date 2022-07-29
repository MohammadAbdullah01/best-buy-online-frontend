import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.init';
import { useQuery } from 'react-query';
import ScaleLoader from "react-spinners/ScaleLoader";
import { Button, Table } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from "react-icons/fi";
import toast from 'react-hot-toast';
import warning from '../../assets/warning.svg'

const override = {
    width: "100px",
    display: "block",
    margin: "30px auto",
};

const Orders = () => {
    const [user, loading, error] = useAuthState(auth)
    const { isLoading, refetch, data: orders } = useQuery(['myorders'], () =>
        fetch(`https://afternoon-eyrie-39455.herokuapp.com/orders/${user?.email}`).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <ScaleLoader style={override} color={"#2b6ae3"} />
    }
    const handleDelete = (id) => {
        const proceed = window.confirm("are you sure you want to delete?")
        if (proceed) {
            fetch(`https://afternoon-eyrie-39455.herokuapp.com/orders/${id}`, {
                method: "delete"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success("Order Deleted")
                        refetch()
                    }
                })
        }
    }
    return (
        <div>
            <h1 className='text-center text-xl md:text-2xl lg:text-3xl text-rose-500 py-5'>{user?.displayName}'s Order Summary</h1>
            {(orders.length < 1)
                ?
                <>
                    <div>
                        <img src={warning} className='w-28 md:w-56 mx-auto my-5' alt="" />
                        <p className='text-center text-xl md:text-2xl lg:text-3xl mb-5'>Please Order Something to show...</p>
                    </div>
                </>
                :
                <div className='mb-8'>

                    <Table hoverable={true}>
                        <Table.Head style={{ backgroundColor: "#EFA8BA" }}>
                            <Table.HeadCell>
                                <span className='text-xl'>Date</span>
                            </Table.HeadCell>
                            <Table.HeadCell>
                                <span className='text-xl'>Quantity</span>
                            </Table.HeadCell>
                            <Table.HeadCell>
                                <span className='text-xl'>Price</span>
                            </Table.HeadCell>
                            <Table.HeadCell>
                                <span className='text-xl'>Details</span>
                            </Table.HeadCell>
                            <Table.HeadCell>
                                <span className='text-xl'>Actions</span>
                            </Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            {orders.map(order => <>
                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={order._id}>
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        <span className='md:text-lg lg:text-xl'>{order.date}</span>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <span className='md:text-lg lg:text-xl'>{order.totalItems}</span>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <span className='md:text-lg lg:text-xl'>${order.totalPrice}</span>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <span className='md:text-lg lg:text-xl'><Link to='/order-details'>
                                            <Button color='light' size='sm' className='flex items-center'>DETAILS<FiArrowUpRight /></Button>
                                        </Link></span>
                                    </Table.Cell>
                                    <Table.Cell className='flex gap-x-1'>
                                        <Link to='/payment'>
                                            <Button color="success" size="sm" >
                                                PAY
                                            </Button>
                                        </Link>
                                        <Button onClick={() => handleDelete(order._id)} color="failure" size="sm" >
                                            DELETE
                                        </Button>
                                    </Table.Cell>
                                </Table.Row>
                            </>)}
                        </Table.Body>
                    </Table>
                </div>
            }
        </div>
    );
};

export default Orders;