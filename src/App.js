import { useState, createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import WebLayout from "./layouts/web/WebLayout";

import Main from "./routes/Main";
import AuthPage from "./routes/AuthPage";
import PrivacyPolicy from "./routes/PrivacyPolicy";
import Terms from "./routes/Terms";

import "rsuite/dist/rsuite.min.css";
import "./styles/customRsuite.css";

import "./styles/global.scss";
import "./styles/responsive.scss";
import "./styles/webLayout.scss";
import "./styles/authLayout.scss";
import "./styles/quotesCycler.scss";
import "./styles/privacyPolicy.scss";
import "./styles/terms.scss";
import "./styles/main.scss";

export const DataContext = createContext();

const App = () => {
  const [authUser, setAuthUser] = useState(localStorage.getItem("user"));

  return (
    <div className="App">
      <WebLayout>
        <DataContext.Provider
          value={{
            user: [authUser, setAuthUser],
          }}
        >
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<Terms />} />
            </Routes>
          </BrowserRouter>
        </DataContext.Provider>
      </WebLayout>
    </div>
  );
};
export default App;
