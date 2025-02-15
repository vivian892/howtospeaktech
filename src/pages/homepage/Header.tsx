import HeaderButtom from "../../components/header/HeaderButtom";
import HeaderTop from "../../components/header/HeaderTop";

const Header = () => {
  return (
    <header className="h-[calc(100vh-4rem)] min-h-[calc(100vh-4rem)] w-full flex flex-col justify-between bg-gradient-to-br from-white via-[#fffafa] to-[#f7fbf9] lg:bg-[radial-gradient(circle_at_center,_#f7fbf9_40%,_#fffafa_70%)]">
      <HeaderTop />
      <HeaderButtom />
    </header>
  );
};

export default Header;
