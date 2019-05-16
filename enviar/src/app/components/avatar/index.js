import React, { Fragment } from 'react';

import { RESOURCE } from '../../../constants/endpoints'
import UserBlack from '../../../assets/img/user_black.png';
import UserWhite from '../../../assets/img/user_white.png';

const Avatar = (props) => {
    const width = props.width ? props.width : "48px";
    const border = props.border === "light" ? "border-white" : "border-primary";  
    const medium = props.quality === "medium" ? "medium" : "small";
    return (
        <Fragment>
            {props.source ? (
                <img 
                    className={"class-avatar border " + border} 
                    style={{width:width}} 
                    src={`${RESOURCE}/profile/${props.source}/${medium}`} 
                    alt={props.title}
                />
            ) : (
                <img 
                    className={"class-avatar"} 
                    style={{width:width}} 
                    src={props.border === 'light' ? UserWhite : UserBlack} 
                    alt={props.title}
                />
            )}
        </Fragment>
    )
}

export default Avatar;