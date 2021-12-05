import useSWR from 'swr';
import BooksTable from '../sections/booksTable';
import Layout from '../sections/layout';
import TitleSection from '../sections/titleSection';

export default function Books() {
  //   const fetcher = (url) => fetch(url).then((res) => res.json());

  //   const { data, error } = useSWR(`http://localhost:5000/api/v1/books`, fetcher);

  return (
    <Layout>
      <TitleSection
        title="Book Title"
        color="secondary"
        value="Back to all Books"
        path="/books"
        icon="ri-arrow-left-s-line"
      />
    </Layout>
  );
}
