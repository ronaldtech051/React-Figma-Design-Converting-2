import styles from './Nav.module.css'
const Nav = () => {
  return (
    <nav className={`${styles.nav} container`}>
      <div className="logo">
        <h3>Shiv Mahobia</h3>
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
};

export default Nav;
