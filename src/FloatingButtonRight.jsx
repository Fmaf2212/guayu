import React from 'react'
import Whatsapp3 from '../src/assets/images/Whatsapp3.png'

const FloatingButtonRight = () => {
  return (
    <a href='https://api.whatsapp.com/send?phone=51978219393&text=%C2%A1Hola!%20Estoy%20interesado%20en%20conocer%20m%C3%A1s%20sobre%20GUAYU,%20la%20bebida%20energizante%20de%20Santa%20Natura.%20%C2%BFPodr%C3%ADas%20brindarme%20m%C3%A1s%20informaci%C3%B3n?' target='_blank' className='hover-target w-full flex justify-center items-center z-40'>
        <img src={Whatsapp3} alt="Whatsapp3" width={80} className='hover-img w-16 h-16 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-22 lg:h-22 rounded-full z-30'/>
        <div className="max-[992px]:hidden hover-content flex items-center justify-center relative w-40 bg-[#38a121] rounded-tr-2xl rounded-br-2xl shadow-md text-white h-10 tracking-tight leading-4 -ml-6 overflow-hidden py-1 px-4 text-center z-20"><span>Consultas <strong>Aquí</strong></span></div>
    </a>
  )
}

export default FloatingButtonRight