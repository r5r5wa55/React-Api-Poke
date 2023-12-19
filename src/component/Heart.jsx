/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { FaHeart ,FaRegHeart  } from "react-icons/fa";

export default function Heart() {

    const [like , setLike]= useState(true);
    const likePokemon = ()=>{
        setLike(()=>!like);
    }

  return (
    <button onClick={likePokemon}>
        {like? <FaRegHeart/>:<FaHeart style={{color:'red'}}/>}
   
    </button>
  )
}
