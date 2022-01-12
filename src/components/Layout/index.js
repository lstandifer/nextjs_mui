import Footer from '../Footer';
import Header from '../Header';
import Navbar from 'components/Navbar';
import Sidedrawer from 'components/Sidedrawer';

export const navLinks = [
  { title: `home`, path: `/` },
  { title: `inventory`, path: `/inventory` },
  { title: `login`, path: `/login` },
  { title: `registration`, path: `/registration` },
  { title: `users`, path: `/users` },
];

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />
      <Sidedrawer direction={'left'} navLinks={navLinks} />
      <div style={{ padding: 20 }}>{children}</div>
      <Footer />
    </>
  );
};
export default Layout;
