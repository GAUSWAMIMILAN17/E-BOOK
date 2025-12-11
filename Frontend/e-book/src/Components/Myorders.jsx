import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Ordercard from './Ordercard';
import { ORDER_API_ENDPOINT } from '../utils/data';
import { useDispatch, useSelector } from 'react-redux';

const Myorders = () => {
  const dispatch = useDispatch()
  const {user} = useSelector((store)=> store.user)
  // console.log(user)

  useEffect(()=> {
    const fetchPlacedBook = async() => {
      const res = await axios.post(`${ORDER_API_ENDPOINT}/myOrders`, {
        withCredentials: true
      })
      // console.log("API Response:",res.data)
      if(res.data.success){
        // dispatch(setAllMyOrders(res.data.))
      }
    }
  }, [])
  return (
    <div>
        <Navbar />
        <div className='min-h-screen max-w-7xl mx-auto'>
            <div className='my-5'>
                <h1 className='text-2xl font-semibold'>My Orders</h1>
                <p className='text-[#666]'>
                    Track and view your order history
                </p>
            </div>
            <Ordercard />
        </div>
        <Footer /> 
    </div>
  );
};

export default Myorders;