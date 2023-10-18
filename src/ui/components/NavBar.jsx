import { Link, NavLink, useNavigate } from 'react-router-dom';

export const Navbar = () => {

    return(
        <>
           <div className="second-menu">
                <nav className="navbar">
                    <Link className="navbar-brand" to="/">INICIO</Link>
                    <Link className="navbar-brand" to="/somos">QUIENES SOMOS</Link>
                    <Link className="navbar-brand" to="/servicios">SERVICIOS</Link>
                    <Link className="navbar-brand" to="/alianzas">ALIANZAS</Link>
                    <Link className="navbar-brand" to="/certificados">CERTIFICADOS</Link>
                    <Link className="navbar-brand" to="/reserva">RESERVAR HORA</Link>
                    <Link className="navbar-brand" to="/contactos">CONTACTOS</Link>
                </nav>
                <div className="second-menu-icons">
                <div className="fab fa-youtube"></div>
                <a href='https://twitter.com/sanitas?lang=es' target='true'><div className="fab fa-twitter"></div></a>
                <div className="fab fa-linkedin"></div>
                <div id="menu-bar" className="fas fa-bars"></div>
           </div>                
           </div>
        </>
    )
}