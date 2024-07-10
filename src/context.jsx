import react, { createContext, useState } from "react";

export const store = createContext(null);

const StoreProvider = (props) => {
  const videosCategory = localStorage.getItem("explore");

  const [dark, setDark] = useState(false);
  const [category, setCategory] = useState(videosCategory);
  const [nav, setNav] = useState(false);

  const values = {
    category,
    setCategory,
    dark,
    setDark,
    nav,
    setNav,
  };

  return <store.Provider value={values}>{props.children}</store.Provider>;
};

export default StoreProvider;
