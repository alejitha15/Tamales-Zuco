import React from 'react'

const CartItem = ({ data, delFromCart }) => {

    //destructuracion del carrito
    let { id, name, price, quantity } = data;
    return (
        <div className='border-2 border-Azul mb-3 px-2'>
            <section className=''>
                <h3>{name}</h3>
                <h5>${price}.00 x {quantity} = ${price * quantity}.00</h5>
                <button onClick={()=> delFromCart(id)}>Eliminar uno a uno</button>
                <button onClick={() => delFromCart(id, true)}>Eliminar todos</button>
            </section>
        </div>
    )
}

export default CartItem