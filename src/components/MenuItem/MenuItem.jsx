import React from 'react'
import styles from './MenuItem.module.scss'
const MenuItem = ({ title, description, imageSrc }) => {
  return (
    <div className={styles.menuItem}>
      <h2>{title}</h2>
      <div className={styles.image}>
        <img src={imageSrc} alt={title} />
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  )
}

export default MenuItem
