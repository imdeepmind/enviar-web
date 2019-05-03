import React, { Fragment } from 'react';

import { RESOURCE } from '../../../constants/endpoints'

const Avatar = (props) => {
    const width = props.width ? props.width : "48px";
    return (
        <Fragment>
            {props.source ? (
                <img 
                    className="class-avatar border border-primary" 
                    style={{width:width}} 
                    src={`${RESOURCE}/profile/${props.source}/small`} 
                    alt={props.title}
                />
            ) : (
                <i className="far fa-user-circle" style={{fontSize: "3em"}}></i>
            )}
        </Fragment>
    )
}

export default Avatar;