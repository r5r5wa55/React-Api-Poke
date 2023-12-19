/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import Heart from './Heart'


export default function Like({ likePoke }) {
   
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'> 
        {likePoke?.map((favlike ,index)=>(
            <div key={index}>
                <h4>{favlike.name}</h4>
                <img src={favlike.sprites?.other?.home.front_default} alt="" className='' />
                <Heart />
            </div>

        ))}
    </div>
  )
}
