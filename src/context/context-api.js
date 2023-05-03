import React, { useEffect, useState } from "react";


const AppContext = React.createContext({
  isPhone: "",
  overlayActive: "",
  showOverlay: () => {},
  closeOverlay: () => {}
});

export const AppProvider = (props) => {
  const [width, setWidth] = useState();
  const [overlayActive, setOverlayActive] = useState();
  
  useEffect(() => {
    const getWindowWidth = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", getWindowWidth);
    getWindowWidth();
  }, []);

  let isPhone = false;

  isPhone = width <= 600;

  const showOverlay = () => {
    setOverlayActive(true);
    console.log(overlayActive)
  }

  const closeOverlay = () => {
    setOverlayActive(false);
    console.log(overlayActive);
  }

  const appContext = {
    isPhone,
    overlayActive,
    showOverlay,
    closeOverlay
  };
  return (
    <AppContext.Provider value={appContext}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
