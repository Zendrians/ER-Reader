import React, { useContext } from "react";
import TestLogo from "../../../../assets/reactSvg/TempLogo";
import PanelIcon from "../panelIcon/PanelIcon";
import ToggleThemeIcon from "../../../../assets/reactSvg/ToggleThemeIcon";
import { ThemeContext } from "../../context/ThemeContext";
import "./NavBar.css";
import Themes from "../../enums/Themes";

const NavBar: React.FC = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  const handleToggleTheme = () => {
    if (theme === Themes.Dark) {
      changeTheme(Themes.Light);
    } else {
      changeTheme(Themes.Dark);
    }
  };

  return (
    <nav className="navBar">
      <div className="navBar__logo">
        <TestLogo />
        <h1>Readify</h1>
      </div>
      <div className="navBar__tile">
        <h2 className="navBar__chapterName">Chapter Name</h2>
        <h2 className="navBar__bookName">Book Name</h2>
      </div>
      <div className="navBar__options">
        <PanelIcon onClick={handleToggleTheme}>
          <ToggleThemeIcon />
        </PanelIcon>
      </div>
    </nav>
  );
};

export default NavBar;
