import React, {useState} from 'react';
import "../css/login.css"

const LoginComponent = () => {
    let [email, setEmail] = useState(''),
        [password, setPassword] = useState(''),
        [userName, setUserName] = useState('');
    return (
        <div style={{textAlign: "center"}}>
            <div className="loginBlock">
                <h1>Войти</h1>
                <input placeholder="email" className="input" value={email}
                       onChange={(el) => {setEmail(el.target.value)}}/>
                <input placeholder="password" className="input" type="email" value={password}
                       onChange={(el) => {setPassword(el.target.value)}}/>
                <input placeholder="name" className="input" type="text" value={userName}
                       onChange={(el) => {setUserName(el.target.value)}}/>
                <div className="buttons">
                    <button>Войти</button>
                    <button>Зарегистрироватся</button>
                </div>
            </div>
        </div>
    );
};

export default LoginComponent;