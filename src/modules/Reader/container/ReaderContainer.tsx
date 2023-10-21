import React from "react";
import ReaderLayout from "../components/readerLayout/ReaderLayout";
import PanelContextProvider from "../context/PanelContext";

const ReaderContainer: React.FC = () => {
  return (
    <PanelContextProvider>
      <ReaderLayout />
    </PanelContextProvider>
  );
};

export default ReaderContainer;
