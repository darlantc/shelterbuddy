import Logo from "../../assets/images/logo.svg";

const Header = () => {
  return (
    <header>
      <img id="logo" src={Logo} alt="Shelter Buddy logo"></img>
    </header>
  );
};

export default Header;
