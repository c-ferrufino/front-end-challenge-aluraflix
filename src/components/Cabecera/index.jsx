import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Cabecera.module.css";
import logo from "./Logo.svg";
import CabeceraLink from "../CabeceraLink";

function Cabecera() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <cabecera className={styles.cabecera}>
            <Link to="/">
                <section className={styles.logoContainer}>
                    <img src={logo} alt="Logo AluraFlix" />
                </section>
            </Link>
            <nav>
                <button className={styles.menuToggle} onClick={toggleMenu}>
                    ☰
                </button>
                <div className={`${styles.cabeceraButton} ${isMenuOpen ? styles.showMenu : ''}`}>
                    <CabeceraLink url="/">
                        Home
                    </CabeceraLink>
                    <CabeceraLink url="/CrearVideo">
                        Nuevo Video
                    </CabeceraLink>
                </div>
            </nav>
        </cabecera>
    );
}

export default Cabecera;
