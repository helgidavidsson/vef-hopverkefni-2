import React from 'react';
import styles from './Categories.module.css';
import CategoryButton from './CategoryButton';

export default function Categories() {
  return (
    <div>
      <h2 className={styles.h2}>Skoðaðu vöruflokkana okkar</h2>

      <div className={styles.container}>
        <CategoryButton categoryName='Games' categoryID={1} />
        <CategoryButton categoryName='Sports' categoryID={2} />
        <CategoryButton categoryName='Jewlery' categoryID={3} />
        <CategoryButton categoryName='Clothing' categoryID={4} />
        <CategoryButton categoryName='Computers' categoryID={5} />
        <CategoryButton categoryName='Shoes' categoryID={6} />
        <CategoryButton categoryName='Music' categoryID={7} />
        <CategoryButton categoryName='Toys' categoryID={8} />
        <CategoryButton categoryName='Movies' categoryID={9} />
        <CategoryButton categoryName='Tools' categoryID={10} />
        <CategoryButton categoryName='Kids' categoryID={11} />
        <CategoryButton categoryName='Health' categoryID={12} />
      </div>
    </div>
  );
}
