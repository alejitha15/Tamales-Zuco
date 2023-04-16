import React from 'react'
//importacion de iconos
import { BsTrash3Fill, BsFillTrash3Fill } from 'react-icons/bs'

const CartItem = ({ data, delFromCart }) => {

    //destructuracion del carrito
    let { id, name, price, quantity } = data;
    return (
        <div className='border-2 border-Azul mb-3 px-2'>
            <section className=''>
                <h3 className='text-center font-Titulo text-sm my-1'>{name}</h3>
                <h5 className=' text-center font-Texto text-md'>${price}.00 x {quantity} = ${price * quantity}.00</h5>
                <div className='flex flex-row gap-12 text-center justify-center'>
                <button onClick={()=> delFromCart(id)} className='flex flex-row text-xs font-Texto p-1 border-2 m-1 border-amber-500 rounded-lg bg-amber-500/10'><BsTrash3Fill className='text-Amarillo'/> Eliminar uno</button>
                <button onClick={() => delFromCart(id, true)} className='flex flex-row text-xs font-Texto p-1  border-2 m-1 border-green-500 rounded-lg bg-verde/10'> <BsFillTrash3Fill className='text-verde'/> Eliminar todos</button>
                </div>
            </section>
        </div>
    )
}

export default CartItem