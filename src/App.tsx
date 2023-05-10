import React from "react";
import { IntlProvider } from "react-intl";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  useLocation,
  Route,
  Routes,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import { messages } from "./messages";
import { BackgroundPage } from "./components/ui/BackgroundPage";
import StarsBackground from "./assets/stars_background.png";
import Background from "./assets/background.png";
import { Header } from "./components/Header";
import { routs } from "./routs";
import { LoginPage } from "./components/routs/login/LoginPage";
import { EnterCodePage } from "./components/routs/login/EnterCodePage";
import { UsersPage } from "./components/routs/users/UsersPage";
import { ValuationsPage } from "./components/routs/valuations/ValuationsPage";

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: keyof typeof messages;
    }
  }
}

const App = () => (
  <IntlProvider messages={messages} locale="ru" defaultLocale="ru">
    <StyledApp>
      <Router>
        <RouterContent />
      </Router>
    </StyledApp>
  </IntlProvider>
);

const RouterContent = () => {
  const navigate = useLocation();
  return (
    <BackgroundPage
      background={
        [routs.LOGIN].includes(navigate.pathname) ? StarsBackground : Background
      }
    >
      <ToastContainer position="bottom-right" theme="colored" />
      <Header />
      <Routes>
        <Route path={routs.LOGIN} element={<LoginPage />} />
        <Route path={routs.USERS} element={<UsersPage />} />
        <Route path={routs.ENTER_CODE} element={<EnterCodePage />} />
        <Route path={routs.VALUATION} element={<ValuationsPage />} />
        {/* <Route path ="*" element={<Navigate to={{ pathname: routs.START }} />} /> */}
      </Routes>
    </BackgroundPage>
  );
};

const StyledApp = styled.div`
  height: 100vh;
  overflow: auto;

  font-family: "Roboto", sans-serif;
  font-size: 18px;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default App;
