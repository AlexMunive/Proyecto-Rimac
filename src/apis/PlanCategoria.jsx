import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import CardOffer from '../page/plan/CardOffer'

const PlanCategoria = () => {

    const [ofertas, setOfertas] = useState(null)
    const [loagin, setLoagin] = useState(true)
    const [error, setError] = useState(null)


   useEffect(()=>{
    axios.get("https://rimac-front-end-challenge.netlify.app/api/plans.json")
    .then((res)=>{
        setOfertas(res.data)
        setLoagin(false)
    }).catch((err)=>{
        console.log("err")
        setLoagin(false)
        setError(err)

    })

   },[])

   if(loagin)
    return 
    (<div>
        Cargando plan...
    </div>);



  return (
    <div className='h-full'>
      <CardOffer ofertas={ofertas} />
    </div>
  );
}

export default PlanCategoria