import React from "react";
import "../components/Navbar.css";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();

  const openAnket = () => {
    // ANKET durumunu true olarak ayarlayarak anket bileşenini açılır
    dispatch({ type: "ANKET", payload: true });
  };

  return (
    <div className="AnketContainer">
      <div className="Anketfirstheader">Anket</div>
      <div onClick={openAnket} className="AnketCreate">
        Anket Oluştur
      </div>
    </div>
  );
};

export default Navbar;
