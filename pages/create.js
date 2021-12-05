import AddBook from '../sections/addBook';
import Layout from '../sections/layout';
import TitleSection from '../sections/titleSection';

export default function Create() {
  return (
    <Layout>
      <TitleSection
        title="Create a Book"
        color="secondary"
        value="Back to all Books"
        path="/books"
        icon="ri-arrow-left-s-line"
      />

      <AddBook />
    </Layout>
  );
}
