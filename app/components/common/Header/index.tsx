// header/index.tsx
"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import Logo from "../../images/logo/darkLogoheader";
import AnimatedButton from "../buttons/login";
import Link from "next/link";
const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div className={styles.middle}>
      </div>
      <div className={styles.right}>
        <div className={styles.login}>
          <Link href={"https://learnlogicify.com/login/index.php"}>
            <AnimatedButton />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
