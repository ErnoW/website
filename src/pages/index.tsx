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
              Erno Wever <span className={styles.titleSpan}>Software</span>
              <span className={styles.titleSpan}>Solutions</span>
            </h2>

            <div className={styles.section}>
              <p>
                At Erno Wever Software Solutions, we specialize in empowering
                startups and scale-ups with cutting-edge automation and scalable
                software.
              </p>
              <p>
                Our expertise in the latest tools and technologies ensures that
                your business stays ahead of the curve—no unnecessary
                complexity, just results. Whether you are facing challenges in
                system design or need a boost in time-to-market, our tailored
                solutions will help you accelerate growth and maintain agility.
                We bring the expertise, so you can focus on building your
                vision. Let us handle the complexity, while you enjoy the
                benefits of streamlined, scalable software.
              </p>
            </div>

            <div className={styles.section}>
              <h2>About us</h2>
              <p>
                We are a team of software specialists dedicated to helping
                ambitious startups and scale-ups achieve their full potential
                through automation, consulting, and cutting-edge technology. At
                Erno Wever Software Solutions, we combine years of experience in
                both frontend and backend development with a deep knowledge of
                the latest tools and strategies. Our mission is simple: to
                provide scalable, maintainable solutions that empower your team
                to iterate faster, work smarter, and grow without limits.
              </p>
              <p>
                Our agile approach ensures that your project not only gets off
                the ground but accelerates towards success—no matter how complex
                or fast-moving the environment. We deliver on time, every time,
                with a focus on delivering hassle-free, sustainable software
                that grows alongside your business.
              </p>
            </div>

            <div className={styles.section}>
              <h2>Facing Growth Challenges? We’ve Got You Covered</h2>
              <h3>Need for Professional Expertise</h3>
              <p>
                Are your in-house developers overwhelmed or lacking specific
                skills? We fill the gaps, offering not just advice but hands-on
                implementation, ensuring your project stays on track.
              </p>
              <h3>Lack of Technical Knowledge</h3>
              <p>
                Many startups and scale-ups hit a wall due to insufficient
                technical expertise. That’s where we step in, providing
                consulting that guides your team through complex challenges.
                Whether it’s system architecture or refining your process, we
                offer the expertise to push you forward.
              </p>
              <h3>Struggling with Scalability</h3>
              <p>
                Growth is exciting, but without a scalable foundation, it can
                turn into a nightmare. Our solutions are built to scale—whether
                you are handling a few hundred users or millions, our
                architectures are ready to grow with you.
              </p>
            </div>

            <div className={styles.section}>
              <h2>Solutions</h2>
              <h3>Consulting</h3>
              <p>
                Need a second opinion or expert advice? We provide strategic
                consulting services to help you fine-tune your software,
                processes, and architecture for peak performance.
              </p>
              <h3>Implementation</h3>
              <p>
                Don’t just strategize—execute. We help you build your vision
                with hands-on, agile development, ensuring your product reaches
                the market quickly and scales effortlessly. Automation:
                Automation isn’t a buzzword; it’s a necessity. We implement
                smart automation solutions that save you time, reduce errors,
                and allow your team to focus on high-impact tasks.
              </p>
              <h3>Strategy</h3>
              <p>
                Looking for long-term growth? We help you develop a tech
                strategy that evolves with your business, keeping you ahead of
                the competition and future-proofing your software.
              </p>
            </div>

            <div className={styles.section}>
              <h2>Why Choose Us?</h2>
              <ul>
                <li>
                  We specialize in startups and scale-ups, delivering solutions
                  that scale with your business.
                </li>
                <li>
                  We use the latest tools and keep your software agile, so you
                  are always ready for the next challenge.
                </li>
                <li>
                  Our automation expertise means less manual work for your team
                  and more time spent on innovation.
                </li>
              </ul>
            </div>

            <div className={styles.section}>
              <h2>How we work</h2>
              <ul>
                <li>
                  Agile Iterations: Fast-paced environments require flexible
                  solutions. We work in rapid iterations, so you can see
                  progress early and often.
                </li>
                <li>
                  Collaborative Approach: You’re not just hiring us—you’re
                  partnering with a team that becomes an extension of yours.
                </li>
                <li>
                  Focused on Results: From day one, we’re laser-focused on
                  delivering measurable results that align with your goals.
                </li>
              </ul>
            </div>

            <div className={styles.section}>
              <h2>Contact</h2>
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
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
