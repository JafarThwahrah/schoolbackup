import logo from "./logo.svg";
import "./App.css";
import $ from "jquery";
import { findDOMNode } from "react-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Routes from "./pages/Routes";
// import "../src/assets/css/";
// import "../src/assets/js";
// import "../src/assets/fonts";

function App() {
  return (
    <>
      <Header />
      <Routes />
      <Footer />
    </>
  );
}

export default App;
