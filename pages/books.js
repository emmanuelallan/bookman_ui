import BooksTable from '../sections/booksTable';
import Layout from '../sections/layout';
import TitleSection from '../sections/titleSection';

export default function Books() {
  return (
    <Layout>
      <TitleSection
        title="Books"
        color="primary"
        value="Add Book"
        path="/new"
        icon="ri-add-line"
      />

      <BooksTable />
    </Layout>
  );
}
