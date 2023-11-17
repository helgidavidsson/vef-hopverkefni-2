import LimitedProducts from './LimitedProducts';
import styles from './Frontpage.module.css';
import Categories from './Categories';
import React from 'react';
export default function FrontPage() {
  return (
    <div>
      <h2 className={styles.h2}>Nýjar vörur</h2>

      <LimitedProducts />
      <Categories />
    </div>
  );
}
