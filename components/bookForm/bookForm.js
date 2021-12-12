import InputField from '../input/inputField';
import styles from './bookForm.module.scss';
import FilePondHook from '../../hooks/filepond/filepond';

export default function BookForm({
  handleFormSubmit,
  error,
  formData,
  handleChange,
  coverImage,
  setCoverImage,
  pdf,
  setPdf,
}) {
  return (
    <form
      className="row"
      onSubmit={handleFormSubmit}
      encType="multipart/form-data"
    >
      <p style={{ color: 'red' }}>{error.all}</p>
      <InputField
        size="col_12"
        label="Title"
        type="text"
        placeholder="Enter a book title"
        message="e.g Atomic Habit"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />

      <InputField
        size="col_12"
        label="Sub Title"
        type="text"
        placeholder="Subtitle"
        message="e.g An Easy &amp; Proven Way to Build Good Habits &amp; Break Bad Ones"
        name="subTitle"
        value={formData.subTitle}
        onChange={handleChange}
      />

      <div className="col_12 mb_3">
        <label className="label">Description</label>
        <textarea
          rows="3"
          className="form_control text_dark"
          placeholder="e.g Atomic Habits will reshape the way you think about progress and success..."
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>

      <InputField
        size="col_6"
        label="Price"
        type="number"
        min="0"
        placeholder="What's the price"
        message=""
        name="price"
        value={formData.price}
        onChange={handleChange}
      />

      <InputField
        size="col_6"
        label="Quantity"
        type="number"
        min="0"
        placeholder="How many books are in stock?"
        message=""
        name="quantity"
        value={formData.quantity}
        onChange={handleChange}
      />

      <div className="col_12">
        <label className="label">Upload Cover Image</label>
        <FilePondHook files={coverImage} setFiles={setCoverImage} />
        <p style={{ color: 'red' }}>{error.image}</p>
      </div>

      <InputField
        size="col_12"
        label="Author"
        type="text"
        placeholder="Author. Use comma for multiple authors"
        message=""
        name="author"
        value={formData.author}
        onChange={handleChange}
      />

      <InputField
        size="col_4"
        label="ISBN"
        type="text"
        placeholder="That barcode number from behind"
        message=""
        name="ISBN"
        value={formData.ISBN}
        onChange={handleChange}
      />

      <InputField
        size="col_4"
        label="Average Ratings"
        type="text"
        placeholder="e.g 4.8"
        message="Amazon ratings average"
        name="average"
        value={formData.r_average}
        onChange={handleChange}
      />

      <InputField
        size="col_4"
        label="Global Ratings 2 e.g 11,252"
        type="text"
        placeholder="e.g 11587"
        message="Amazon ratings number of people"
        name="global"
        value={formData.r_global}
        onChange={handleChange}
      />

      <InputField
        size="col_4"
        label="pages"
        type="number"
        min="0"
        placeholder="How many pages is the book?"
        message=""
        name="pages"
        value={formData.pages}
        onChange={handleChange}
      />

      <InputField
        size="col_4"
        label="Publication Date"
        type="text"
        placeholder="MM-DD-YYYY"
        message=""
        name="pubDate"
        value={formData.pubDate}
        onChange={handleChange}
      />

      <InputField
        size="col_4"
        label="language"
        type="text"
        placeholder="What lingua is the book in"
        message=""
        name="language"
        value={formData.language}
        onChange={handleChange}
      />

      <div className="col_6">
        <label className="label">Upload a PDF (optional)</label>
        <FilePondHook files={pdf} setFiles={setPdf} />
        <p style={{ color: 'red' }}>{error.pdf}</p>
      </div>

      <InputField
        size="col_6"
        label="PDF price"
        type="number"
        min="0"
        placeholder="Price for the pdf version"
        message={error.pdf_price}
        name="pdf_price"
        value={formData.pdf_price}
        onChange={handleChange}
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
