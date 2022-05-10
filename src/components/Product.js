import React from 'react'
import styles from "./Product.module.css"
const Product = ({item}) => {
  return (
    <div className={styles.Container}>  

      <img className={styles.Image} alt="" src={item.img}/>
      <h1 className={styles.title}>{item.title}</h1>
      <p className={styles.desc}>{item.desc}</p>
      <span className={styles.price}>{item.price}</span>
      
    </div>
  )
}

export default Product
