import React from 'react'
import styles from './NavbarHome.module.css';
import { Link } from 'react-router-dom';



function Navbar_home() {
    return (
        <div className={styles.curved}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300" preserveAspectRatio='none' className={styles.curvedWave}>
                <path fill="#ffffff" fill-opacity="1" d="M0,192L60,192C120,192,240,192,360,181.3C480,171,600,149,720,144C840,139,960,
                                                            149,1080,165.3C1200,181,1320,203,1380,213.3L1440,224L1440,320L1380,320C1320,
                                                            320,1200,320,1080,320C960,320,840,320,720,
                                                            320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>

            <div className={styles.navbar}>
                <div className={styles.header}>
                    <img src="/logo.webp" className={styles.navbarlogo} />
                    <h1 className={styles.title}>
                        PEMS<span className={styles.dotcolor}>.</span>
                    </h1>
                </div>

                <div className={styles.headerbutton}>
                    <Link to="/login">
                        <button className={styles.button}>Login</button>
                    </Link>

                    <Link to="/register">
                        <button className={styles.button}>Register</button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Navbar_home
