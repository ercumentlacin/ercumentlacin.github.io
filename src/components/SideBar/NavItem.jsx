import { NavLink } from 'react-router-dom';
import styles from './SideBar.module.css';

const NavItem = ({ text, icon, to = '/' }) => (
  <li className={styles.navItem}>
    <NavLink to={to} exact activeClassName={styles.active}>
      <div>
        {!!icon && <i className={icon}></i>}
        <span>{text}</span>
      </div>
    </NavLink>
  </li>
);

export default NavItem;
