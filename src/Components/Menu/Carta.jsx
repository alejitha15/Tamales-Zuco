import React from 'react'
import Uno from '../../assets/Menu_Uno.png'
import Dos from '../../assets/Menu_Dos.png'

const Carta = () => {
  return (
    <div>
      <div className=' flex justify-center items-center pt-10'>
        <p className=' font-Titulo font-bold text-4xl md:text-6xl lg:text-7xl'>Menú</p>
      </div>

      <div className='grid md:grid-cols-2 gap-3 mt-12 mx-4'>
        <div className='grid  justify-center items-center '>
          <img className=' rounded-2xl border-2 md:p-6 border-verde' src={Uno} alt='' width={550} />
        </div>
        <div className='grid justify-center items-center'>
          <img className=' rounded-2xl border-2 md:p-6 border-verde' src={Dos} alt='' width={550} />
        </div>
      </div>
    </div>
  )
}

export default Carta
