import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeCard from "../components/HomeCard";
import { getAnketAction } from "../redux/actions/anketpost";
import "../components/Navbar.css";

const Home = () => {
    // useSelector fonksiyonu kullanılarak anketpost durumu alınıyor
  const { anketpost } = useSelector((state) => state.anketpost);
  const dispatch = useDispatch();

  // Cevaplanmış soruların gösterilip gösterilmeyeceğini kontrol eden state
  const [showCevaplanmisSorular, setShowCevaplanmisSorular] = useState(false);

  const Göster = () => {
    //getAnketAction fonksiyonu kullanılarak bir eylem gönderiliyor ve cevaplanmış soruların gösterilip gösterilmeyeceğini değiştiriliyor
    dispatch(getAnketAction(setShowCevaplanmisSorular(!showCevaplanmisSorular)));
  };

const AnkentEnd = () =>{
    window.location.reload();
}

  // Cevaplanmış soruların gösterilip gösterilmeyeceğine göre soruları filtrele
  const filteredAnketpost = showCevaplanmisSorular
    ? anketpost.filter((soru) => soru.cevap !== "")
    : anketpost;

  return (
    <div>
      <button className="ShowAnswer" onClick={Göster}>
        Cevapları Göster
      </button>
<button className="AnketEnd" onClick={AnkentEnd}>Anketi Bitir</button>
      {filteredAnketpost.map((post, i) => (
        <HomeCard key={i} post={post} i={i} />
      ))}
    </div>
  );
};

export default Home;