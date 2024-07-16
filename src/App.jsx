import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Navbar/Nav";
import Player from "./pages/Player";
const Home = lazy(() => import("./pages/Home"));
const Shorts = lazy(() => import("./pages/Shorts"));
const Subscriptions = lazy(() => import("./pages/Subscriptions"));
const You = lazy(() => import("./pages/You"));
const History = lazy(() => import("./pages/History"));
const Category = lazy(() => import("./pages/Category"));

const App = () => {
  return (
    <div className="h-full w-full overflow-hidden relative">
      <Header />
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/shorts"
          element={
            <Suspense>
              <Shorts />
            </Suspense>
          }
        />
        <Route
          path="/subscriptions"
          element={
            <Suspense>
              <Subscriptions />
            </Suspense>
          }
        />
        <Route
          path="/you"
          element={
            <Suspense>
              <You />
            </Suspense>
          }
        />
        <Route
          path="/history"
          element={
            <Suspense>
              <History />
            </Suspense>
          }
        />
        <Route
          path="/feed/:id"
          element={
            <Suspense>
              <Category />
            </Suspense>
          }
        />
        <Route
          path="/:categoryId/:id"
          element={
            <Suspense>
              <Player />
            </Suspense>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
