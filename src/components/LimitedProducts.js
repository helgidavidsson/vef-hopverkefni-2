import React, { useState, useEffect } from 'react';
import styles from './Products.module.css';
import { Link } from 'react-router-dom';
import { GetLimitedProducts } from './ApiFunctions';

export default function LimitedProducts() {
  const [products, setProducts] = useState([]);

  const limit = 6;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await GetLimitedProducts(limit);
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
            to={`/product`}
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
