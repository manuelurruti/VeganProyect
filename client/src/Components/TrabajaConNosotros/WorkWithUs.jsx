import React from 'react'
import "../../scss/Layout/cv/cv.css"

export const WorkWithUs = () => {
  return (

    <div className="divExtend d-flex  flex-column">
    <div className='bgcolour d-flex justify-content-center align-items-center flex-column'> 
        <div className="p-4 d-flex justify-content-center align-items-center">Deje su CV clickaendo en la imagen!</div>
      <label htmlFor="cvInput">
        <img src="../pdf.jpg" className='imgimg rounded-3'/>
      </label>
  
      <input type="file" id="cvInput" className='visually-hidden' accept=".pdf" />
      
      <p className='parraf'>Aclaracion, solo se aceptan archivos .PDF!</p>
    </div>
  </div>
  
  
  )
}
