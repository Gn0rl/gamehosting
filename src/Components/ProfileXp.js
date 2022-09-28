import React from 'react';
import User from '../Images/stateGame';

export default function ProfileXp() {
    let xp = () => {
        if(User.reating < 45) {return 'orange'}
        if(User.reating < 130) {return 'silver'}
        if(User.reating < 250) {return 'yellow'}
        return 'aliceblue'
    },
    style = {color: xp()};

  return (
    <div className='reating'>
        <h2>Опыт:</h2>
        <h1 style={style}>{User.reating}</h1>
    </div>
  )
}
