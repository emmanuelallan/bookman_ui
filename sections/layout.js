import { useState } from 'react';
import Header from '../components/header/header';
import SideBar from '../components/sidebar/sidebar';
import Main from './main';

export default function Layout({ children }) {
  const [toggled, setToggled] = useState(false);
  function handleToggle() {
    setToggled(!toggled);
  }
  return (
    <Main toggled={toggled}>
      <SideBar toggled={toggled} />
      <div className={`page_content ${toggled ? 'toggled' : ''}`}>
        <Header handleToggle={handleToggle} />
        <div className="container_fluid">{children}</div>
      </div>
    </Main>
  );
}
