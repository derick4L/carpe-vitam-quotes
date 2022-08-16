import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState, createContext } from "react";
import { db } from "./firebase.config";
import { collection, getDocs } from "firebase/firestore";

import Main from "./routes/Main";
import AuthPage from "./routes/AuthPage";
import WebLayout from "./layouts/web/WebLayout";

import "rsuite/dist/rsuite.min.css";
import "./styles/customRsuite.css";

import "./styles/global.scss";
import "./styles/responsive.scss";
import "./styles/webLayout.scss";
import "./styles/authLayout.scss";
import "./styles/quotesCycler.scss";
import "./styles/main.scss";

export const DataContext = createContext();

const App = () => {
  const [quotesInfo, setQuotesInfo] = useState("");
  const [authUser, setAuthUser] = useState(localStorage.getItem("user"));

  const dbReference = collection(db, "currentQuotes");

  useEffect(() => {
    const getQuotesFromDB = async () => {
      const quotesData = await getDocs(dbReference);
      const quotesArray = quotesData.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setQuotesInfo(
        quotesArray[Math.floor(Math.random() * quotesArray.length)]
      );
    };

    getQuotesFromDB();

    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <WebLayout>
        <DataContext.Provider
          value={{
            quotes: [quotesInfo, setQuotesInfo],
            user: [authUser, setAuthUser],
          }}
        >
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/auth" element={<AuthPage />} />
            </Routes>
          </BrowserRouter>
        </DataContext.Provider>
      </WebLayout>
    </div>
  );
};
export default App;
