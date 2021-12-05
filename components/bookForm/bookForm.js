import InputField from '../input/inputField';
import styles from './bookForm.module.scss';
import FilePondHook from '../filepond/filepond';

export default function BookForm({ handleFormSubmit }) {
  return (
    <form method="post" className="row" onSubmit={handleFormSubmit}>
      <InputField
        size="col_9"
        label="Title"
        type="text"
        placeholder="Enter a book title"
        message="e.g Grit"
      />

      <InputField
        size="col_9"
        label="Sub Title"
        type="text"
        placeholder="Subtitle"
        message="e.g The power of Passion and perseverance"
      />

      <div className="col_12 mb_3">
        <label className="label">Description</label>
        <textarea
          rows="3"
          className="form_control text_dark"
          placeholder="Book Description"
        />
      </div>

      <InputField
        size="col_6"
        label="Price"
        type="number"
        placeholder="What's the price"
        message=""
      />

      <InputField
        size="col_6"
        label="Quantity"
        type="number"
        placeholder="How many books are in stock?"
        message=""
      />

      <label className="label">Upload Cover Image</label>
      <FilePondHook />

      <InputField
        label="Author"
        type="text"
        placeholder="Author's name"
        message=""
      />

      <InputField
        size="col_4"
        label="ISBN"
        type="text"
        placeholder="That barcode number from behind"
        message=""
      />

      <InputField
        size="col_4"
        label="Ratings"
        type="text"
        placeholder="e.g 4.8"
        message="Amazon ratings average"
      />

      <InputField
        size="col_4"
        label="Ratings 2 e.g 11,252"
        type="text"
        placeholder="e.g 11587"
        message="Amazon ratings number of people"
      />

      <InputField
        size="col_6"
        label="pages"
        type="number"
        placeholder="How many pages is the book?"
        message=""
      />

      <InputField
        size="col_6"
        label="Publication Date"
        type="text"
        placeholder="MM-DD-YYYY"
        message=""
      />

      <InputField
        size="col_4"
        label="language"
        type="text"
        placeholder="What lingua is the book in"
        message=""
      />

      <InputField
        size="col_4"
        label="pdf?"
        type="text"
        placeholder="Is the pdf version available"
        message=""
      />

      <InputField
        size="col_4"
        label="PDF price"
        type="number"
        placeholder="Price for the pdf version"
        message=""
      />

      <div>
        <button
          type="submit"
          className={`${styles.btn_submit} ${styles.btn_primary}`}
        >
          Publish
        </button>
      </div>
    </form>
  );
}
