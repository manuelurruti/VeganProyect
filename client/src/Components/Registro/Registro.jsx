import React from 'react'
import "../../scss/Layout/Registro/Registro.css"

export const Registro = () => {
  return (
    <div><section className="h-100k d-flex justify-content-center">
    <div className="col-10 p-3 py-6 h-100 ">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col">
          <div className="card card-registration my-4 bgColor">
            <div className="row g-0">
              <div className="col-xl-4 d-none d-xl-block">
                <img src="../../LogoBlanco.svg"
                  alt="Sample photo" className="img-fluid h-100 imgStyle"
                   />
              </div>
              <div className="col-xl-8">
                <div className="card-body p-md-5 text-black">
                  <h3 className="mb-5 text-uppercase">Registrate!</h3>
  
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="text" id="form3Example1m" className="form-control form-control-lg" />
                        <label className="form-label">Nombre</label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="text" id="form3Example1n" className="form-control form-control-lg" />
                        <label className="form-label">Segundo nombre</label>
                      </div>
                    </div>
                  </div>
  
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="password" id="form3Example1m1" className="form-control form-control-lg" />
                        <label className="form-label" >password</label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="password" id="form3Example1n1" className="form-control form-control-lg" />
                        <label className="form-label" >Confirmar password</label>
                      </div>
                    </div>
                  </div>
  
                  <div className="form-outline mb-4">
                    <input type="text" id="form3Example8" className="form-control form-control-lg" />
                    <label className="form-label" >Direccion</label>
                  </div>
  
                  <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
  
                    <h6 className="mb-0 me-4">Genero: </h6>
  
                    <div className="form-check form-check-inline mb-0 me-4">
                      <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                        value="option1" />
                      <label className="form-check-label" >Femenino</label>
                    </div>
  
                    <div className="form-check form-check-inline mb-0 me-4">
                      <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                        value="option2" />
                      <label className="form-check-label" >Masculino</label>
                    </div>
  
                    <div className="form-check form-check-inline mb-0">
                      <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                        value="option3" />
                      <label className="form-check-label" >Otro</label>
                    </div>
  
                  </div>
  
                  <div className="row">
                    <div className="col-md-6 mb-4">
  
                      <select className="form-outline text-black">
                        <option value="1">Provincia</option>
                        <option value="2">Option 1</option>
                        <option value="3">Option 2</option>
                        <option value="4">Option 3</option>
                      </select>
  
                    </div>
                    <div className="col-md-6 mb-4">
  
                      <select className="form-outline text-black">
                        <option   value="1">Ciudad</option>
                        <option  value="2">Option 1</option>
                        <option  value="3">Option 2</option>
                        <option  value="4">Option 3</option>
                      </select>
  
                    </div>
                  </div>
  
                  <div className="form-outline mb-4">
                    <input type="text" id="form3Example9" className="form-control form-control-lg bg-input-color" />
                    <label className="form-label" >DOB</label>
                  </div>
  
                  <div className="form-outline mb-4">
                    <input type="text" id="form3Example90" className="form-control form-control-lg bg-input-color" />
                    <label className="form-label" >Pincode</label>
                  </div>
  
                  <div className="form-outline mb-4">
                    <input type="text" id="form3Example99" className="form-control form-control-lg bg-input-color" />
                    <label className="form-label" >Course</label>
                  </div>
  
                  <div className="form-outline mb-4">
                    <input type="text" id="form3Example97" className="form-control form-control-lg bg-input-color" />
                    <label className="form-label" >Email ID</label>
                  </div>
  
                  <div className="d-flex justify-content-end pt-3 displayrow">
                    
                    <button type="button" className="btn btn-light m-2">Cancelar</button>
                    <button type="button" className="btn btn-lg m-2 btn-color">Submit form</button>
                  </div>
  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section></div>
  )
}
