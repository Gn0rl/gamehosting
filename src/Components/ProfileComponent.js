import React from 'react';
import Icon from '../Components/User.png';
import '../css/Profil.css';

const ProfileComponent = (props) => {
    return (
        <div className="MainProfile">
            <img src={Icon} alt="" className="BigIcon"/>
            <h1 className="UserName">{props.name}</h1>
        </div>
    );
};

export default ProfileComponent;