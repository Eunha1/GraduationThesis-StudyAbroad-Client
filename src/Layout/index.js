import Footer from './Footer/Footer';
import Header from './Header/Header';

function PublicLayout({ children }) {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default PublicLayout;
