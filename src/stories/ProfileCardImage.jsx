import React from "react";
import PropTypes from 'prop-types';


function ProfileCardImage ([image]){
    return (
        <img src={image} alt="system hai bhaiya ji"/>
    );
}

export default ProfileCardImage;

ProfileCardImage.protoTypes = {

image: PropTypes.string,

}


ProfileCardImage.defaultProps = {
    image: './elon.jpg',
}