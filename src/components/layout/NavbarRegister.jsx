import React from 'react';
import styles from './NavbarRegister.module.css';
import { Link } from 'react-router-dom';

function Navbar_register() {
  return (
    <div className={styles.navbar}>
      <Link to="/home">
        <div className={styles.header}>

          <img src="/logo.webp" className={styles.navbarlogo} alt="Logo" />

          <h1 className={styles.title}>
            PEMS<span className={styles.dotcolor}>.</span>
          </h1>

        </div>
      </Link>
      <div className={styles.headerbutton}>
        <Link to="/login">
          <button className={styles.button}>Login</button>
        </Link>
        <Link to="/register">
          <button className={styles.button}>Register</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar_register;
