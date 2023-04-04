import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import { Header } from '../Components/Header/Header'
import { PaginaPrincipal } from '../pages/PaginaPrincipal'
import {AcercaDeNosotros} from "../pages/AcercaDeNosotros"
import {Menu} from "../pages/Menu"
import { Register } from '../pages/Register'
import { Login } from '../pages/Login'
import { Cv } from '../pages/Cv'
export const MyRoutes = () => {
  return (
    <Routes>
    
    <Route path="/" element={<Header />}>
      
      <Route index element={<PaginaPrincipal />} />
      <Route exact path="/AcercaDeNosotros" element={<AcercaDeNosotros/>}/>
      <Route  path="/Menu" element={<Menu/>}/>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Cv" element={<Cv/>}/>


    </Route>
 

    <Route path="*" element={<Navigate to="/" />}></Route>
  </Routes >
  )
}
