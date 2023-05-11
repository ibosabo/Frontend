

//authrecuder state ve action alır ,state değeri başkangıcı içi boş olur
const anketReducer = (state={anket: false},action) => {

    switch (action.type) {
case "ANKET":

    return{
        anket: action.payload  // Yeni state, eski state'in bir kopyasıdır ancak anket özelliği eylemin verisine eşitlenir.
    }
    default: 
    return state      // Sadece eski state döndürülür.
    }
}
export default anketReducer;