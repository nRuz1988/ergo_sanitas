import React from 'react'

export const Header = () => {
  return (
    <>
      <div className="main-header">
        <a href="#" id="logo"><img src="/assets/Logo1.png" height="50" alt="" /></a>
        <div className="menu-icons">
          <div className="inner-menu-icons">
            <i className="far fa-clock"></i>
            <div className="inner-menu-content">
              <span>Horarios : 09:00 a 21:00 </span>
              <span>Lunes a Domingo </span>
            </div>
          </div>
          <div className="inner-menu-icons">
            <a href="mailto:Contacto@ergosanitas.cl">
              <i className="fas fa-envelope"></i>
            </a>
            <div className="inner-menu-content">
              <span>Correo</span>
              <span>Contacto@ergosanitas.cl</span>
            </div>
          </div>
          <div className="inner-menu-icons">
            <i className="fas fa-phone-alt"></i>
            <div className="inner-menu-content">
              <span>Contacto</span>
              <a href='https://wa.me/56961149975' target='true'><span>9 6114 9975</span></a>
              <a href='https://wa.me/56933383610' target='true'><span>9 3338 3610</span></a>
              <a href='https://wa.me/56942528626' target='true'><span>9 4252 8626</span></a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
