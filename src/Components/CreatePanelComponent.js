import React from 'react';
import GamePage from "../Pages/game Page";

const CreatePanelComponent = () => {
    return (
        <div className="CreatePanel">
            <input inputMode={"text"} aria-valuetext="name" name="GameName" required className="NameGame" placeholder="Название игры"/>
            <form className='upload-container'>
                <h1 className='textInUploadImage'>Иконка игры</h1>
                    <div className='pasteUmage'>
                        <input id="file-input" type="file" name="file" multiple/>
                        <label for="file-input">
                            <div/>
                        </label>
                        <h3 for="file-input">Выберите файл</h3>
                    </div>
            </form>
        </div>
    );
};

export default CreatePanelComponent;