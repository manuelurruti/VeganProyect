import React from 'react'
import "../../scss/Layout/Login/Login.css"

export const Loginx = () => {
  return (
    <div className="d-flex justify-content-center align-items-start div1009"> 
    <form className='col-6 form'>
  <div className='emailadd'> 
  <div className='d-flex flex-column justify-content-center align-items-center p-3'>
    <label  for="form1Example1">Usuario</label>
    <input type="text" className='text-black'  />
  </div>

  
  <div className='d-flex flex-column justify-content-center align-items-center'>
    <label for="form1Example2">Password</label>
    <input type="password" id="form1Example2"  className='text-black'   />
  </div>
  </div>

  <div >
    <div>

      <div className='d-flex justify-content-center p-3'>
        <input  type="checkbox" value="" id="form1Example3" />
      
        <label for="form1Example3" className='p-1'> Remember me </label>
      </div>
    </div>

    <div className='d-flex justify-content-center'>
      
      <p >Forgot password?</p>
    </div>
  </div>

  <div className='d-flex justify-content-center'> 
  <button type="button" className="btn btn-lg m-2 button">Entrar</button>
  <button type="button" className="btn btn-light m-2">Cancelar</button>
  </div></form>
  </div>
  )
}
