import React from "react";
import PropTypes from 'prop-types';
import './ProfileCard.css';

function ProfileCardTitle ({title}){

    return(
        <div className="profile-title"> {title} </div>
    );

}


export default ProfileCardTitle;


ProfileCardTitle.propTypes = {

    title: PropTypes.string,

}

ProfileCardTitle.defaultTypes = {
    title: 'sushant'
}