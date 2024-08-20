import MenuLink from '../menuLink/index'
import styles from './Menu.module.css';

export default function Menu() {

    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to='/'>Inicio</MenuLink>
                <MenuLink to='/sobre-mim'>Sobre Mim</MenuLink>
            </nav>
        </header>
    )
}