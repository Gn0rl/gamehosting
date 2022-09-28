import React from 'react';
import Top from '../Main Components/Top';
import ProfileComponent from "../Main Components/ProfileComponent";

const Profile = () => {
    return (
        <>
            <Top ProfileIcon={true}/>
            <div className="container">
                <ProfileComponent/>
            </div>
        </>
    );
};

export default Profile;