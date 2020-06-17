import React from 'react'
import styles from '../css/Landing.module.css'
import { Link } from "react-router-dom"

export const Landing = (): React.ReactElement => {
  return (
    <div className={styles.Landing}>
      <NavBar />
      <div>
        <h1 className={styles.Title}>
          #SpreadThe
          <span className={styles.Love}>Love</span>
        </h1>
        <p className={styles.SubText}>
        Week of June 20, 2020
        </p>
        <p className={styles.SubText}>
          Happy mid-June. Whether you're stuck at home or your town is reopening, here are some
          positive headlines and fun activities guaranteed to get you through your day!
        </p>
      </div>
    </div>
  )
}

export const NavBar = () => {
  return (
    <div className={styles.LogoBar}>
        <h1 className={styles.NavBarTitle}><a href="/">#SpreadThe
          <span className={styles.Love}>Love</span></a>
          <Link to="/subscribe">
            <span className={styles.NavBarSubscribe}><a href="/">Subscribe</a></span>
          </Link>
          {/* <Link to="/team">
            <span className={styles.NavBarItems}><a href="/">Join Us</a></span>
          </Link>
          <Link to="/blog">
            <span className={styles.NavBarItems}><a href="/">Blog</a></span>
          </Link> */}
          <Link to="/">
            <span className={styles.NavBarItems}><a href="/">Home</a></span>
          </Link>
        </h1>
     </div>
  )
}