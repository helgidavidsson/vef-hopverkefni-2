
import styles from './IndividualProduct.module.css'
import Products from './Products'

export default function IndividualProduct({

}) {
    return(
        <div>
            
        <div className={styles.container}>
                <img src="/black.jpg"></img>

            <div className={styles.productContainer}>
                <h2 className={styles.h2}>Nafn vöru</h2>

                <p>Flokkur: </p>
                <p>Verð:</p>

                <p>Lýsingaklfhasldfj kalsdjfl kasjdflks ajdfl jsaædfj salædfj </p>
                
            </div>
          
        </div>
        <Products/>

        </div>

    )
}