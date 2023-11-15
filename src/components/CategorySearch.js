import styles from './CategorySearch.module.css'
import Products from './Products'

export default function CategorySearch() {
    return(
        <div>
            <div className={styles.container}>
                <h2>Nafn flokks</h2>

                <Products/>
            </div>
        </div>
    )
}