import clsx from 'clsx';
import { useState } from 'react';
import { Link, NavLink, NavLinkRenderProps } from 'react-router-dom';

import Logo from '@/components/atoms/Logo';
import styles from './Navigation.module.css';

function Navigation() {
  const [loggedIn, setLoggedIn] = useState(false);

  const select = ({ isActive }: NavLinkRenderProps) => {
    return clsx(isActive && styles.selected);
  };

  return (
    <nav className={styles.nav}>
      <Link to="/">
        <Logo className={styles.logo} />
      </Link>
      <NavLink className={select} to=".">
        Home
      </NavLink>
      <NavLink className={select} to="dashboard" caseSensitive>
        Dashboard
      </NavLink>

      {loggedIn ? (
        <Link to="/" onClick={() => setLoggedIn(false)}>
          Logout
        </Link>
      ) : (
        <Link to="login" onClick={() => setLoggedIn(true)}>
          Login
        </Link>
      )}
    </nav>
  );
}

export default Navigation;
