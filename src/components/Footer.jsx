
export const Footer = () => {
  return (
    <>
        <div className="our-footer">
            <img src="/assets/Logo2.png"  width="200" height="150" alt=""/> 
        
            <div className="main-footer">
                <div className="inner-footer">
                    <h1> links de Contacto</h1>
                        <div className="get-in-touch mysocial">
                            <i className="fas fa-envelope-square"></i>
                            <span>Contacto@ergosanitas.cl</span>
                        </div>
                        <div className="get-in-touch mysocial">
                            <i className="fas fa-map-marker-alt"></i>
                            <span> San Bernardo - Region Metropolitana</span>
                        </div>
                </div>
                <div className="inner-footer">
                    <img src='/assets/inst icono.png' width={50} height={50}/>
                    <a href='https://www.instagram.com/ergosanitas/?hl=es-la' target='true'>
                        Instagram Ergo-Sanitas
                    </a>
                </div>
                <div className="inner-footer">
                    <img src='/assets/wahts icono.png' width={50} height={50} />
                    <a href='https://wa.me/+56961149975' target='true'>whatsapp 9 6114 9975</a>
                </div> 
            </div>
        </div>        
    </>
  )
}
