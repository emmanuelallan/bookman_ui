import Layout from '../sections/layout';
import TitleSection from '../sections/titleSection';

export default function Settings() {
  return (
    <Layout>
      <TitleSection
        title="Settings"
        color="secondary"
        value="Logout"
        path="#"
        icon="ri-logout-circle-r-line"
      />
    </Layout>
  );
}
