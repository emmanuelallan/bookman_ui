import useSWR from 'swr';
import Layout from "../../sections/layout";
import TitleSection from "../../sections/titleSection";
import BookInfo from '../bookInfo';
import {useRouter} from "next/router";

export default function Books() {
    const router = useRouter()
    const {id} = router.query

    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error } = useSWR(`http://localhost:5000/api/v1/books/${id}`, fetcher);

  return (
    <Layout>
      <TitleSection
        title="Book Title"
        color="secondary"
        value="Back to all Books"
        path="/books"
        icon="ri-arrow-left-s-line"
      />
        <BookInfo data={data} error={error} />
    </Layout>
  );
}
