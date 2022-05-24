import { createGlobalStyle } from "styled-components";
import Header from "./components/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mypage from "./components/mypage";
import Meal from "./components/meal";
import Section from "./components/section";
import Schedule from "./components/schdule";
import { RecoilRoot } from "recoil";
import Board from "./components/board";
import LoginPage from "./components/loginPage";
const GlobalStyle = createGlobalStyle`
body {
  background: #f4f5f8;
}
`;
function App() {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <GlobalStyle />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Meal />
                  <Section />
                </>
              }
            />
            <Route
              path="/login"
              element={
                <>
                  <LoginPage />
                  <Meal />
                  <Section />
                </>
              }
            />
            <Route path="/login/mypage" element={<Mypage />} />
            <Route path="/login/board" element={<Board />} />
            <Route path="/login/schedule" element={<Schedule />} />
          </Routes>
          <Header />
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}

export default App;
