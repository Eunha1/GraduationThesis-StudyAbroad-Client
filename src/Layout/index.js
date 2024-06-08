import Footer from '../Component/Footer/Footer';
import Header from '../Component/Header/Header';
import images from '../assets/images';
function PublicLayout({ children }) {
  return (
    <div>
      <Header />
      <div>
        <img
          src={images.background}
          alt="background"
          className="w-full lg:h-[400px] h-auto object-cover"
        />
      </div>
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default PublicLayout;
