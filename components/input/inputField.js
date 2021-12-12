import styles from './inputField.module.scss';

export default function InputField({
  size,
  label,
  type,
  placeholder,
  message,
    min,
    name,
    value,
    onChange
}) {
  return (
    <div className={`${styles.mb_mt} ${styles[size]}`}>
      <label className="label">{label}</label>
        <span style={{color: 'red', marginLeft: 5}}>*</span>
      <input
        type={type}
        placeholder={placeholder}
        className="form_control text_dark"
        min={min}
        name={name}
        value={value}
        onChange={onChange}
      />
      <small className={`${styles.message} ${styles.error}`}>{message}</small>
    </div>
  );
}
