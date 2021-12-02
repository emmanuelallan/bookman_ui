import Image from 'next/image';

import styles from './header.module.scss';

export default function Header() {
  return (
    <header>
      <nav className={`${styles.navbar_default} navbar`}>
        <div className={styles.navbar_toggle}>
          <i className="ri-menu-fold-line" />
        </div>

        <ul className={styles.navbar_right}>
          <li className={styles.nav_r_link}>
            <div className={styles.avatar}>
              <div>
                <Image
                  src="/img/avatar.jpg"
                  alt="avatar"
                  width={40}
                  height={40}
                />
              </div>
              <div className={styles.avatar_info}>
                <h5 className="h5">Admin</h5>
                <p>admin@bookman.store</p>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
