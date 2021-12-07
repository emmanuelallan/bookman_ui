import useSWR from 'swr';
import Layout from '../sections/layout';
import TitleSection from '../sections/titleSection';
import BookInfo from './bookInfo';

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

      <BookInfo />
    </Layout>
  );
}
