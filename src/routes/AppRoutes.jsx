import React from 'react'
import { Routes,Route, Navigate } from 'react-router-dom';
import {Navbar} from '../ui/index';
import {ServicioPage,SomosPage,CertificadosPage,ContactosPage,AlianzasPage,HomePage,ReservaHoraPage} from '../pages';

export const AppRoutes = () => {


    return (
      <>
        <Navbar />
        <div className='container'>
        <Routes>
                <Route path='/'            element={<Navigate to='/home' />} />
                <Route path='/home'        element={<HomePage/>} />
                <Route path='somos'        element={<SomosPage/>} />
                <Route path='servicios'    element={<ServicioPage/>} />
                <Route path='alianzas'     element={<AlianzasPage/>} />
                <Route path='certificados' element={<CertificadosPage/>} />
                <Route path='contactos'    element={<ContactosPage/>} />
                <Route path='reserva'     element={<ReservaHoraPage/>} />
            </Routes>
        </div>
      </>
  )
}
