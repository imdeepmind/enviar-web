import React, { Fragment } from 'react';

import { RESOURCE } from '../../../constants/endpoints'
import UserBlack from '../../../assets/img/user_black.png';
import UserWhite from '../../../assets/img/user_white.png';

const imageErr = (event, color) => {
    event.target.src = color === 'light' ? UserWhite : UserBlack;
}

const Avatar = (props) => {
    const width = props.width ? props.width : "48px";
    const style = {
        width: width,
        padding: "1px"
    }
    const border = props.border === "light" ? "border-white" : "border-primary";  
    const medium = props.quality === "medium" ? "medium" : "small";
    return (
        <Fragment>
            {props.source ? (
                <img 
                    className={"rounded-circle border " + border} 
                    style={style} 
                    src={`${RESOURCE}/profile/${props.source}/${medium}`} 
                    alt={props.title}
                    onError={(e) => imageErr(e, props.border)}
                />
            ) : (
                <img 
                    className={"rounded-circle"} 
                    style={style} 
                    src={props.border === 'light' ? UserWhite : UserBlack} 
                    alt={props.title}
                    onError={(e) => imageErr(e, props.border)}
                />
            )}
        </Fragment>
    )
}

export default Avatar;