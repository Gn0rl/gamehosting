import React from 'react';
import { useState } from 'react';

const CreatePanelComponent = () => {
    let [gameLogo, setGameLogo] = useState(false),
        img = {
            display: 'block',
            opacity: '100'
        },
        [imgLoad, setImgLoad] = useState(false),
        [discriprion, setDiscriprion] = useState('');

    
    
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
            <textarea placeholder='описание' className='discription' value={discriprion} 
            onChange={el => {setDiscriprion(el.target.value)}}/>
            <h1>Картинки игры</h1>
            <div className='inputImg' style={{position: 'static'}}>
                <input type='file'/>
            </div>

        </div>
    );
};

export default CreatePanelComponent;