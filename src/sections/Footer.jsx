import logo from "../assets/icons/logo.png";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-10 pt-10 bg-black">
      <img src={logo} alt="" className="h-[72px] w-52" />
      <p className="w-full py-5 text-center text-[#666] border-t-2 border-[#666] boder-solid">
        Copyright © 2020. Powered by{" "}
        <span className="text-[#fee500]">Dimensions Communications.</span>
      </p>
    </footer>
  );
};

export default Footer;
