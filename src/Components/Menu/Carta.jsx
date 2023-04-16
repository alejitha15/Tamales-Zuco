import React from 'react'
import Uno from '../../assets/Menu_Uno.png'
import Dos from '../../assets/Menu_Dos.png'

const Carta = () => {
  return (
    <div>
    <div className=' flex justify-center items-center pt-10'>
      <p className=' font-Titulo font-bold text-6xl'>Menú</p>
    </div>
    <div className='grid my-10 mt-10 md:grid-cols-2 gap-3 mx-4 '>
      <img className=' rounded-2xl border-2 md:p-6 lg:mx-32 border-verde' src={Uno} alt='' width={500} />
      <img className=' rounded-2xl border-2 md:p-6 lg:mx-10 border-verde' src={Dos} alt='' width={500}/>
    </div>
    </div>
  )
}

export default Carta
