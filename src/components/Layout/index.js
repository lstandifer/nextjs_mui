import Footer from '../Footer';
import Header from '../Header';
import Navbar from 'components/Navbar';
import LeftSidebar from 'components/SideDrawers/LeftSideDrawer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />
      <LeftSidebar />
      <div style={{ padding: 20 }}>{children}</div>
      <Footer />
    </>
  );
};
export default Layout;
