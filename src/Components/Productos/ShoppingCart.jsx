import React, { useReducer } from 'react'
import { ShoppingReducer, shoppingInitialState } from './ShoppingReducer'
import ProductItems from './ProductItems';
import CartItem from './CartItem';
import { TYPES } from './ShoppingAccion';

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
        console.log(id, all);
        if(all) {
            dispatch({type: TYPES.REMOVE_ALL_FROM_CART, payload:id})
        } else{
            dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload:id })
        }
    }

    //Funcion para limpiar todo el carro
    const clearCart = () => {
        dispatch({ type: TYPES.CLEAR_CART })
    }

    return (
        <div className=' flex flex-col md:flex-row lg:mb-4'>
            <div>
                <h2 className=' text-transparent'>Carrito de compras</h2>
                <h3 className=' text-transparent'>productos</h3>
                <article className='p-4 m-4 shadow-lg shadow-verde/50 grid grid-cols-2 lg:grid-cols-2 gap-6 justify-center '>
                    {
                        Products.map((product) => <ProductItems key={product.id} data={product} addToCart={addToCart} />)
                    }
                </article>
            </div>
            <div>
                <h3 className=' text-5xl text-transparent font-Titulo px-3'>Carrito</h3>
                <article className='p-4 m-4 shadow-lg shadow-verde/50'>
                    <button onClick={clearCart}>Limpiar Carrito</button>
                    {
                        cart.map((item, Index) => <CartItem key={Index} data={item} delFromCart={delFromCart} />)
                    }
                </article>
            </div>
        </div>
    )
}

export default ShoppingCart