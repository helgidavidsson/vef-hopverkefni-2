import styles from './Categories.module.css'
import CategoryButton from './CategoryButton'

export default function Categories() {

    return(
        <div >
            <h2 className={styles.h2}>Skoðaðu vöruflokkana okkar</h2>

            <div className={styles.container}>
                <CategoryButton categoryName="Clothing"/>
                <CategoryButton categoryName="Shoes"/>
                <CategoryButton categoryName="Garden"/>
                <CategoryButton categoryName="Computers"/>
                <CategoryButton categoryName="Movies"/>
                <CategoryButton categoryName="Books"/>
                <CategoryButton categoryName="Jewelery"/>
                <CategoryButton categoryName="Electronics"/>
                <CategoryButton categoryName="Outdoors"/>
                <CategoryButton categoryName="Grocery"/>
                <CategoryButton categoryName="Sports"/>
                <CategoryButton categoryName="Tools"/>
            </div>


        </div>
    )
}