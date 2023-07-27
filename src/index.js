import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { DartThemeProvider } from "./DarkThemeContext";
import App from "./App";

import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import "bootstrap/dist/js/bootstrap.js";
import logo from "./ret.jpeg";

//  import 'swiper/css/bundle';
import reportWebVitals from "./reportWebVitals";
i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "ar", "fr"],
    fallbackLng: "en",
    debug: false,
    // Options for language detector
    detection: {
      order: ["path", "cookie", "htmlTag"],
      caches: ["cookie"],
    },
    // react: { useSuspense: false },
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
  });

const loadingMarkup = (
  <div
    className="py-30 text-center "
    style={{
      marginTop: "350px",
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
    }}
  >
   
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <DartThemeProvider>
        <App />
      </DartThemeProvider>
    </React.StrictMode>
  </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
