import React from 'react'
import "../scss/Layout/SobreNosotros/sobreNosotros.css"

export const AcercaDeNosotros = () => {
  return (
    <div className='div100'>
  <div className='d-flex align-items-center justify-content-center '> 
<img src="../cocina.jpg" className='rounded-3'/>
</div>

<h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni velit fuga, culpa molestias error nostrum veniam, quod quibusdam vitae nihil, a possimus molestiae eligendi accusamus iure assumenda in rem sint!</h4>
<div className='d-flex align-items-center flex-column'> 
<h3>Nuestro Equipo</h3>
<ul className='d-flex flex-row'>
<li className='m-5'>Laura</li>
<li className='m-5'>Pedro</li>
<li className='m-5'>Juan</li>
</ul>
</div>
  </div>
  )
}
