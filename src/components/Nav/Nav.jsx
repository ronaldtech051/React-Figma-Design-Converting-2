import styles from './Nav.module.css'
const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className="logo">
        <h3>Shiv Mahobia</h3>
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Nav;
