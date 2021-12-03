import Layout from '../sections/layout';
import TitleSection from '../sections/titleSection';

export default function Discounts() {
  return (
    <Layout>
      <TitleSection
        title="Discounts"
        color="primary"
        value="Create New Discount"
        path="#"
        icon="ri-price-tag-3-line"
      />
    </Layout>
  );
}
