import { Route, Routes } from "react-router-dom";
import ReaderContainer from "./modules/Reader/container/ReaderContainer";
import EditorContainer from "./modules/Editor/container/EditorContainer";
import ThemeProvider from "./modules/Shared/context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<ReaderContainer />}></Route>
        <Route path="/editor" element={<EditorContainer />}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
