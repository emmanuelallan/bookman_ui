import Layout from '../sections/layout';
import TitleSection from '../sections/titleSection';

export default function Orders() {
  return (
    <Layout>
      <TitleSection
        title="Orders"
        color="secondary"
        value="Export CSV"
        path="#"
        icon="ri-folder-chart-line"
      />
    </Layout>
  );
}
