import Link from "next/link";
import Head from "next/head";
import styles from "./Header.module.css";
//import { DiCssdeck } from 'react-icons/di';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

export default function Header() {
  return (
    <div className={styles.container}>
      <Head>
        <title>David Isumba</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.home}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', color:"white" }}>
           David Isumba
        </Link>
      </div>

      <div className={styles.navbar}>
        <li className={styles.navlist}>
          <Link className={styles.navlink} href="#about">
            About
          </Link>
        </li>
        <li className={styles.navlist}>
          <Link className={styles.navlink} href="#projects">
            Projects
          </Link>
        </li>
        <li className={styles.navlist}>
          <Link className={styles.navlink} href="#skills">
            Skills
          </Link>
        </li>
        <li className={styles.navlist}>
          <Link className={styles.navlink} href="../../pages/api/blog">
            Blog
          </Link>
        </li>
      </div>
      <div className={styles.navcontacts}>
        <Link className={styles.contact} href="https://github.com/prototypedave">
          <AiFillGithub size="3rem" />
        </Link>
        <Link className={styles.contact} href="https://linkedin.com">
          <AiFillLinkedin size="3rem" />
        </Link>
      </div>
    </div>
  )
}