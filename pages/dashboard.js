import Layout from '../sections/layout';
import TitleSection from '../sections/titleSection';

export default function Dashboard() {
  return (
    <Layout>
      <TitleSection
        title="Dashboard"
        color="primary"
        value="Settings"
        path="/settings"
        icon="ri-settings-3-line"
      />
    </Layout>
  );
}
