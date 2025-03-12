import './Navbar.css'

function Navbar() {
    return (
        <header>
            <nav className='nav-bar'>
                <ul className='nav-bar-items'>
                    <li>Inicio</li>
                    <li>Produtos</li>
                    <li>Contacto</li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;