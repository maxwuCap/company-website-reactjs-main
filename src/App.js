import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React from 'react';
//import ReactDOM from 'react-dom';
import Route from "./Routes";

function App() {
  return (
    <>
      <Navbar>
      </Navbar>
      <Header/>
      <Route />
      <Footer />
    </>
  );
}

export default App;
