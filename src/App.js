import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle";
import { LoginPage } from "./pages/LoginPage";
import { MainPage } from "./pages/MainPage";
import { QuestionPage } from "./pages/QuestionPage";
import { SendPage } from "./pages/SendPage";
import { ReplyPage } from "./pages/ReplyPage";
import { ProfilePage } from "./pages/ProfilePage";
import { HistoryPage } from "./pages/HistoryPage";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <>
      <GlobalStyle />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/question/:id" element={<QuestionPage />} />
        <Route path="/send/:id" element={<SendPage />} />
        <Route path="/reply/:id" element={<ReplyPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </>
  );
}

export default App;
