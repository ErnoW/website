import React from "react"
import styles from "./header.module.css"
import Image from "next/image"
import Link from "next/link"

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/">
        <Image
          src="/brand/ew-logo-white.svg"
          alt="Erno Wever Software Solutions Logo"
          width={60}
          height={30}
        />
        <h1 className={styles.logoName}>
          Erno Wever <span>Software Solutions</span>
        </h1>
      </Link>
      <Link href="/contact">Contact us</Link>
    </header>
  )
}
