import image1 from '../../assets/splash-images/scr-shot-1.png';
import image2 from '../../assets/splash-images/scr-shot-2.png';
import image3 from '../../assets/splash-images/scr-shot-3.png';
import image4 from '../../assets/splash-images/scr-shot-4.jpg';

const About = () => {
  return (
    <div className="relative h-[100%] pt-24 bg-neutral-700 overflow-hidden">
      <img
        src={image1}
        alt="song playing screenshot"
        className="absolute ml-36 opacity-40"
      />
      <img
        src={image2}
        alt="song playing screenshot"
        className="absolute mt-80 -ml-32 opacity-40"
      />
      <img
        src={image3}
        alt="song playing screenshot"
        className="absolute opacity-40 w-8/12 mt-16 ml-8"
      />
      <img
        src={image4}
        alt="song playing screenshot"
        className="absolute opacity-40 w-8/12 mt-72 ml-28"
      />
    </div>
  );
};

export default About;
