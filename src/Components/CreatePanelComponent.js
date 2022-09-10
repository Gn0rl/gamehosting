import React from 'react';
import GamePage from "../Pages/game Page";

const CreatePanelComponent = () => {
    return (
        <div className="CreatePanel">
            <input inputMode={"text"} aria-valuetext="name" name="GameName" required className="NameGame" placeholder="Название игры"/>
            <input type="image"/>
        </div>
    );
};

export default CreatePanelComponent;