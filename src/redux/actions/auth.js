import axios from 'axios'



export const registerAction = (authData) => async(dispatch) => {//backendden frontende gelen authdatayı kayıtola basılınca bu kısma getirilir
    try {
        const{data} = await axios.post('http://localhost:5000/register',authData)
        dispatch({type : 'register', payload:data})//type registerı oluşturulan datayı gönderecek
        window.location = '/auth'
    } catch (error) {
        
    }
}

export const loginAction = (authData) => async(dispatch) => {
    try {
        const{data} = await axios.post('http://localhost:5000/login',authData)
        dispatch({type : 'Login', payload:data})//type logini oluşturulan datayı gönderir 
        window.location = '/'

    } catch (error) {
        console.log(error)
    }
}   