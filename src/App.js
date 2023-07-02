import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import GlobalStyle from "./pages/GlobalStyle/GlobalStyle";
import ArticlePage from "./pages/ArticlePage";
import Notfound from "./pages/Notfound";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/article/:articleId" element={<ArticlePage />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
