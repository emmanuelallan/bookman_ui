import BookForm from '../components/bookForm/bookForm';

export default function AddBook({
  handleFormSubmit,
  handleChange,
  formData,
  coverImage,
  setCoverImage,
  pdf,
  setPdf,
  error,
}) {
  return (
    <div className="row">
      <div className="col_9">
        <div className="card_b_0">
          <div className="card_header">
            <h4 className="mb_0">Enter Book Details</h4>
          </div>
          <div className="card_body">
            <BookForm
              handleFormSubmit={handleFormSubmit}
              handleChange={handleChange}
              error={error}
              formData={formData}
              coverImage={coverImage}
              setCoverImage={setCoverImage}
              pdf={pdf}
              setPdf={setPdf}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
