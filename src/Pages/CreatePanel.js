import React from 'react';
import Top from "../Components/Top";
import CreatePanelComponent from "../Components/CreatePanelComponent";
import "../css/CreatePanelComponent.css";

const CreatePanel = () => {
    return (
        <div>
            <Top/>
            <CreatePanelComponent/>
        </div>
    );
};

export default CreatePanel;