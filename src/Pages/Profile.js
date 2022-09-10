import React from 'react';
import Top from '../Components/Top';
import ProfileComponent from "../Components/ProfileComponent";

const Profile = () => {
    return (
        <>
            <Top/>
            <div className="container">
                <ProfileComponent/>
            </div>
        </>
    );
};

export default Profile;