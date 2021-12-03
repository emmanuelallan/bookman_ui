import styles from './search.module.scss';

export default function Search() {
  return (
    <form className={`col_12 ${styles.form}`}>
      <span className={styles.search_icon}>
        <i className="ri-search-2-line" />
      </span>
      <input
        type="text"
        className={`form_control ${styles.ps}`}
        placeholder="Search Book, Author, ISBN..."
      />
    </form>
  );
}
