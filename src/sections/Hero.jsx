import hero from "../assets/hero.jpg";

const Hero = () => {
  return (
    <header className="flex justify-center bg-black">
      <img src={hero} alt="" />
    </header>
  );
};

export default Hero;
