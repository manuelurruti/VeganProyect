import React from 'react'
import "../scss/Layout/EstilosPagPrincipal/HomePage.css"
import { Icon } from '../Components/Icon/Icon'
import { Lorem } from '../Components/Text/Lorem'

export const PaginaPrincipal = () => {
  return (
    <div className='divMain'>
   <div className='d-flex justify-content-center flex-row align-items-center'>
 <Icon/>
 </div>
<Lorem/>

    </div>
  )
}
