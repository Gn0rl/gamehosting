import React from 'react';
import Top from "../Main Components/Top";
import CreatePanelComponent from "../Main Components/CreatePanelComponent";
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