import styles from './inputField.module.scss';

export default function InputField({
  size,
  label,
  type,
  placeholder,
  message,
}) {
  return (
    <div className={`${styles.mb_mt} ${styles[size]}`}>
      <label className="label">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="form_control text_dark"
      />
      <small className={`${styles.message} ${styles.error}`}>{message}</small>
    </div>
  );
}
