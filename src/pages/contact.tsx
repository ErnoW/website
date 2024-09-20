import Head from "next/head"
import Link from "next/link"

import styles from "./index.module.css"
import Image from "next/image"
import { Footer } from "~/components/Footer"
import { Header } from "~/components/Header"

export default function Home() {
  return (
    <>
      <Head>
        <title>Erno Wever</title>
        <meta name="description" content="Erno Wever Software Solutions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.wrapper}>
        <Header />
        <main className={styles.main}>
          <div className={styles.container}>
            <h2 className={styles.title}>
              Contact <span className={styles.titleSpan}>us</span>
            </h2>

            <div className={styles.section}>
              <p>
                We’re here to solve your most complex technical challenges, and
                we’re ready to do it on your timeline. Whether you need
                consulting, implementation, or a full-scale automation strategy,
                we’ve got the expertise you need to succeed. Contact us today
                and let’s make your project a reality—hassle-free.
              </p>
              <p>
                Reach out to us at{" "}
                <a href="mailto:erno@ernowever.com">erno@ernowever.com</a> for
                any inquiries
              </p>
            </div>

            <div className={styles.section}>
              <h2>Business details</h2>
              <ul style={{ margin: 0 }}>
                <li>Erno Wever OÜ (registration number: 16901136)</li>
                <li>
                  Address: Sepapaja tn 6, 15551 Tallinn, Harju Maakond, Estonia
                </li>
                <li>VAT: EE102699461</li>
              </ul>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
