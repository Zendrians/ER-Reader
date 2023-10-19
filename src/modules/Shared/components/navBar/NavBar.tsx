import React from "react";
import "./NavBar.css";
import TestLogo from "../../../../assets/reactSvg/TempLogo";

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
      <h2></h2>
    </nav>
  );
};

export default NavBar;
