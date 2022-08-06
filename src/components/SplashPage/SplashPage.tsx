import Form from '../Common/Form/Form';
import About from './About';
import Header from './Header';

const SplashPage = () => {
  return (
    <div className="h-screen">
      <Header />
      <About />
      <Form />
    </div>
  );
};

export default SplashPage;
