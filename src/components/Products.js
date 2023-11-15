import styles from './Products.module.css'
import { Link } from 'react-router-dom';

export default function Products() {

  //HÉR ÞARF AÐ EYÐA DUMMYDATA OG FETCHA RÉTT GÖGN
    const dummyData = [
        { name: "Vara1", price: 635, category: "Sports", imageSrc: "/black.jpg"},
        { name: "Vara2", price: 358, category: "Shoes", imageSrc: "/black.jpg" },
        { name: "Vara3", price: 358, category: "Shoes", imageSrc: "/black.jpg" },
        { name: "Nafn", price: 358, category: "Shoes", imageSrc: "/black.jpg"},
        { name: "Nafn", price: 358, category: "Shoes", imageSrc: "/black.jpg" },
        { name: "Nafn", price: 358, category: "Shoes", imageSrc: "/black.jpg"},

    
      ];

      const products = dummyData;

    return(
      <div>
      <div className={styles.grid}>
          {products.map(product => (
              <Link to={`/product`} key={product.name} className={styles.link} name={product.name}>
                  <div className={styles.item}>
                      <img src={product.imageSrc} alt={product.name} className={styles.img} />
                      <div className={styles.wrapper}>
                          <div>
                              <h3 className={styles.title}>{product.name}</h3>
                              <p className={styles.category}>{product.category}</p>
                          </div>
                          <p className={styles.price}>{product.price} kr.-</p>
                      </div>
                  </div>
              </Link>
          ))}
      </div>
  </div>
    )
}