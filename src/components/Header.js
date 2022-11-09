import React from 'react'
import './StyleSheet.css';
import styles from './Style.module.css';

const Header = () => {
  return (
    <div>
      <p>this is paragraph</p>
      <h2>this is heading1</h2>
      <div>this is division tag</div>
      <ul>this is unorderlist</ul>
      <ol>this is order list</ol>
      <div>
        <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
             nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
             reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
             Excepteur sint occaecat 
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      </div>
      <div>
        <p className={styles.head}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
             sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum</p>
      </div>
    </div>
  )
}

export default Header
