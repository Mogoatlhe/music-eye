import Form from '../Common/Form/Form';
import About from './About';
import Footer from './Footer';
import Header from './Header';

const SplashPage = () => {
  return (
    <div className="h-screen lg:flex">
      <Header />
      <div className="lg:flex lg:ml-20 lg:w-full">
        <About />
        <Form />
      </div>
      <Footer />
    </div>
  );
};

export default SplashPage;
