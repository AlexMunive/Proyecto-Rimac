import React from 'react'
import Usuario from '../../apis/Usuario'
import Card from './Card'

const Section = () => {
  return (
    <div className='flex justify-center items-center w-full flex-col h-auto '>
      <Usuario/>
      <Card/>
    </div>
  )
}

export default Section