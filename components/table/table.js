import Link from 'next/link';
import Image from 'next/image';

import styles from './table.module.scss';
import Actionbtn from '../actionBtn/actionBtn';

export default function Table() {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th scope="col">Books</th>
          <th scope="col">Author</th>
          <th scope="col">Status</th>
          <th scope="col">Actions</th>
          <th scope="col">More</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Link href="/">
              <a className={styles.text_inherit}>
                <div className={styles.d_lg}>
                  <div className={styles.img_rounded}>
                    <Image
                      src="/img/grit.jpg"
                      alt="book cover"
                      width={64}
                      height={98}
                    />
                  </div>
                  <div className={styles.spacing}>
                    <h4 className={styles.text_pri_hov}>
                      Grit: The powerof passion and perseverance
                    </h4>
                    <span className={styles.text_inherit}>
                      Added On 7 Dec, 2021
                    </span>
                    <p>Quantity: 120, Sales: KES. 32,000</p>
                  </div>
                </div>
              </a>
            </Link>
          </td>

          <td className={styles.align_middle}>
            <div className={styles.d_flex}>
              <h5>Angela DuckWorth</h5>
            </div>
          </td>

          <td className={styles.align_middle}>
            <span className={`${styles.badge_dot} ${styles.bg_grey}`} />
            Sold Out
          </td>
          <td className={styles.align_middle}>Text</td>
          <td className={styles.align_middle}>
            <Actionbtn
              path="/edit"
              color="grey"
              title="Edit"
              icon="ri-edit-line"
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
