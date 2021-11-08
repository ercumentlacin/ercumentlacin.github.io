import Tooltip from '../shared/Tooltip';
import NavItem from './NavItem';
import styles from './SideBar.module.css';

const SideBar = () => {
  return (
    <header className={styles.sidebarWrapper}>
      <div className={styles.title}>
        <span>E</span>
        <h1>ercüment's Portfolio</h1>
      </div>

      <nav className={styles.nav}>
        <ul className={styles.topNav}>
          <NavItem text='Hızlı Ara' icon='fas fa-search' type='modal' />
        </ul>

        <ul className={styles.bottomNav}>
          <div className={styles.label}>
            <Tooltip message='SAYFALAR' tooltipMessage='Gizle/Göster' />
          </div>
          <NavItem text='Home' icon='fas fa-home' />
          <NavItem to='/articles' text='Articles' icon='fas fa-blog' />
        </ul>
      </nav>
    </header>
  );
};

export default SideBar;
