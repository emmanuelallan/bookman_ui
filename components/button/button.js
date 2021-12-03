import Link from 'next/link';
import styles from './button.module.scss';

export default function Button({ link, color, title, icon }) {
  return (
    <Link href={link}>
      <a className={`${styles.btn} ${styles[color]}`}>
        <i className={icon} /> {title}
      </a>
    </Link>
  );
}
