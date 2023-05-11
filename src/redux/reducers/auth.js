

//authrecuder state ve action alır ,state değeri başkangıcı içi boş
const authReducer = (state={auth: null},action) => {

    switch (action.type) {
case "Register":
    localStorage.setItem("auth", JSON.stringify(action.payload))//jsona kaydetme işlemi
    return{
        ...state,
        auth: action.payload //auth içi dolucak actiondan gelen değerler ile 
    }
    case "Login":
        localStorage.setItem("auth", JSON.stringify(action.payload))//jsona kaydetme işlemi yapılır
        return{
            ...state,
            auth: action.payload //actiondan gelen değerler ile auth içi dolucak 
        }
        case "Logout":
            localStorage.clear(); //json cevirildikten sonra  localstorage token silinir
            return{
                ...state,
                auth: null //auth içini null yapılıyor
            }

    default: 
    return state
    }
}
export default authReducer;