import Form from '../Common/Form/Form';
import About from './About';
import Footer from './Footer';
import Header from './Header';

const SplashPage = () => {
  return (
    <div className="h-screen">
      <Header />
      <About />
      <Form />
      <Footer />
    </div>
  );
};

export default SplashPage;
