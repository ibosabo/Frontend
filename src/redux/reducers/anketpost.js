

//anket ilk başta array şeklinde 
const anketPostReducer = (state = {anketpost:[]},action) => {
switch (action.type) {
  case "GET_ANKET":
    return {
      anketpost: action.payload,
    };

  case "CREATE_POST":
    return {
        anketpost: [...state.anketpost ,action.payload],//Bütün state altındaki postları dön ve action payload ekle
        
    };
  case "UPDATE_POST":
    return {
      anketpost: state.anketpost.map(post => post._id === action.payload._id ? action.payload : post),//Bu işlev, mevcut anketin _id özelliğini action.payload._id ile karşılaştırır. Eğer eşleşirse, güncellenmiş anket verilerini (action.payload) döndürür. Eşleşmezse, mevcut anketi (post) döndürür.
    };

  case "DELETE_POST":
    return {
      anketpost: [...state.anketpost.filter((post) => post._id!== action.payload)],// state altındaki tüm postları gezer ve action.payload ile eşleşmeyenleri yeni bir diziye ekler
    };

  default:
    return state;
}

}

export default anketPostReducer;