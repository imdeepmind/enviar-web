import React from 'react';
import sample from '../../../assets/img/account.jpg';

import { RESOURCE } from '../../../constants/endpoints'

const Avatar = (props) => {
    const width = props.width ? props.width : "48px";
    return (
        <img className="class-avatar border border-primary" style={{width:width}} src={props.source === undefined || props.source === '' ? sample : `${RESOURCE}/profile/${props.source}/small`} alt={props.title} />
    )
}

export default Avatar;