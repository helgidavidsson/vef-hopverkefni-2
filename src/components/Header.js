import styles from './Header.module.css'
import { Link } from 'react-router-dom'

export default function Header() {
    return(
        <div className={styles.header}>
            <h1 className={styles.h1}>Vefforritunarbúðin</h1>

            <nav>
                <Link className={styles.link} to="/">Heim</Link>
                <Link className={styles.link} to="/new-products">Nýjar vörur</Link>
                <Link className={styles.link} to="/categories">Flokkar</Link>
            </nav>
        
        </div>
    )
}