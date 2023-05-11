import React, { useState } from "react";
import "../components/Navbar.css";
import {useDispatch, useSelector} from 'react-redux';
import {createAnketAction,updateAnketAction} from '../redux/actions/anketpost'

const Anket = () => {
   // anketdata adında bir state değişkeni oluşturulur ve başlangıçta boş soru ve cevap içerir
 const [anketdata,setAnketData] =useState({soru: '',cevap: ''})

const dispatch = useDispatch();
  // useSelector fonksiyonu kullanılarak anket durumu alınıyor
const {anket} = useSelector(state => state.anket)

console.log('anket' ,anket)
// input alanındaki değişiklikleri takip eden bir fonksiyon oluşturuluyor
 const onchangeFunctions =(e) => {
  setAnketData({...anketdata,[e.target.name]: e.target.value})
}
 // anket oluşturmak veya güncellemek için bir fonksiyon oluşturulur 
const createAnket = () => {
  if(anket?.updateid){//Eğer anket nesnesi null veya undefined ise, ifadenin değeri undefined olur ve if koşulu false olarak değerlendirilir

    dispatch(updateAnketAction(anket?.updateid,anketdata)) // updateAnketAction fonksiyonunu kullanarak bir eylem gönderilir
  }
  else{
    dispatch(createAnketAction(anketdata))
  }
   // ANKET durumu false olarak ayarlayarak anket bileşeni kapatılır
  dispatch({type:'ANKET',payload:false})
}

  return (
    <div className="AnketYönetimSayfasi">
      <div >
        <h1>Anket Yönetim Sayfası</h1>
        </div>
     <div className="AnketProcess">
        <input name="soru" value={anketdata.soru} onChange ={onchangeFunctions} type="text" placeholder="Soru"/>
        <div onClick={createAnket} className="AnketShareButton"> {anket?.updateid ? "Güncelle " : "Anketi Yayınla"}</div>
     </div>
     
    </div>
  );
};

export default Anket;