import React, { useReducer } from 'react'
import { ShoppingReducer, shoppingInitialState } from './ShoppingReducer'
import ProductItems from './ProductItems';
import CartItem from './CartItem';
import { TYPES } from './ShoppingAccion';
//importacion de iconos
import { MdDeleteForever } from 'react-icons/md'

// Función que nos permitirá calcular el total de la compra
const calculateTotal = (cart) => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
};

const ShoppingCart = () => {

    //Renderiza los productos
    const [state, dispatch] = useReducer(ShoppingReducer, shoppingInitialState);

    //Destructuracion de productos
    const { Products, cart } = state

    //Funcion de agregar al carrito
    const addToCart = (id) => {
        console.log(id);
        dispatch({ type: TYPES.ADD_TO_CART, payload: id });
    }

    //Funcion para eliminar del carro
    const delFromCart = (id, all = false) => {
        // console.log(id, all);
        if (all) {
            dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id })
        } else {
            dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id })
        }
    }

    //Funcion para limpiar todo el carro
    const clearCart = () => {
        dispatch({ type: TYPES.CLEAR_CART })
    }

    //Componente Total que mostrará el total de la compra
    const Total = () => {
        const total = calculateTotal(cart);
        return (
            <div className='bg-verde text-white rounded-full w-20 h-20 flex items-center justify-center text-xs fixed top-20 right-42 z-50 text-center font-Texto font-light shadow-2xl shadow-violet border-2 border-green-700'>
                Total: ${total.toFixed(2)}
            </div>
        );
    };


    return (
        <div className=' flex flex-col md:flex-row lg:mb-4'>
            <div>
                <h2 className=' text-transparent'>Carrito de compras</h2>
                <h3 className=' text-transparent'>productos</h3>
                <article className='p-4 m-4 shadow-lg shadow-black/50 grid grid-cols-2 lg:grid-cols-3 gap-6 justify-center '>
                    {
                        Products.map((product) => <ProductItems key={product.id} data={product} addToCart={addToCart} />)
                    }
                </article>
            </div>
            <div>
                <h3 className=' text-5xl text-transparent font-Titulo px-3'>Carrito</h3>
                <article className='p-4 m-4 shadow-lg shadow-black/50'>
                    <button onClick={clearCart} className='p-2 border-2 border-amber-500 m-2 rounded-lg bg-amber-500/50 ml-32 w-36 flex flex-row font-Texto text-sm'><MdDeleteForever className='text-xl'/>Limpiar Carrito</button>
                    {
                        cart.map((item, Index) => <CartItem key={Index} data={item} delFromCart={delFromCart} />)
                    }
                </article>
                {/* Agregar el componente Total */}
                <Total />
                <div className='bg-yellow  mt-3'>
                    <button onClick={clearCart} className="fixed right-5 bottom-1 z-40 items-center justify-center text-sm bg-yellow/80 w-32 disabled:opacity-25 border-none shadow-none cursor-pointer p-1 " />
                </div>
            </div>
            </div>
            )
}

            export default ShoppingCart