import { Route, Routes } from "react-router-dom";
import ReaderContainer from "./modules/Reader/container/ReaderContainer";
import EditorContainer from "./modules/Editor/container/EditorContainer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ReaderContainer />}></Route>
      <Route path="/editor" element={<EditorContainer />}></Route>
    </Routes>
  );
}

export default App;
