import React from 'react'
import Carrito1 from '../src/assets/images/Carrito1.png'

const FloatingButton = () => {
  return (
    <a href='https://santanatura.com.pe/product-category/guayu/' target='_blank' className='hover-target w-full flex justify-center items-center z-40'>
        <div className='hover-img z-30 bg-white rounded-full p-0.5'>
          <img src={Carrito1} alt="Carrito1" className='w-[46px] h-[46px] md:w-14 md:h-14'/>
        </div>
        <div className="max-[992px]:hidden hover-content flex items-center justify-center relative w-40 bg-[#456C86] rounded-tr-2xl rounded-br-2xl shadow-md text-white h-10 tracking-tight leading-4 -ml-6 overflow-hidden py-1 px-4 text-center z-20"><span>Compra  <strong>Aquí</strong></span></div>
    </a>
  )
}

export default FloatingButton