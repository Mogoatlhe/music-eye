import image1 from "../../assets/splash-images/scr-shot-1.png";

const About = () => {
  return (
    <div className = "relative h-[100%] pt-24 bg-neutral-700 max-width overflow-hidden">
      <img src = {image1} alt = "song playing screenshot" className = "absolute ml-36 opacity-50"/>
    </div>
  );
}

export default About;