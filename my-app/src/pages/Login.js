import React from 'react'
import styles from "../styles/Login.module.css"

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>SIGN IN</h1>
        <form action="">
          <input type="text" placeholder='username' />
          <input type="text" placeholder='password' />
          <button>LOGIN</button>
          
        </form>
        <a href="/" className={styles.link}>DO YOU REMEMBER THE PASSWORD</a><br />
          <a href="/" className={styles.link}>CREATE A NEW ACCOUNT</a>
      </div>
    </div>
  )
}

export default Login