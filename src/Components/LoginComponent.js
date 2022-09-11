import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "../css/login.css";
import {Paths} from '../path';

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
                    <Link to={Paths[0].path}>
                        <button>Войти</button>
                        <button>Зарегистрироватся</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LoginComponent;