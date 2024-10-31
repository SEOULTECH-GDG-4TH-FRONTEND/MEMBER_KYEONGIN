import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle";
import { LoginPage } from "./pages/LoginPage";
import { MainPage } from "./pages/MainPage";
import { QuestionPage } from "./pages/QuestionPage";
import { SendPage } from "./pages/SendPage";
import { ReplyPage } from "./pages/ReplyPage";
import { ProfilePage } from "./pages/ProfilePage";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/question" element={<QuestionPage />} />
        <Route path="/send" element={<SendPage />} />
        <Route path="/reply" element={<ReplyPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </>
  );
}

export default App;
