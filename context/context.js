"use client";

import { createContext, useContext, useState } from "react";

const ModalContext = createContext();
const useModal = () => useContext(ModalContext);

function ModalProvider({ children }) {
  const [modal, setModal] = useState(false);

  return (
    <ModalContext.Provider value={{ modal, setModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export { useModal, ModalProvider };
