import React from 'react';
import Link from 'next/link'; 
import styles from './Header.module.css'; 

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Vicente Gama - React</h1> 
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/">Home</Link> {}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
