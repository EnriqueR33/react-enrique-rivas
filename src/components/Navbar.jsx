import './Navbar.css'
import ferreteria from '../images/ferreteria.jpg';

function Navbar() {
    return (
        <header>
            <nav className='nav-bar'>
                <ul className='nav-bar-items'>
                    <li>Servicios</li>
                    <li>Produtos</li>
                    <li>Contacto</li>
                </ul>
            </nav>
            {<div><img src="{ferreteria}" /></div>}
        </header>
    );
};

export default Navbar; 