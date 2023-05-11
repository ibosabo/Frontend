
import axios from 'axios'

export const getAnketAction = () => async(dispatch) => {
    try {//postları isterken get işlemi yapılır
        const{data} = await axios.get('http://localhost:5000/getAnket')// Redux store'a bir eylem gönderilir. Eylemin tipi "GET_ANKET" olarak belirlenir.
        dispatch({type : 'GET_ANKET', payload:data}) // Fonksiyon bir "async" fonksiyondur ve "dispatch" parametresini alır.
    } catch (error) {
        
    }
}
export const createAnketAction = (anketdata) => async(dispatch) => { 
    try {
        const{data} = await axios.post('http://localhost:5000/createAnket',anketdata);// Redux'ta kullanmak üzere "createAnketAction" adında bir fonksiyon tanımlanır.
        dispatch({type : 'CREATE_POST', payload:data}) 
    } catch (error) {
        
    }
}
export const updateAnketAction = (id,anketdata) => async(dispatch) => {
    try {
        const{data} = await axios.patch(`http://localhost:5000/updateAnket/${id}`,anketdata) // axios kütüphanesi ile bir PATCH isteği yapılır ve sonuç "data" değişkenine atanır.
        dispatch({type : 'UPDATE_POST', payload:data})
        

    } catch (error) {
        
    }
}
export const deleteAnketAction = (id) => async(dispatch) => {
    try {
      await axios.delete(`http://localhost:5000/deleteAnket/${id}`)//  axios kütüphanesi ile bir DELETE isteği yapılır.
        dispatch({type : 'DELETE_POST', payload:id})
        

    } catch (error) {
        
    }
}

