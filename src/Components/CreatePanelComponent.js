import React from 'react';
import { useState } from 'react';

const CreatePanelComponent = () => {
    let [gameLogo, setGameLogo] = useState(false),
        img = {
            display: 'block',
            opacity: '100'
        },
        [imgLoad, setImgLoad] = useState(false)

    
    
    return (
        <div className="CreatePanel">
            <input inputMode={"text"} aria-valuetext="name" name="GameName"
            required className="NameGame" placeholder="Название игры"/>
            <h1 className='textInUploadImage'>Иконка игры</h1>
            <div className='inputImg'>
                <input style={img} type="file" onChange={el => {
                let reader = new FileReader()
                reader.onload = ev => {
                    console.log(ev.target.result)
                }
            
                reader.readAsDataURL(el)
            }}/>
            </div>
            {imgLoad && <img src={imgLoad}/>}
            {gameLogo && <img src={gameLogo} alt=''/>}
            
        </div>
    );
};

export default CreatePanelComponent;