import React from 'react'
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {AppRoutes} from './routes/AppRoutes';

export const App = () => {
  return (
    <>
      <div className='row'>
        <div className='col-12'>
            <Header />
        </div>
        <div className='col-12'>
            <AppRoutes /> 
        </div>
        <div className='col-12'>
            <Footer /> 
        </div>
      </div>
    </>
  )
}
