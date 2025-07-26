import styles from './Header.module.css'

const Header = () => {
    return (
        <div>
            <header className={styles.header}>
                <h1 className={styles.text}>Calculadora IMC</h1>
                <ul className={styles.list}>
                    <li>
                        <a className={styles.item} href="#calculator">Calculadora</a>
                    </li>
                    <li>
                        <a className={styles.item} href="#about">Sobre</a>
                    </li>
                    <li>
                        <a className={styles.item} href="#table">Tabela</a>
                    </li>
                </ul>
            </header>
        </div>
    )
}

export default Header;