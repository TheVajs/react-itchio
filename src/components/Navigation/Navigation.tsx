import clsx from 'clsx';
import { Link, NavLink, NavLinkRenderProps } from 'react-router-dom';
import Logo from '../atoms/Logo';
import styles from './Navigation.module.css';

function Navigation() {
  const onActive = (render: NavLinkRenderProps) => {
    return clsx('nav-button', render.isActive && 'active');
  };

  return (
    <nav className={styles.nav}>
      <Link to="/">
        <Logo className={styles.logo} />
      </Link>
      <NavLink className={onActive} to=".">
        Home
      </NavLink>
      <NavLink className={onActive} to="dashboard" caseSensitive>
        Dashboard
      </NavLink>
      <NavLink className={onActive} to="login">
        Login
      </NavLink>
    </nav>
  );
}

export default Navigation;
