import React from "react";
import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBeckground from "@/components/main-header/main-header-background";
import NavLink from "@/components/main-header/nav-link";

function MainHeader() {
  return (
    <>
      <MainHeaderBeckground />
      <header className={classes.header}>
        <Link href={"/"} className={classes.logo}>
          <Image src={logoImg} priority alt="A plate with food on it" />
          Nero Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainHeader;
