import React from "react";
import "./NavBar.css";
import TestLogo from "../../../../assets/reactSvg/TempLogo";
import PanelIcon from "../panelIcon/PanelIcon";
import ToggleThemeIcon from "../../../../assets/reactSvg/ToggleThemeIcon";

const NavBar: React.FC = () => {
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
        <PanelIcon>
          <ToggleThemeIcon />
        </PanelIcon>
      </div>
    </nav>
  );
};

export default NavBar;
