import './Login.css';
import GoogleLogin from './GoogleLogin';
function LogIn() {
  return (
    <div className="LogIn">
        <p>Login</p>
        <div className="TextField">
            <div className="loginField">
                <input
                    required
                    placeholder="ID" 
                    label="아이디"
                />
            </div>

            <div className="passwordField">
                <input
                    required
                    placeholder="PW" 
                    label="비밀번호"
                    type="password"
                />
            </div>
        </div>
        <div className="btns">
            <button className="Login_btn">로그인</button>
            <GoogleLogin />
        </div>
        
    </div>
  );
}

export default LogIn;
