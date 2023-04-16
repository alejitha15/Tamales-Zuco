import React from 'react'

const ProductItems = ({data, addToCart}) => {

  //Destructuracion y traer parametros
  let { id, name, price, Image } = data;

  return (
    <div className='border-2 border-verde/20 p-4 rounded-lg shadow-sm shadow-verde/70'>
      <img src={Image} width={200}/>
      <h3 className=' font-Texto'>{name}</h3>
      <h5 className=' font-Texto'>${price}.00</h5>
      <button onClick={()=>addToCart(id)} className='px-3 py-1 border-2 border-amber-600 bg-Amarillo rounded-lg font-Texto'>Agregar al Carrito</button>
    </div>
  )
}

export default ProductItems
