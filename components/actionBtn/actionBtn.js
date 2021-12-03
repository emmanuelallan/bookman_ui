import Link from 'next/link';
import styles from './actionBtn.module.scss';

export default function Actionbtn({ path, title, icon, color }) {
  return (
    <Link href={path}>
      <a className={`${styles.small} ${styles[color]}`}>
        <i className={icon} /> {title}
      </a>
    </Link>
  );
}
