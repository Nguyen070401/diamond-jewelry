import { Send } from '@material-ui/icons'
import React from 'react'
import styles from "./Newsletter.module.css"

const Newsletter = () => {
  return (
    <div className={styles.Container}>
      <h1 className={styles.Title}>Newsletter</h1>
      <div className={styles.Description}>Get timely updates from your favorite products.</div>
      <div className={styles.InputContainer}>
        <input className={styles.Input} placeholder="Your email"></input>
        <button className={styles.Button}>
            <Send/>
        </button>
      </div>
    </div>
  )
}

export default Newsletter
