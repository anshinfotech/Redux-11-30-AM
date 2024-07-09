import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
    const cartitem = useSelector((state)=>state.prd.cart)
    console.log(cartitem);
  return (
    <div>
        <h1>Cart Page</h1>
        {cartitem.map((item)=>{
            return(
                <h1>{item.title}</h1>
            )
        })}
    </div>
  )
}

export default Cart