import React, { useState, useEffect } from 'react';
import styles from './Products.module.css';
import { Link } from 'react-router-dom';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const API_URL = 'https://vef1-2023-h2-api-791d754dda5b.herokuapp.com/';
      const url = new URL('products', API_URL);
      url.searchParams.set('limit', '6');

      try {
        const response = await fetch(url);
        if (!response.ok) {
          console.error(
            'Error fetching data:',
            response.status,
            response.statusText
          );
          return;
        }

        const json = await response.json();
        setProducts(json.items);
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
