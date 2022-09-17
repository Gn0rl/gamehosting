import React from 'react';
import { useState } from 'react';

const CreatePanelComponent = () => {
    let [gameLogo, setGameLogo] = useState(false),
        img = {
            display: 'block',
            opacity: '0'
        }
    return (
        <div className="CreatePanel">
            <input inputMode={"text"} aria-valuetext="name" name="GameName"
            required className="NameGame" placeholder="Название игры"/>
            <h1 className='textInUploadImage'>Иконка игры</h1>
            <div className='inputImg'>
                <input style={img} tabindex="-1" type="file" accept="image/*" required="required"/>
                <input style={img} tabindex="-1" type="file" accept="image/*" required="required"/>
                <input style={img} tabindex="-1" type="file" accept="image/*" required="required"/>
                <input style={img} tabindex="-1" type="file" accept="image/*" required="required"/>
                <input style={img} tabindex="-1" type="file" accept="image/*" required="required"/>
                <input style={img} tabindex="-1" type="file" accept="image/*" required="required"/>
                <input style={img} tabindex="-1" type="file" accept="image/*" required="required"/>
                <input style={img} tabindex="-1" type="file" accept="image/*" required="required"/>
            </div>
            {gameLogo && <img src={gameLogo} alt=''/>}
            
        </div>
    );
};

export default CreatePanelComponent;