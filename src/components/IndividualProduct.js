import React, { useState, useEffect } from 'react';
import styles from './IndividualProduct.module.css';
import LimitedCategoryProducts from './LimitedCategoryProducts';
import { GetIndividualProduct } from './ApiFunctions';

export default function IndividualProduct() {
  const [products, setProducts] = useState([]);

  const ID = 57;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const product = await GetIndividualProduct(ID);
        setProducts(product);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const product = products;

  return (
    <div>
      <div className={styles.container}>
        <img src={product.image} alt={product.title}></img>
        <div className={styles.productContainer}>
          <h2 className={styles.h2}>{product.title}</h2>

          <p>{product.category_title}</p>
          <p>{product.price} kr.-</p>

          <p>{product.description}</p>
        </div>
      </div>
      <h2 className={styles.h3}>Meira úr {product.category_title}</h2>
      <LimitedCategoryProducts />
    </div>
  );
}
