import Header from '../components/header/header';
import SideBar from '../components/sidebar/sidebar';
import Main from '../sections/main';

export default function Home() {
  return (
    <Main>
      <SideBar />
      <div className="page_content">
        <Header />
      </div>
    </Main>
  );
}
