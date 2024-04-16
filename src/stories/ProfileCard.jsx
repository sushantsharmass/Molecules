import React from "react";
import PropTypes from 'prop-types';
import './ProfileCard.css';
import ProfileCardTitle from "./ProfileCardTitle";
import ProfileCardImage from "./ProfileCardImage";

export const ProfileCard = ({backgroundColor, coverBackgroundColor,buttonColor,label,labelColor, directed,image,title,description ,descriptionColor})=>{

    return (
        <div className="upc" key={'card'}>
        <div className="gradiant" style={{background:coverBackgroundColor}}></div>
        <div className="profile-down" style={{background:backgroundColor}}>
            {/* <img src={image} alt="system hai bhaiya ji"/> */}
            {/* <div className="profile-title"> {title} </div> */}
            {/* <ProfileCardImage 
            image= './elon.jpg'
            /> */}
            <ProfileCardImage
            image="./elon.jpg" 
            />
            <ProfileCardTitle title={"Hello"} />
            <div className="profile-descp" style={{color:descriptionColor}}>
              {description}
            </div>
            <div className="profile-button" style={{background: buttonColor}}>
                <a href={directed} target="_blank" style={{color:labelColor}}> {label}  </a>
            </div>
        </div>
    </div>
    );
    

};

//Proptypes 

ProfileCard.propTypes = {

//What background the card is having
backgroundColor: PropTypes.string,

//what is the cover background of the card
coverBackgroundColor: PropTypes.string,

//Button contents

buttonColor: PropTypes.string,

label: PropTypes.string,

labelColor: PropTypes.string,

directed: PropTypes.string,

image: PropTypes.string,

title: PropTypes.string,

description: PropTypes.string,

descriptionColor: PropTypes.string,

};

ProfileCard.defaultProps = {

    backgroundColor: undefined,
    coverBackgroundColor: '#205fff',
    buttonColor: '#205fff',
    label: 'Contact Me ',
    labelColor: "#FFFFFF",
    directed: 'https://rollupjs.org/introduction/',
    image: './elon.jpg',
    title: 'Elon Musk',
    descriptionColor: '#000000',
    description: ' I am the founder, chairman & chief executive officer of spacex, CEO and product architecture of tesla inc and CTO of twitter',
}