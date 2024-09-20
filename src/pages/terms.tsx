import Head from "next/head"
import Link from "next/link"

import styles from "./index.module.css"
import Image from "next/image"
import { Header } from "~/components/Header"
import { Footer } from "~/components/Footer"
import MyHead from "~/components/MyHead"

export default function Home() {
  return (
    <>
      <MyHead />

      <div className={styles.wrapper}>
        <Header />
        <main className={styles.main}>
          <div className={styles.container}>
            <h2 className={styles.title}>
              Terms <span className={styles.titleSpan}>of Service</span>
            </h2>

            <div className={styles.section}>
              <p>
                Welcome to Erno Wever Software Solutions (Erno Wever OÜ). By
                accessing or using our services, you agree to comply with and be
                bound by the following Terms of Service. Please review these
                terms carefully, and if you do not agree to them, you must not
                use our services.
              </p>
              <p>
                Erno Wever OÜ is a limited company registered in Estonia with
                the registration code 16901136. Our VAT number is EE102699461,
                and our registered address is Sepapaja tn 6, 15551 Tallinn,
                Harju Maakond, Estonia. For any inquiries, please contact us via
                email at erno@ernowever.com.
              </p>
            </div>

            <div className={styles.section}>
              <h2>1. Acceptance of Terms</h2>
              <p>
                By using the services provided by Erno Wever Software Solutions
                (“we,” “us,” or “our”), you (“Client,” “User,” or “you”) agree
                to be bound by these Terms of Service, along with any other
                guidelines, policies, or rules referenced herein. These Terms of
                Service apply to all users, clients, and visitors of our website
                and services.
              </p>
            </div>

            <div className={styles.section}>
              <h2>2. Services Provided</h2>
              <p>
                We provide services including, but not limited to, consulting,
                software implementation, automation, and strategy development
                for startups, scale-ups, and other businesses. The scope of
                services provided will be defined by the agreements or contracts
                entered into by both parties.
              </p>
            </div>

            <div className={styles.section}>
              <h2>3. User Responsibilities</h2>
              <p>
                You agree to provide accurate and complete information when
                engaging with our services. You must not use our services for
                any unlawful or prohibited activities. Any misuse or breach of
                these terms may result in the termination of services. You are
                responsible for ensuring that any content you provide does not
                infringe on any intellectual property rights, privacy rights, or
                other legal obligations.
              </p>
            </div>

            <div className={styles.section}>
              <h2>4. Payments and Fees</h2>
              <p>
                Payment Terms: Payment for our services is due as outlined in
                the service agreement or invoice. Late payments may result in
                service suspension or additional fees. Refunds: Refunds are
                provided only in situations where services have not been
                delivered as per the agreement. We reserve the right to assess
                refund claims on a case-by-case basis.
              </p>
            </div>

            <div className={styles.section}>
              <h2>5. Intellectual Property</h2>
              <p>
                All content, software, and tools developed or used by Erno Wever
                Software Solutions remain the intellectual property of the
                client for all the work agreed upon.
              </p>
            </div>

            <div className={styles.section}>
              <h2>6. Confidentiality</h2>
              <p>
                Both parties agree to maintain the confidentiality of all
                proprietary or confidential information shared during the course
                of the project or service provision. This includes but is not
                limited to trade secrets, client information, and business
                strategies.
              </p>
            </div>

            <div className={styles.section}>
              <h2>7. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Erno Wever Software
                Solutions will not be liable for any indirect, incidental,
                special, or consequential damages that arise from the use of our
                services. This includes loss of profits, data, or goodwill, even
                if we have been advised of the possibility of such damages.
              </p>
            </div>

            <div className={styles.section}>
              <h2>8. Termination of Services</h2>
              <p>
                We reserve the right to terminate or suspend services if: The
                client breaches these Terms of Service. The client engages in
                any conduct that we determine, in our sole discretion, to be
                inappropriate or harmful to the service. In the event of
                termination, the client is responsible for any outstanding fees
                up to the termination date.
              </p>
            </div>

            <div className={styles.section}>
              <h2>9. Governing Law</h2>
              <p>
                These Terms of Service are governed by and construed in
                accordance with the laws of Estonia. Any legal action or
                proceeding arising from these terms shall be brought exclusively
                in the courts located in Estonia
              </p>
            </div>

            <div className={styles.section}>
              <h2>10. Modifications to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Service at any
                time. Any changes will be posted on our website, and continued
                use of the services after the changes will constitute your
                acceptance of the revised terms.
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
