import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteAnketAction,
  updateAnketAction,
} from "../redux/actions/anketpost";
// HomeCard bileşeni oluşturuyor ve post ve i parametrelerini alıyor
const HomeCard = ({ post, i }) => {
  // useDispatch fonksiyonunu kullanarak bir dispatch değişkeni oluşturuluyor
  const dispatch = useDispatch();
  // state değişkeni oluşturuluyor ve başlangıçta post'un sorusu ve cevabını içeriyor
const [anketdata, setAnketdata] = useState({
  soru: post.soru,
  cevap: post.cevap,
});
// input alanındaki değişiklikleri takip eden bir fonksiyon oluşturuluyor
const onchangeFunctions = (e) => {
  setAnketdata({ ...anketdata, [e.target.name]: e.target.value });
};
// anketi güncellemek için bir fonksiyon oluşturuluyor
  const updateAnket= (id) =>{
    dispatch({type: 'ANKET',payload: {open : true,updateid:id}})
  }
  // anketi göndermek için bir fonksiyon oluşturuluyor
  const SendAnket = (id) => {
    dispatch(updateAnketAction(id, anketdata));
  };
 // anketi silmek için bir fonksiyon oluşturuluyor
  const deleteAnket = (id) => {
    dispatch(deleteAnketAction(id));
  };

  return (
    <div>
      <h1 className="Numberofquestions">Soru-{i + 1}</h1>
      <div className="Gösterileceksoru">{post?.soru}</div>
      <input
      className="Input"
        name="cevap"
        value={anketdata?.cevap}
        type="text"
        onChange={onchangeFunctions}
        placeholder="Cevap"
      />
      <button className="SendAnswer" onClick={() => SendAnket(post._id)}>
        Cevap Gönder
      </button>

      <div className="DeleteAndUpdate">
        <button
          onClick={() => deleteAnket(post._id)}
          className="DeleteButton"
        ></button>
        <button
          onClick={() => updateAnket(post._id)}
          className="UpdateButton"
        ></button>
      </div>
    </div>
  );
};

export default HomeCard;
