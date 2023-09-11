import React from "react";
import Navbar from "../components/mainComponents/navbar";
import Context from "../context/accessacc";
import "@fortawesome/fontawesome-free/css/all.css";
import "../styles/globals.css";
import "../styles/styles.css";
// import 'tw-elements';

function MyApp({ Component, pageProps }) {
  return (
    <>
        <Context>
          <Navbar />
          <Component {...pageProps} />
        </Context>
    </>
  );
}

export default MyApp;
