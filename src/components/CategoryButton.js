import styles from './Categories.module.css'
import { Link } from 'react-router-dom'

export default function CategoryButton({
    categoryName

}) {
    return(
    
        <Link to={'/search'} className={styles.catBut}>
           {categoryName}
        </Link>
    )
}