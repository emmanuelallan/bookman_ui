import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import styles from './sidebar.module.scss';
import { navLinks } from './data';

export default function SideBar({ toggled }) {
  const router = useRouter();
  const pathname = router.pathname.replace('/', '');
  return (
    <nav
      className={`${styles.navbar_vertical} navbar ${
        toggled ? 'toggled_1' : ''
      }`}
    >
      <div className={styles.slim_scroll_div}>
        <div className={styles.nav_scroller}>
          {/* logo */}
          <Link href="/">
            <a className={styles.navbar_brand}>
              <Image
                src="/img/bookman_logo.svg"
                alt="BookMan Logo"
                width={108}
                height={30}
                className={styles.logo}
              />
            </a>
          </Link>

          {/* Nav Links */}
          <ul className={styles.navbar_nav}>
            <li className={styles.nav_item}>
              <div className={styles.nav_heading}>ADMIN</div>
            </li>

            {navLinks.map((link, index) => (
              <li
                key={index}
                className={`${styles.nav_item_h} ${
                  pathname === link.title && styles.active
                }`}
              >
                <Link href={`/${link.title}`}>
                  <a className={styles.nav_link}>
                    <i className={`${styles.nav_icon} ${link.icon}`} />{' '}
                    {link.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>

          {/* settings */}
          <div className={styles.nav_item_h}>
            <Link href="/settings">
              <a className={styles.nav_link}>
                <i className={`${styles.nav_icon} ri-settings-4-line`} />{' '}
                settings
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.slim_scroll_bar} />
        <div className={styles.slim_scroll_rail} />
      </div>
    </nav>
  );
}
