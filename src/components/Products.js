import React, { useState, useEffect } from 'react';
import styles from './Products.module.css';
import { Link } from 'react-router-dom';
import { GetNewProducts } from './ApiFunctions';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await GetNewProducts();
        setProducts(products);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className={styles.grid}>
        {products.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.title}
            className={styles.link}
            name={product.title}
          >
            <div className={styles.item}>
              <img
                src={product.image}
                alt={product.title}
                className={styles.img}
              />
              <div className={styles.wrapper}>
                <div>
                  <h3 className={styles.title}>{product.title}</h3>
                  <p className={styles.category}>{product.category_title}</p>
                </div>
                <p className={styles.price}>{product.price} kr.-</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
