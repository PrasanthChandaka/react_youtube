import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Shorts from "./pages/Shorts";
import Subscriptions from "./pages/Subscriptions";
import You from "./pages/You";
import History from "./pages/History";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Navbar/Nav";
import Category from "./pages/Category";

const App = () => {
  return (
    <div className="h-full w-full overflow-hidden relative">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shorts" element={<Shorts />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/you" element={<You />} />
        <Route path="/history" element={<History />} />
        <Route path="/feed/:id" element={<Category />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
