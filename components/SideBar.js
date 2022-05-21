import React from "react";
import styles from "../styles/SideBar.module.scss";
import { FaArrowDown } from "react-icons/fa";

const SideBar = ({ children, handleMenu, openMenu }) => {
  return (
    <nav className={styles.sidebarNav}>
      <div className={styles.sidebarWrapper}>
        {/* side bar toggle */}
        <div className={styles.sidebarToggle} onClick={handleMenu}>
          <div className={styles.openSidebar}>
            <span>Table of Content</span>
            <FaArrowDown
              className={`${styles.icons} ${openMenu} ? "" : ${styles.active}`}
            />
          </div>
        </div>
        {children}
      </div>
    </nav>
  );
};

export default SideBar;
