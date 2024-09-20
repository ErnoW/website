import Head from "next/head"
import Link from "next/link"

import styles from "./index.module.css"
import Image from "next/image"
import { Header } from "~/components/Header"
import { Footer } from "~/components/Footer"

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
              Privacy <span className={styles.titleSpan}>Policy</span>
            </h2>

            <div className={styles.section}>
              <p>
                Erno Wever OÜ {'("we," "us," or "our")'} respects your privacy
                and is committed to protecting your personal data. This Privacy
                Policy outlines how we collect, use, and protect your personal
                information when you use our website and services. By using our
                services, you agree to the collection and use of information in
                accordance with this policy.
              </p>
            </div>

            <div className={styles.section}>
              <h2>1. Information We Collect</h2>
              <p>
                We may collect the following personal information when you
                interact with us: Contact Information: Including your name,
                email address, and phone number when you submit inquiries or
                request services. Business Information: Details related to your
                company, such as business name, address, and VAT information.
                Usage Data: Information about how you interact with our website,
                such as your IP address, browser type, pages visited, and the
                time and date of your visit. Cookies and Tracking Technologies:
                Our website may use cookies and similar tracking technologies to
                monitor site activity and improve the user experience. You can
                manage cookie preferences in your browser settings.
              </p>
            </div>

            <div className={styles.section}>
              <h2>2. How We Use Your Information</h2>
              <p>
                We collect and use your personal information for the following
                purposes: To Provide Services: Your contact and business
                information is used to deliver consulting, implementation,
                automation, and other services you request. To Improve Our
                Website: Usage data helps us analyze website traffic and make
                improvements to our online services. To Communicate with You: We
                use your contact information to respond to inquiries, send
                project updates, and provide customer support. For Legal and
                Compliance Purposes: We may use your personal information to
                comply with legal obligations and for record-keeping purposes.
              </p>
            </div>

            <div className={styles.section}>
              <h2>3. Data Protection</h2>
              <p>
                We implement appropriate technical and organizational measures
                to protect your personal data against unauthorized access, loss,
                or destruction. Your information is stored securely and is only
                accessible by authorized personnel.
              </p>
            </div>

            <div className={styles.section}>
              <h2>4. Third-Party Sharing</h2>
              <p>
                We do not sell, rent, or share your personal information with
                third parties, except in the following cases: Service Providers:
                We may share your information with third-party service providers
                who assist us in delivering our services, such as cloud hosting
                or payment processors. These providers are contractually
                obligated to protect your information. Legal Requirements: We
                may disclose your information if required by law or in response
                to valid requests from public authorities.
              </p>
            </div>

            <div className={styles.section}>
              <h2>5. Your Rights</h2>
              <p>
                As a user in the European Union (EU), you have the following
                rights under the GDPR: Right to Access: You can request a copy
                of the personal data we hold about you. Right to Rectification:
                You can ask us to correct inaccurate or incomplete data. Right
                to Erasure: You can request the deletion of your personal data,
                subject to certain legal obligations. Right to Restrict
                Processing: You can request that we limit the processing of your
                personal data in certain circumstances. Right to Data
                Portability: You can request to receive your data in a
                structured, commonly used format. Right to Object: You have the
                right to object to our processing of your personal data. To
                exercise any of these rights, please contact us at
                erno@ernowever.com.
              </p>
            </div>

            <div className={styles.section}>
              <h2>6. Data Retention</h2>
              <p>
                We retain your personal data only for as long as necessary to
                fulfill the purposes outlined in this policy, including legal,
                accounting, or reporting requirements. If you request the
                deletion of your data, we will remove it from our systems unless
                retention is required by law.
              </p>
            </div>

            <div className={styles.section}>
              <h2>7. Cookies</h2>
              <p>
                Our website may use cookies to enhance your browsing experience.
                Cookies are small data files stored on your device that help us
                analyze traffic or improve your user experience. You can disable
                cookies via your browser settings, but this may impact the
                functionality of certain features on our site.
              </p>
            </div>

            <div className={styles.section}>
              <h2>8. Changes to this Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page, and the updated policy will take
                effect once published. We encourage you to review this policy
                periodically for any updates.
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
