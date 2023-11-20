import { GetProductsInCategory, GetCategoryName } from './ApiFunctions';
import React, { useEffect, useState } from 'react';
import styles from './Products.module.css';
import { Link, useParams } from 'react-router-dom';

export default function CategorySearch() {
  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState([]);

  const { categoryID } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await GetProductsInCategory(categoryID);
        setProducts(products);
        const catName = await GetCategoryName(categoryID);
        setCategoryName(catName);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [categoryID]);

  return (
    <div>
      <h2 className={styles.h2}>{categoryName}</h2>
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
