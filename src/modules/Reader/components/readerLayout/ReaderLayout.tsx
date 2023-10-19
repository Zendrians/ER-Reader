import React from "react";
import './ReaderLayout.css';
import NavBar from "../../../Shared/components/navBar/NavBar";
import ReaderMainArea from "../readerMainArea/ReaderMainArea";


const ReaderLayout: React.FC = () => {
  return (
    <main className="readerLayout">
      <NavBar />
      <ReaderMainArea />
    </main>
  );
};

export default ReaderLayout;
