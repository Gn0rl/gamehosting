import React from 'react';
import User from '../Images/stateGame';


export default function MainProfileComponent() {
  return (
    <div className="MainProfile">
        <img src={User.img} alt="" className="BigIcon"/>
        <div className='mainUserInfo'>
            <h1 className="UserName">{User.name}</h1>
            <p className='aboutMe'>{User.description}</p>
        </div>
    </div>
  )
}
