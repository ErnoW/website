import React from "react"
import styles from "./footer.module.css"
import Link from "next/link"

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        <Link href="/privacy">Privacy Policy</Link> |{" "}
        <Link href="/terms">Terms of Service</Link>
      </p>
    </footer>
  )
}
