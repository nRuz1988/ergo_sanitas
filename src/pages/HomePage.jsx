import React from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export const HomePage = () => {
  return (
    <>
      <section className="background-image">
        <div className="background-content">
            <h1>Tenemos La Mejor Opción  De atencion Para Usted </h1> 
              <a href="\ServiciosPage.jsx">Leer Mas PENDIENTE</a>
        </div>
      </section>
      <section className="background">
          <div className="background-content"></div>
          
          <div>
              <img src="/assets/Contactos actualizados.jpg" width="300" height="350" alt="InternetCtrl"/>
          </div>
          <div>
            <img src="/assets/Contactos actualizados.jpg" width="300" height="350" alt="InternetCtrl"/> 
          </div>
          <div>
            <img src="/assets/Contactos actualizados.jpg" width="300" height="350" alt="InternetCtrl"/> 
          </div>
          <div>
            <img src="/assets/Contactos actualizados.jpg" width="300" height="350" alt="InternetCtrl"/> 
          </div>
          <div>
            <img src="/assets/Contactos actualizados.jpg" width="300" height="350" alt="InternetCtrl"/> 
          </div>
          <div>
            <img src="/assets/Contactos actualizados.jpg" width="300" height="350" alt="InternetCtrl"/> 
          </div>
          <div>
            <img src="/assets/Contactos actualizados.jpg" width="300" height="350" alt="InternetCtrl"/> 
          </div>
          <div>
            <img src="/assets/Contactos actualizados.jpg" width="300" height="350" alt="InternetCtrl"/> 
          </div>
          <div>
            <img src="/assets/Contactos actualizados.jpg" width="300" height="350" alt="InternetCtrl"/> 
          </div>
      </section>
      <div className="our-services">
          <h1>Nuestros <span>Servicios </span></h1>
            <div className="main-services">
              <div className="inner-main-services">
                  <img src="/assets/img2.jpg"  width="350" height="430" alt="InternetCtrl"/>
                  <h2>CONVENIO INSTITUCIONES ESCOLADES</h2>
                  <p> Porque nuestra preocupacion siempre sera desde el inicio de la vida en Ergo SaniTas SpA tenemos el servicio necesario para todas tus etapas.</p>
              </div>
              <div className="inner-main-services">
                <img src="/assets/img1.jpg"  width="350" height="430" alt="InternetCtrl"/>
                <h2>CONVENIO EMPRESAS</h2>
                <p> Que tu salud no sea un impedimento para realizar las activides fisicas que mas te gustan, en Ergo SaniTas SpA tenemos un servicio esclusivo que te ayudara a saber si tu estado de salud es optimo para el ejercicio fisico.</p>
              </div>
              <div className="inner-main-services">
                <img src="/assets/img3.jpg"  width="350" height="430" alt="InternetCtrl"/>
                <h2>CONVENIO PARA ADULTOS MAYORES</h2>
                <p> Contamos con un equipo multidiciplinario para cubrir todas las necesides de nuestros pacientes</p>
              </div>
            </div>
      </div>
      <div className="why-chose-us">
          <h1>¿Por <span>Que</span>Elegirnos?</h1>
          <div className="full-main">
            <div className="main-choseus">
              <div className="main-inner-chose">
                <div className="chose-img">
                  <img src="/assets/virus.png" alt=""/>
                   <h4>Ergo SaniTas Spa</h4> Tu Socio de Confianza en Salud. Nuestra excelencia en atención médica y servicios integrales marca la diferencia para tu bienestar.
                </div>
              </div>
              <div className="main-inner-chose">
                <div className="chose-img">
                  <img src="/assets/virus.png" alt=""/> 
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis impedit voluptates quod?
                </div>
              </div>
            </div>
          </div>
      </div>
      <div className="main-choseus">
          <img src="/assets/ALIANZA.jpg" alt=""/>
      </div>
      
      <div className="our-gallery">
          <h1>Nuestra <span>Galeria</span></h1>
          <div className="main-gallery">
            <div className="inner-gallery">
              <img src="/assets/img1.jpg" alt=""/>
            </div>
            <div className="inner-gallery">
              <img src="/assets/img2.jpg" alt=""/>
            </div>
            <div className="inner-gallery">
              <img src="/assets/img3.jpg" alt=""/>
            </div>
            <div className="inner-gallery">
              <img src="/assets/img4.jpg" alt=""/>
            </div>
            <div className="inner-gallery">
              <img src="/assets/img5.jpg" alt=""/>
            </div>
            <div className="inner-gallery">
              <img src="/assets/img6.jpg" alt=""/>
            </div>
          </div>  
      </div>
      {
        /*<div className="our-team">
          <h1> Nuestro <span> Equipo </span></h1>
          <div className="main-team">
            <div className="inner-team">
              <img src="/assets/wsp.jpg"  alt=""/>
              <h2>Medicos</h2>
              <div className="socail">
                <i className="fab fa-facebook"></i>
              </div>
            </div>
          </div>
        </div>
        */
      }

       
    </>
  )
}
