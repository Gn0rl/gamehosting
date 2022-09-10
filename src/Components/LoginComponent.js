import React, {useState} from 'react';
import "../css/login.css"

const LoginComponent = () => {
    let [email, setEmail] = useState(''),
        [password, setPassword] = useState('');
    return (
        <div style={{textAlign: "center"}}>
            <div className="loginBlock">
                <h1>Войти</h1>
                <input placeholder="email" className="input" value={email}
                       onChange={(el) => {setEmail(el.target.value)}}/>
                <input placeholder="password" className="input" type="password" value={password}
                       onChange={(el) => {setPassword(el.target.value)}}/>
                <div className="buttons">
                    <button>Войти</button>
                    <button>Зарегистрироватся</button>
                </div>
            </div>
        </div>
    );
};

export default LoginComponent;