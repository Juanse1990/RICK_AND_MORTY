import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav = ({ onSearch, handleLogOut }) => {
  return (
    <>
      <h1 className={styles.title}>Rick & Morty</h1>
      <nav className={styles.boxNav}>
        <NavLink to={`/home`} className={styles.navs}>
          Home
        </NavLink>
        <NavLink to={`/about`} className={styles.navs}>
          About
        </NavLink>
        <NavLink to={`/favorites`} className={styles.navs}>
          Favorites
        </NavLink>
        <NavLink to={`/`} className={styles.navs} onClick={handleLogOut}>
          LogOut
        </NavLink>
        <SearchBar onSearch={onSearch} />
      </nav>
    </>
  );
};

export default Nav;
