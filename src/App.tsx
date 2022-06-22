import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "pages/Home";
import Character from "pages/Character";
import Page404 from "pages/Page404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="characters">
          <Route path=":id" element={<Character />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
