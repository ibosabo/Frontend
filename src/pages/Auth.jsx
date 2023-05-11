import React , {useState} from "react";
import { loginAction,registerAction } from "./../redux/actions/auth";
import { useDispatch } from "react-redux";
import "../pages/AuthStyle.css";
const Auth = () =>{
  // signUp adında bir state değişkeni oluşturuluyor ve başlangıçta true değerini alıyor
  const [signUp, setSignUp] = useState(true);
  // authData adında bir state değişkeni oluşturuluoyr ve başlangıçta boş kullanıcı adı, e-posta ve şifre içeriyor
  const [authData, setAuthData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const onChangeFunc = (e) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  };

  //giriş yapıldığında kayıtlı ise registera gönderilecek değilse login yapılacak
  const authFunc = () => {
    if (signUp) {
      dispatch(registerAction(authData));
    } else {
      dispatch(loginAction(authData));
    }
  };
  console.log("authData", authData);

  return (
    <div className="AppBarHeader">
      {" "}
      Anket Yönetim
      <div className="Authentication">
        <div className="LoginEkran">
          <h1 className="RegLogName">{signUp ? "Register" : "LOGİN"}</h1>
          {signUp && (
            <input
              value={authData.username}
              name="username"
              onChange={onChangeFunc}
              type="text"
              placeholder="Username"
              className="UserNameInput"
            />
          )}
          <input
            value={authData.email}
            name="email"
            onChange={onChangeFunc}
            type="text"
            placeholder="email"
            className="EmailNameInput"
          />
          <input
            value={authData.password}
            name="password"
            onChange={onChangeFunc}
            type="password"
            placeholder="password"
            className="password"
          />
        </div>

        <div className="LoggedBefore">
          {signUp ? (
            <span onClick={() => setSignUp(false)}>
              Daha Önce Giriş Yaptın mı?
            </span>
          ) : (
            <span onClick={() => setSignUp(true)}>Kayit olmak için tikla</span>
          )}
        </div>
        <div onClick={authFunc} className="Kayitol_Girisyap">
          {signUp ? "Kayıt Ol" : "Giriş Yap"}
        </div>
      </div>
    </div>
  );
}

export default Auth;