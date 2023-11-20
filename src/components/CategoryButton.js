import React from 'react';
import styles from './Categories.module.css';
import { Link } from 'react-router-dom';

export default function CategoryButton({ categoryName, categoryID }) {
  return (
    <Link to={`/category-search/${categoryID}`} className={styles.catBut}>
      {categoryName}
    </Link>
  );
}
