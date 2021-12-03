import Layout from '../sections/layout';
import TitleSection from '../sections/titleSection';

export default function Payments() {
  return (
    <Layout>
      <TitleSection
        title="Payments"
        color="primary"
        value="Add Payment"
        path="/new"
        icon="ri-refund-line"
      />
    </Layout>
  );
}
