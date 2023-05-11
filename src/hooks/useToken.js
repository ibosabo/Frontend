import React,{useState, useEffect } from 'react'


//localstoges kaydedilen tokeni gösterir

const useToken = () => {
    const [token,setToken] = useState('')//başlangıç tokeni boş olcak
    useEffect(() => {        //sayfa  yüklenince 
       setToken(JSON.parse(localStorage.getItem('auth'))) //auth adındaki verileri token içerisine setlenir

    },[])
    return [token]//array şeklinde döndürülür
} 
export default useToken