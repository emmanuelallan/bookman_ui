import Link from 'next/link';
import Image from 'next/image';

import styles from './table.module.scss';
import Actionbtn from '../actionBtn/actionBtn';

export default function Table({ data }) {
  function formatDate(date) {
    const newDate = new Date(date).toDateString().split(' ');
    return `${newDate[2]} ${newDate[1]}, ${newDate[3]}`;
  }
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th scope="col">Books</th>
          <th scope="col">Author</th>
          <th scope="col">Quantity</th>
          <th scope="col">Status</th>
          <th scope="col">Pdf</th>
          <th scope="col">More</th>
        </tr>
      </thead>
      <tbody>
        {data.map((book, index) => (
          <tr key={index}>
            <td>
              <Link href={`/books/${book.id}`}>
                <a className={styles.text_inherit}>
                  <div className={styles.d_lg}>
                    <div className={styles.img_rounded}>
                      <Image
                        src={`/img/${book.imgUrl}`}
                        alt={book.title}
                        width={64}
                        height={98}
                      />
                    </div>
                    <div className={styles.spacing}>
                      <h4 className={styles.text_pri_hov}>
                        {`${book.title}: ${book.subTitle}`}
                      </h4>
                      <span className={styles.text_inherit}>
                        Added On {formatDate(book.createdAt)}
                      </span>
                      <p>
                        <span
                          className={`${styles.badge_dot} ${styles.bg_success}`}
                        />{' '}
                        On Sale
                      </p>
                    </div>
                  </div>
                </a>
              </Link>
            </td>

            <td className={styles.align_middle}>
              <div className={styles.d_flex}>
                <h5>{book.author}</h5>
              </div>
            </td>

            <td className={styles.align_middle}>
              <div className={styles.d_flex}>
                <h5>{book.quantity}</h5>
              </div>
            </td>

            <td className={styles.align_middle}>
              <span
                className={`${styles.badge_dot} ${
                  book.quantity > 0 ? styles.bg_success : styles.bg_grey
                }`}
              />
              {book.quantity > 0 ? 'Available' : 'Sold Out'}
            </td>
            <td className={styles.align_middle}>
              {book.pdf.available ? book.pdf.fileSize : 'None'}
            </td>
            <td className={styles.align_middle}>
              <Actionbtn
                path="/edit"
                color="grey"
                title="Edit"
                icon="ri-edit-line"
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
