import React from 'react'
import styles from './HomePage.module.scss'
import MenuItem from '../MenuItem/MenuItem'
import { data } from '../../data'
const HomePage = () => {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h1>Menu</h1>
      </div>
      {data.map((el, index) => (
        <MenuItem
          title={el.title}
          description={el.description}
          imageSrc={el.image}
          key={index}
        />
      ))}
    </section>
  )
}

export default HomePage
