import react, { createContext, useState } from "react";

export const store = createContext(null);

const StoreProvider = (props) => {
  const videosCategory = localStorage.getItem("explore");

  const [category, setCategory] = useState(videosCategory);
  const [nav, setNav] = useState(false);
  const [channelObject, setChannelObject] = useState(null);

  const values = {
    category,
    setCategory,
    nav,
    setNav,
    channelObject,
    setChannelObject,
  };

  return <store.Provider value={values}>{props.children}</store.Provider>;
};

export default StoreProvider;
